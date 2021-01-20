import { useRouter } from "next/router";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import EditProfile from "@/components/Profile/Edit";
import useUser from "@/hooks/useUser";
import rearrangeUserKeys from "@/utils/rearrange-user-keys";

const Edit = () => {
  const { user, fetchingUser } = useUser();
  const { back } = useRouter();

  return (
    <>
      <Head>
        <title>Edit Account</title>
      </Head>
      <Header />
      <Layout>
        <div id="back-button">
          <Button
            color="primary"
            startIcon={<ChevronLeftIcon />}
            onClick={back}
          >
            Back
          </Button>
        </div>
        {!fetchingUser && <EditProfile user={rearrangeUserKeys(user)} />}
      </Layout>
      <style jsx>{`
        #back-button {
          width: 100%;
          margin-top: 220px;
        }
      `}</style>
    </>
  );
};

export default Edit;
