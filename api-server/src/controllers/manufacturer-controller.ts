import { Request, Response } from "express";
import {StatusCodes} from "http-status-codes";
import {ManufacturerService} from "../services/manufacturer-service";


export class ManufacturerController {

    private manufacturerService = new ManufacturerService()

    public createManufacturer = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.manufacturerService.create(req.body)
            res.status(StatusCodes.OK).json("Manufacturer created.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public deleteManufacturer = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.manufacturerService.delete(req.params.id)
            res.status(StatusCodes.OK).json("Manufacturer has been deleted.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public updateManufacturer = async (req: Request, res: Response): Promise<void> => {
        try {

        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public showManufacturer = async (req: Request, res: Response): Promise<void> => {
        try {
            const manufacturer = await this.manufacturerService.show(req.params.id)
            res.status(StatusCodes.OK).json(manufacturer)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public listManufacturer = async (req: Request, res: Response): Promise<void> => {
        try{
            const manufacturerList = await this.manufacturerService.list()
            res.status(StatusCodes.OK).json(manufacturerList)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }
}