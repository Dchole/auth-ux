import * as Yup from "yup";
import { FormikHelpers } from "formik";

export const initialValues = {
  photo: "",
  name: "",
  bio: "",
  phone: "",
  email: ""
};

type TValues = typeof initialValues;

export const validationSchema = Yup.object({
  photo: Yup.string().label("Photo"),
  name: Yup.string().min(3).label("Name"),
  bio: Yup.string().min(80).label("Bio"),
  phone: Yup.string().min(10).label("Phone Number"),
  email: Yup.string().email().required().label("Email")
});

export const handleSubmit = (
  values: TValues,
  actions: FormikHelpers<TValues>
) => {
  console.log(values, actions);
};
