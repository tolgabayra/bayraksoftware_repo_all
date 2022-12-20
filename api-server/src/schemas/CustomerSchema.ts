import Joi from "joi";


const CustomerSchema = Joi.object({
    firstname: Joi.string().min(3).max(30).required(),
    middlename: Joi.string(),
    lastname: Joi.string(),
    phonenumber: Joi.required()
})


module.exports = CustomerSchema