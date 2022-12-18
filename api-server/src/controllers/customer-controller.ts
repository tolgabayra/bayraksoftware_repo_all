import { Request, Response } from "express";

import {CustomerService} from "../services/customer-service";


export class CustomerController {

    private customerService = new CustomerService();

    public createCustomer(req: Request, res: Response){

    }

    public deleteCustomer(req: Request, res: Response){

    }

    public updateCustomer(req: Request, res: Response){

    }

    public showCustomer(req: Request, res: Response){

    }

    public listCustomer(req: Request, res: Response){

    }
    
}