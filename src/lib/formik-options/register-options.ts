import { FormikHelpers } from "formik";

export const initialValues = {
  email: "",
  password: ""
};

export type TValues = typeof initialValues;

export const handleSubmit = async (
  values: TValues,
  { setSubmitting }: FormikHelpers<TValues>
) => {
  try {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
};
