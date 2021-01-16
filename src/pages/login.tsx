import Head from "next/head";
import Layout from "@/components/Layout";
import FormWrapper from "@/components/Auth/FormWrapper";
import LoginForm from "@/components/Auth/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout maxWidth="xs">
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </Layout>
    </>
  );
};

export default Login;
