import express from "express";
import {CategoryController} from "../controllers/category-controller";
import {VerifyMiddleware} from "../middlewares/verify-token";
const CategorySchema = require("../schemas/CategorySchema");


const router = express.Router()
const categoryController = new CategoryController()
const validationMiddleware = new VerifyMiddleware();




router.get("/:id", categoryController.showCategory)
router.get("/", categoryController.listCategory)
router.post("/", categoryController.createCategory)
router.delete("/:id", categoryController.deleteCategory)
router.put("/:id", categoryController.updateCategory)


export default router

