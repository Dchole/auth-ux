import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { loginSchema, registerSchema } from "@/lib/validation";

export interface IError {
  message: string;
  key: string;
}

async function validation(
  req: NextApiRequest,
  res: NextApiResponse<IError[]>,
  next: any
) {
  const schema = "remember" in req.body ? loginSchema : registerSchema;

  const validation = schema.options({ abortEarly: false }).validate(req.body);

  if (validation.error) {
    const errors = validation.error.details.map(({ message, context }) => ({
      message,
      key: context.key
    }));

    return res.status(400).json(errors);
  }

  return next();
}

const middleware = nextConnect();

middleware.use(validation);

export default middleware;
