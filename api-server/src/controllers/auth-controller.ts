import { Request, Response } from "express";
import {Helper} from "../utils/helper";
import {StatusCodes} from "http-status-codes";
const {pool} = require("../configs/connnect-db")
export class AuthController {

    private helper = new Helper();

    public login = async (req: Request, res: Response): Promise<void> => {
        const email = req.body.email;
        const password = this.helper.HashPassword(req.body.password)

        const text = `SELECT * FROM tb_users WHERE email = $1 and password = $2`

        try {
            const userData = await pool.query(text, [email, password])
            if (userData ! == null){
                const payload = {
                    id: userData.id,
                    email: userData.email
                }
                const accessToken = this.helper.GenerateAccessToken( {payload})
                const refreshToken = this.helper.GenerateRefreshToken({payload})

                res.cookie("access_token", accessToken, {
                    httpOnly: true
                })
                res.cookie("refresh_token", refreshToken,{
                    httpOnly: true
                })
                res.status(StatusCodes.OK).json("Login successfully")
            }else{
                res.status(StatusCodes.UNAUTHORIZED).json({ "message": "Email or password is incorrect"})
            }
        }catch (e) {
            res.status(404).json("User is not found !")
        }
    }


    public register = async (req: Request, res: Response): Promise<void> => {
        const password = this.helper.HashPassword(req.body.password)
        const userData = {
            id: req.body.id,
            username: req.body.username,
            email: req.body.email,
            password: password
        }
        const text = `INSERT INTO tb_users(id,username, email, password) VALUES ($1,$2,$3,$4)`
        try {
            await pool.query("BEGIN")
            const newUser = await pool.query(text, [userData.id,userData.username,userData.email,userData.password])
            await pool.query("COMMIT")
            res.status(StatusCodes.CREATED).json(newUser)
        }catch (e) {
            await pool.query("ROLLBACK")
            console.log(e)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }


    public Logout = (req: Request, res: Response) => {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(StatusCodes.OK).json({"message": "Log out is successfully "})
    }



}