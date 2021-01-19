import { setAccessToken } from "@/lib/access-token";
import { getRefreshTokenSession } from "@/utils/session-storage";

const getNewToken = async (): Promise<string> => {
  const token = getRefreshTokenSession();

  try {
    const { accessToken } = await fetch("/api/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({ token })
    })
      .then(res => res.json())
      .catch(err => console.error(err));

    setAccessToken(accessToken);

    return accessToken;
  } catch (error) {
    console.log(error);
  }
};

export default getNewToken;
