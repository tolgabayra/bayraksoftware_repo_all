import express from "express";
import { ProductController } from "../controllers/product-controller";
import { VerifyMiddleware } from "../middlewares/verify-token";
const ProductSchema = require("../schemas/ProductSchema")


const router = express.Router()
const productController = new ProductController()
const validationMiddleware = new VerifyMiddleware();



router.get("/:id", productController.showProduct)
router.post("/", productController.createProduct)
router.delete("/:id", productController.deleteProduct)
router.put("/:id", productController.updateProduct)



export default router