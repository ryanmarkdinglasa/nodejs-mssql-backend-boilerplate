import Joi from 'joi';

// access rights
export const accessright_schema = Joi.object({
    Code: Joi.string().pattern(/^[0-9]{6}$/),
    Name: Joi.string().max(50).required(),
    Description: Joi.string().max(255).required(),
    IsDeleted: Joi.number().integer().required(),
    DeletedBy: Joi.number().integer().allow(null),
    CreatedBy: Joi.number().integer(),
    DateCreated: Joi.date(),
    UpdatedBy: Joi.number().integer().allow(null),
    DateUpdated: Joi.date().allow(null),
});
  