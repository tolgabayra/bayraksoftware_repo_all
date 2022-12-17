import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import helmet from 'helmet';
const {connectDB} = require("./configs/connnect-db") 


dotenv.config()
connectDB()

const app: Express = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(helmet())

app.listen(5000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${5000}`);
  });