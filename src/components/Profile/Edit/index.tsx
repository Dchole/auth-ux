import { Form, Formik } from "formik";
import {
  handleSubmit,
  initialValues
} from "@/lib/formik-options/profile-options";

const EditProfile = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form></Form>
    </Formik>
  );
};

export default EditProfile;
