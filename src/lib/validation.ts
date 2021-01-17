import Joi from "joi";

export const registerSchema = Joi.object().keys({
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().min(8).required().label("Password")
});

export const loginSchema = registerSchema.keys({
  remember: Joi.boolean()
});

export default registerSchema;
