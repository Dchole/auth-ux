/* Options for both login and Register */
import matchRegex from "@/utils/match-message";
import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  remember: false
};

export type TValues = typeof initialValues;

export const validateEmail = async (
  form: "Login" | "Register",
  userExists: boolean,
  mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any>
) => {
  await mutate();

  let error: Partial<TValues> = {};

  if (userExists) {
    if (form === "Register") error.email = "Email already taken";
  } else {
    if (form === "Login") error.email = "Email does not exist";
  }

  return error;
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .min(8)
    .matches(/[a-z]/, {
      message: matchRegex("Password", "lowercase")
    })
    .matches(/[A-Z]/, {
      message: matchRegex("Password", "uppercase")
    })
    .matches(/[0-9]/, {
      message: matchRegex("Password", "numeric")
    })
    .required()
    .label("Password"),
  remember: Yup.boolean()
});
