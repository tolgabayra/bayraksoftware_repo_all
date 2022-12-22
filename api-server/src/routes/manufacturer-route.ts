import express from "express";
import {ManufacturerController} from "../controllers/manufacturer-controller";
import { VerifyMiddleware } from "../middlewares/verify-token";
const ManufacturerSchema = require("../schemas/ManufacturerSchema")


const router = express.Router()
const manufacturerController = new ManufacturerController()
const validationMiddleware = new VerifyMiddleware();


router.get("/:id", manufacturerController.showManufacturer)
router.get("/", manufacturerController.listManufacturer)
router.post("/", manufacturerController.createManufacturer)
router.delete("/:id", manufacturerController.deleteManufacturer)
router.put("/:id", manufacturerController.updateManufacturer)


export default router