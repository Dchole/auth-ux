import { getAccessToken, setAccessToken } from "@/lib/access-token";
import jwtDecode from "jwt-decode";

const getNewToken = async () =>
  await fetch("/api/refresh-token")
    .then(res => res.json())
    .catch(err => console.error(err));

const refreshToken = async () => {
  let token = getAccessToken();

  // Fetch new token if token is undefined
  if (!token) {
    const { accessToken } = await getNewToken();
    token = accessToken;
  } else {
    const { exp }: any = jwtDecode(token);

    if (Date.now() >= exp * 1000) {
      const { accessToken } = await getNewToken();
      setAccessToken(accessToken);
      token = accessToken;
    }
  }
};

export default refreshToken;
