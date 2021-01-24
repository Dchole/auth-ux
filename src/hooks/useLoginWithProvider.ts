import { useContext, useEffect, useState } from "react";
import providers from "@/lib/providers";
import firebase from "@/lib/firebase";
import { setAccessToken } from "@/lib/access-token";
import { DeviceContext } from "@/components/DeviceContext";

const useLoginWithProvider = (redirect: (path: string) => void) => {
  const device = useContext(DeviceContext);
  const [error, setError] = useState("");
  const [signInAttempt, setSignInAttempt] = useState(false);

  const clearError = () => setError("");

  const handleResult = async ({ user }: firebase.auth.UserCredential) => {
    const res = await fetch("/api/sign-with-providers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    !res.ok && setError(data);

    setAccessToken(data.accessToken);
    redirect("/profile");
  };

  const login = async (provider: string) => {
    if (device === "mobile") {
      firebase.auth().signInWithRedirect(providers[provider]);
      setSignInAttempt(true);
    } else {
      firebase
        .auth()
        .signInWithPopup(providers[provider])
        .then(handleResult)
        .catch(error => setError(error.message));
    }
  };

  useEffect(() => {
    if (signInAttempt) {
      firebase
        .auth()
        .getRedirectResult()
        .then(handleResult)
        .catch(error => setError(error.message));
    }
  }, []);

  return { error, login, clearError };
};

export default useLoginWithProvider;
