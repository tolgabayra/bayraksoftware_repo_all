import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import helmet from 'helmet';
const { connectDB } = require("./configs/connnect-db")
import AuthRoute from "./routes/auth-route";

dotenv.config()
connectDB().then(()=>console.log("DB Connection is Successfully"))

const app: Express = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(helmet())


//Routes
app.use("/api/v1/auth", AuthRoute)

app.listen(5000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${5000}`);
  });