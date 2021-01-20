import Joi from "joi";

export const accountSchema = Joi.object({
  photo: Joi.string().label("Photo"),
  name: Joi.string().min(3).label("Name"),
  bio: Joi.string().min(80).label("Bio"),
  phone: Joi.string().min(10).label("Phone Number"),
  email: Joi.string().email().required().label("Email")
});

export const passwordSchema = Joi.object({
  current: Joi.string()
    .min(8)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .pattern(/[0-9]/)
    .required()
    .label("Current Password"),
  new: Joi.string()
    .min(8)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .pattern(/[0-9]/)
    .required()
    .label("New Password")
});
