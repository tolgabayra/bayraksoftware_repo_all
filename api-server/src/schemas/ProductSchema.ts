import Joi from "joi";


const ProductSchema = Joi.object({
    name: "",
    description: "",
    price: "",
    color : ""
})


module.exports = ProductSchema