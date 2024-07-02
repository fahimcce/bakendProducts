import Joi from 'joi';

export const createOrderSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required'
    }),
    productId: Joi.string().required(),
    price: Joi.number().required().messages({
        'number.base': 'Price must be a number',
    }),
    quantity: Joi.number().required(),
});
