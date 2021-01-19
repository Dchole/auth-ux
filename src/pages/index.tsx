import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import RegisterForm from "@/components/Auth/RegisterForm";
import FormWrapper from "@/components/Auth/FormWrapper";
import useUser from "@/hooks/useUser";

const Register = () => {
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
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renewingToken ? (
        <></>
      ) : (
        <Layout maxWidth="xs">
          <FormWrapper href="login">
            <RegisterForm />
          </FormWrapper>
        </Layout>
      )}
    </>
  );
};

export default Register;
