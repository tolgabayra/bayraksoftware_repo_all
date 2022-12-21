import {Request, Response} from "express";

const { pool } = require("../configs/connnect-db")


export class ResetPasswordController {


    public createResetLink = async (req: Request, res: Response): Promise<void> => {

    }


    public verifyResetLink = async (req: Request, res: Response): Promise<void> => {


    }

    public setNewPassword = async (req: Request, res: Response): Promise<void> => {


    }

}