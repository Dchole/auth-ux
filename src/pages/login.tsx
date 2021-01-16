import Head from "next/head";
import Layout from "@/components/Layout";
import LoginForm from "@/components/Auth/LoginForm";
import FormWrapper from "@/components/Auth/FormWrapper";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout maxWidth="xs">
        <FormWrapper href="/">
          <LoginForm />
        </FormWrapper>
      </Layout>
    </>
  );
};

export default Login;
