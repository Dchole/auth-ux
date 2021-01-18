import { FormikHelpers } from "formik";

export const initialValues = {
  email: "",
  password: "",
  remember: ""
};

export type TValues = typeof initialValues;

export const handleSubmit = (
  values: TValues,
  { setSubmitting }: FormikHelpers<TValues>
) => async (redirect: (path: string) => void) => {
  try {
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    redirect("/profile");
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
};
