import jwtDecode from "jwt-decode";
import getNewToken from "@/requests/get-new-token";
import { getAccessToken, setAccessToken } from "@/lib/access-token";

const renewToken = async () => {
  let token = getAccessToken();

  // Fetch new token if token is undefined
  if (!token) {
    const accessToken = await getNewToken();
    token = accessToken;
  } else {
    const { exp }: any = jwtDecode(token);

    if (Date.now() >= exp * 1000) {
      const accessToken = await getNewToken();
      setAccessToken(accessToken);
      token = accessToken;
    }
  }
};

export default renewToken;
