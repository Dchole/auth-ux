import { FormikHelpers } from "formik";

export const initialValues = {
  email: "",
  password: ""
};

export type TValues = typeof initialValues;

export const handleSubmit = (
  redirect: (path: string) => Promise<boolean>
) => async (
  values: TValues,
  { setFieldError, setSubmitting }: FormikHelpers<TValues>
) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("not ok");
      return setFieldError(data.key, data.message);
    }

    console.log("OK");

    redirect("/login");
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
};
