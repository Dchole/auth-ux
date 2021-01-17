/* Options for both login and Register */
import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: ""
};

export type TValues = typeof initialValues;

export const validateEmail = async (
  form: "Login" | "Register",
  userExists: boolean,
  mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any>
) => {
  await mutate();

  let error: string;

  if (userExists) {
    if (form === "Register") error = "Email already taken";
  } else {
    if (form === "Login") error = "Email does not exist";
  }

  return error;
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password")
});
