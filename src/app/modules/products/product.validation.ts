import Joi from 'joi';

export const createProductSchema = Joi.object({
    product: Joi.object({
        name: Joi.string().max(20).required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).optional(),
        variants: Joi.array().items(Joi.object({
            type: Joi.string().required(),
            value: Joi.string().required(),
        })),
        inventory: Joi.object({
            quantity: Joi.number().required(),
            inStock: Joi.boolean().required(),
        }).required(),
    }).required()
});

export const updateProductSchema = Joi.object({
    product: Joi.object({
        name: Joi.string().optional(),
        description: Joi.string().optional(),
        price: Joi.number().optional(),
        category: Joi.string().optional(),
        tags: Joi.array().items(Joi.string()).optional(),
        variants: Joi.array().items(Joi.object({
            type: Joi.string().optional(),
            value: Joi.string().optional(),
        })).optional(),
        inventory: Joi.object({
            quantity: Joi.number().optional(),
            inStock: Joi.boolean().optional(),
        }).optional(),
    }).optional()
});
