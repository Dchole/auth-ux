import { clearAccessToken } from "@/lib/access-token";
import { clearBrowserStorage } from "./session-storage";

const logout = async (redirect: (path: string) => void) => {
  clearAccessToken();
  clearBrowserStorage();

  await fetch("/api/logout");
  redirect("/login");
};

export default logout;
