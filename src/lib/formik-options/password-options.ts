import * as Yup from "yup";
import { FormikHelpers } from "formik";
import changePassword from "@/requests/change-password";
import matchRegex from "@/utils/match-message";

export const initialValues = {
  current: "",
  new: ""
};

export type TValues = typeof initialValues;

export const validationSchema = Yup.object({
  current: Yup.string()
    .min(8)
    .matches(/[a-z]/, {
      message: matchRegex("Current Password", "lowercase")
    })
    .matches(/[A-Z]/, {
      message: matchRegex("Current Password", "uppercase")
    })
    .matches(/[0-9]/, {
      message: matchRegex("Current Password", "numeric")
    })
    .required("Current Password cannot be empty")
    .label("Current Password"),
  new: Yup.string()
    .min(8)
    .matches(/[a-z]/, {
      message: matchRegex("New Password", "lowercase")
    })
    .matches(/[A-Z]/, {
      message: matchRegex("New Password", "uppercase")
    })
    .matches(/[0-9]/, {
      message: matchRegex("New Password", "numeric")
    })
    .required("New Password cannot be empty")
    .label("New Password")
});

export const handleSubmit = (
  handleClose: () => void,
  handleError: (error: string) => void
) => async (
  values: TValues,
  { setSubmitting, setFieldError }: FormikHelpers<TValues>
) => {
  try {
    const res = await changePassword(values);
    const data = await res.json();

    if (!res.ok) {
      return setFieldError(data.key, data.message);
    }

    setSubmitting(false);
    handleClose();
  } catch (error) {
    handleError(error.message);
  }
};
