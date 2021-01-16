import { FormikHelpers } from "formik";

export const initialValues = {
  photo: "",
  name: "",
  bio: "",
  phone: "",
  email: "",
  password: ""
};

type TValues = typeof initialValues;

export const handleSubmit = (
  values: TValues,
  actions: FormikHelpers<TValues>
) => {
  console.log(values, actions);
};
