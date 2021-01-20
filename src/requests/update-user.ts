import { getAccessToken } from "@/lib/access-token";
import { TValues } from "@/lib/formik-options/profile-options";
import renewToken from "@/utils/renew-token";

const updateUser = async (values: TValues) => {
  await renewToken();
  const token = getAccessToken();

  return await fetch("/api/update-user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(values)
  });
};

export default updateUser;
