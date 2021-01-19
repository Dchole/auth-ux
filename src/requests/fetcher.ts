import { getAccessToken } from "@/lib/access-token";
import renewToken from "@/utils/renew-token";

const fetcher = async (url: string) => {
  await renewToken();
  const token = getAccessToken();

  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};
export default fetcher;
