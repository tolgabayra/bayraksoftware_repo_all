import { Request, Response } from "express";
import { ProductService } from "../services/product-service";


export class ProductController {

    private productService = new ProductService()

    

    public createProduct = async (req: Request, res: Response): Promise<void> => {

    }

    public deleteProduct = async (req: Request, res: Response): Promise<void> => {

    }

    public updateProduct = async (req: Request, res: Response): Promise<void> => {

    }

    public showProduct = async (req: Request, res: Response): Promise<void> => {

    }
}