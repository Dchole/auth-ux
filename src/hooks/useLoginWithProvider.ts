import { useContext, useEffect, useState } from "react";
import { DeviceContext } from "@/components/DeviceContext";
import providers, { TProvider } from "@/lib/providers";
import firebase from "@/lib/firebase";
import { setAccessToken } from "@/lib/access-token";

const useLoginWithProvider = (provider: TProvider) => {
  const mobile = useContext(DeviceContext);
  const [error, setError] = useState("");

  const login = async () => {
    if (mobile) {
      firebase.auth().signInWithPopup(providers[provider]);
    } else {
      firebase
        .auth()
        .signInWithPopup(providers[provider])
        .then(({ credential }) => {
          console.log(credential);
          // @ts-ignore
          setAccessToken(credential.accessToken);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  };

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(({ credential }) => {
        console.log(credential);
        // @ts-ignore
        setAccessToken(credential.accessToken);
      });
  }, []);

  return { error, login };
};

export default useLoginWithProvider;
