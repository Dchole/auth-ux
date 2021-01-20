import { getAccessToken } from "@/lib/access-token";
import renewToken from "@/utils/renew-token";

const getUser = async (url: string) => {
  await renewToken();
  const token = getAccessToken();

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data);
  }

  return data;
};
export default getUser;
