import { clearAccessToken } from "@/lib/access-token";
import { clearBrowserStorage } from "./session-storage";
import firebase from "@/lib/firebase";

const logout = async (redirect: (path: string) => void) => {
  clearAccessToken();
  clearBrowserStorage();

  firebase
    .auth()
    .signOut()
    .catch(error => console.error(error.message));

  await fetch("/api/logout");
  redirect("/login");
};

export default logout;
