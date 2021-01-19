import Head from "next/head";
import Layout from "@/components/Layout";
import FormWrapper from "@/components/Auth/FormWrapper";
import LoginForm from "@/components/Auth/LoginForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "@/hooks/useUser";

const Login = () => {
  const { replace } = useRouter();
  const { renewingToken, isAuthenticated } = useUser();

  useEffect(() => {
    if (!renewingToken && isAuthenticated) {
      replace("/profile");
    }
  }, [renewingToken, isAuthenticated]);

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renewingToken ? (
        <></>
      ) : (
        <Layout maxWidth="xs">
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        </Layout>
      )}
    </>
  );
};

export default Login;
