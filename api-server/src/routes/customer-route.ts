import express from "express";
import {CustomerController} from "../controllers/customer-controller";
import {VerifyMiddleware} from "../middlewares/verify-token";
const CustomerSchema = require("../schemas/CustomerSchema")


const router = express.Router()
const customerController = new CustomerController();
const validationMiddleware = new VerifyMiddleware();

router.get("/:id", customerController.showCustomer)
router.get("/",customerController.listCustomer)
router.post("/", customerController.createCustomer)
router.delete("/:id", customerController.deleteCustomer)
router.put("/:id", customerController.updateCustomer)



export default router