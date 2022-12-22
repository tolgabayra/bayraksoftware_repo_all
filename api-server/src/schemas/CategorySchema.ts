import Joi from "joi";


const CategorySchema = Joi.object({
    name: Joi.string().min(3).max(20)
})


module.exports = CategorySchema