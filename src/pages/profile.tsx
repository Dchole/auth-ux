import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import Header from "@/components/Header";
import ProfileInfo from "@/components/Profile/Info";
import Layout from "@/components/Layout";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
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
  );
};

export default Profile;
