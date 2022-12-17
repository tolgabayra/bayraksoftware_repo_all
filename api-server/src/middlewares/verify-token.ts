import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken"
import {Schema} from "joi";


export class VerifyMiddleware {


    public VerifyToken(req: Request, res: Response, next: NextFunction) {
        try {
            const AuthHeader = req.cookies.access_token
            if (AuthHeader) {
                Jwt.verify(AuthHeader, process.env.JWT_SECRET_KEY ?? "SECRET", (error: any, user: any) => {
                    if (error) {
                        return res.status(403).json({ "message": "Token is not valid!" })
                    }
                    req.user = user;
                    next();
                })
            } else {
                res.status(401).json({ "message": "You are not authenticated!" })
            }
        } catch (error) {
            console.log(error);

            res.status(500).json(error)
        }

    }



    public verifyValidate = (schema: Schema) => (req:Request, res:Response, next:NextFunction) => {
        const {value, error} = schema.validate(req.body)

        if(error){
            const errorMessage = error.details?.map(detail => detail.message).join(", ")
            res.status(400).json({error: errorMessage})
            return
        }
        else {
            next()
        }
    }





}

