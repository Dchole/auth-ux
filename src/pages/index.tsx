import Head from "next/head";
import Layout from "@/components/Layout";
import RegisterForm from "@/components/Auth/RegisterForm";
import FormWrapper from "@/components/Auth/FormWrapper";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout maxWidth="xs">
        <FormWrapper href="login">
          <RegisterForm />
        </FormWrapper>
      </Layout>
    </>
  );
};

export default Register;
