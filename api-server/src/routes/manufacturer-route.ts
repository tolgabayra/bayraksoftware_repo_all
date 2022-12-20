import express from "express";
import {ManufacturerController} from "../controllers/manufacturer-controller";



const router = express.Router()
const manufacturerController = new ManufacturerController()


router.get("/:id", manufacturerController.showManufacturer)
router.get("/", manufacturerController.listManufacturer)
router.post("/", manufacturerController.createManufacturer)
router.delete("/:id", manufacturerController.deleteManufacturer)
router.put("/:id", manufacturerController.updateManufacturer)


export default router