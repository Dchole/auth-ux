import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Header from "@/components/Header";
import ProfileInfo from "@/components/Profile/Info";
import Layout from "@/components/Layout";
import useUser from "@/hooks/useUser";

const Profile = () => {
  const { replace } = useRouter();
  const { renewingToken, isAuthenticated } = useUser();

  useEffect(() => {
    if (!renewingToken && !isAuthenticated) {
      replace("/login");
    }
  }, [renewingToken, isAuthenticated]);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      {renewingToken ? (
        <></>
      ) : (
        <>
          <Header />
          <Layout>
            <Typography component="h1" variant="h4" align="center">
              Personal info
            </Typography>
            <Typography component="p" variant="subtitle1" align="center">
              Basic info, like your name and photo
            </Typography>
            <ProfileInfo />
          </Layout>
        </>
      )}
    </>
  );
};

export default Profile;
