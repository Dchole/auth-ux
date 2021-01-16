import { FormikHelpers } from "formik";
import { TValues } from "./auth-options";

export const handleSubmit = (
  values: TValues,
  actions: FormikHelpers<TValues>
) => {
  console.log(values, actions);
};
