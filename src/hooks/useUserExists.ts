import useSWR from "swr";

const fetcher = async (url: string) => await fetch(url).then(res => res.json());

const useUserExists = (email: string) => {
  const { data, isValidating } = useSWR(
    `/api/find-user?email=${email}`,
    fetcher,
    {}
  );

  return { userExists: data?.userExists };
};

export default useUserExists;
