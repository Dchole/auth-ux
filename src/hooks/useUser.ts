import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/requests/fetcher";
import getNewToken from "@/requests/get-new-token";

const useUser = () => {
  const { data: user, error, mutate } = useSWR("/api/user", fetcher);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [renewingToken, setRenewingToken] = useState(true);

  useEffect(() => {
    getNewToken()
      .then(accessToken => {
        accessToken && setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false))
      .finally(() => setRenewingToken(false));
  }, []);

  return {
    user,
    error,
    mutate,
    fetchingUser: !user && !error,
    renewingToken,
    isAuthenticated
  };
};

export default useUser;
