import { setRefreshTokenSession } from "@/utils/session-storage";
import { FormikHelpers } from "formik";
import { setAccessToken } from "../access-token";

export const initialValues = {
  email: "",
  password: "",
  remember: false
};

export type TValues = typeof initialValues;

export const handleSubmit = (
  redirect: (path: string) => Promise<boolean>
) => async (
  values: TValues,
  { setSubmitting, setFieldError }: FormikHelpers<TValues>
) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const data = await res.json();

    if (!res.ok) {
      return setFieldError(data.key, data.message);
    }

    setAccessToken(data.accessToken);
    setRefreshTokenSession(data.refreshToken);

    redirect("/profile");
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
};
