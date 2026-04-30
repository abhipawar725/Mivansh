import Joi from "joi";

export const registerValidate = Joi.object({
  name: Joi.string().trim().min(3).required().messages({
    'string.empty': 'name cannot be an empty field',
    'string.min': 'min 3 characters required',
    'any.required': 'Name is required'
  }),
  email: Joi.string().trim().lowercase().email().required().messages({
    'string.email' : 'invalid email address',
    'any.required': 'email is required',
    'string.empty': 'email is required'
  }),
  password: Joi.string()
    .trim()
    .min(8)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).messages({
      'string.empty': 'cannot be an empty field',
      'any.required': 'Password is required',
      'string.pattern.base': 'invalid password'
    })
});

export const loginValidate = Joi.object({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string()
    .trim()
    .min(8)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});
