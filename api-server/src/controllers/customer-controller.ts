import { Request, Response } from "express";

import {CustomerService} from "../services/customer-service";
import {StatusCodes} from "http-status-codes";


export class CustomerController {

    private customerService = new CustomerService();

    public createCustomer = async (req: Request, res: Response): Promise<void> => {
        try {
            const user_id = req.body.user_id
            const newUser = await this.customerService.create(req.body, user_id)
            console.log(newUser)
            if (newUser){
                res.status(StatusCodes.CREATED).json("User created.")
            }else {
                res.status(StatusCodes.BAD_REQUEST).json("User not created.")
            }
        }catch (e) {
            console.log(e)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public deleteCustomer = async (req: Request, res: Response): Promise<void> => {
        try{
            await this.customerService.delete(req.params.id)
            res.status(StatusCodes.OK).json("User has been deleted.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public updateCustomer = async (req: Request, res: Response): Promise<void> => {
        const data = req.body
        try {
            await this.customerService.update(req.params.id, data)
            res.status(StatusCodes.OK).json("User has been updated.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public showCustomer = async (req: Request, res: Response): Promise<void> => {
        try{
            const user = await this.customerService.show(req.params.id)
            res.status(StatusCodes.OK).json(user)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)

        }

    }

    public listCustomer = async (req: Request, res: Response): Promise<void> => {
        try{
            const userList = await this.customerService.list()
            res.status(StatusCodes.OK).json(userList)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)

        }
    }
    
}