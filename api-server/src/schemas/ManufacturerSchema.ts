import Joi from "joi";


const ManufacturerSchema = Joi.object({

    name: "",
    phone_number: "",
    address: "",
    mail: ""
})


module.exports = ManufacturerSchema