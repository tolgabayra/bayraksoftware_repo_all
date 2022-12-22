import express from "express";

import {AuthController} from "../controllers/auth-controller";
import {VerifyMiddleware} from "../middlewares/verify-token";
const  UserSchema = require("../schemas/UserSchema");


const router = express.Router()
const authController = new AuthController();
const validationMiddleware = new VerifyMiddleware();

router.post("/login", authController.login)
router.post("/register", validationMiddleware.verifyValidate(UserSchema),authController.register)
router.post("/logout", authController.Logout)


export default router