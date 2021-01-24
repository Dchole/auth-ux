import firebase from "@/lib/firebase";

const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider(),
  github: new firebase.auth.GithubAuthProvider()
};

export type TProvider = "google" | "facebook" | "twitter" | "github";

export default providers;
