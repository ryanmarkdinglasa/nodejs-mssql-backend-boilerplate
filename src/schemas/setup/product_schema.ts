  /**
   * AUTHOR       : Mark Dinglasa
   * COMMENT/S    : N/A
   * CHANGES      : N/A
   * LOG-DATE     : 2024-05-27 11:48PM
  */

  import Joi from 'joi'
  
  export const product_schema = Joi.object({
    Code: Joi.string().pattern(/^[0-9]{6}$/),
    Name: Joi.string().required(),
    Description: Joi.string().required(),
    Category: Joi.string().required(),
    Price: Joi.number().precision(5).required(),
    IsDeleted: Joi.number().integer(),
    DeletedBy: Joi.number().integer().allow(null)
  });
