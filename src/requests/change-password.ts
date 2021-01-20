import { getAccessToken } from "@/lib/access-token";
import renewToken from "@/utils/renew-token";

const changePassword = async (values: { current: string; new: string }) => {
  await renewToken();
  const token = getAccessToken();

  return await fetch("/api/change-password", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(values)
  });
};

export default changePassword;
