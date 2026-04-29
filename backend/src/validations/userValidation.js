import Joi from "joi";

export const registerValidate = Joi.object({
  name: Joi.string().trim().min(3).required(),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string()
    .trim()
    .min(8)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});

export const loginValidate = Joi.object({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string()
    .trim()
    .min(8)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});
