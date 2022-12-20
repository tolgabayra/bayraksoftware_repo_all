import { Request, Response } from "express";
import {CategoryService} from "../services/category-service";
import {StatusCodes} from "http-status-codes";


export class CategoryController {

    private categoryService = new CategoryService();

    public createCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.categoryService.create(req.body)
            res.status(StatusCodes.CREATED).json("Category created.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }

    }

    public deleteCategory = async (req: Request, res: Response): Promise<void> => {
        try{
            await this.categoryService.delete(req.params.id)
            res.status(StatusCodes.OK).json("Category has been deleted.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public updateCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.categoryService.update(req.params.id, req.body)
            res.status(StatusCodes.OK).json("Category has been updated.")
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public showCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            const category = this.categoryService.show(req.params.id)
            res.status(StatusCodes.OK).json(category)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public listCategory = async (req: Request, res: Response): Promise<void> => {
        try{
            const categoryList = await this.categoryService.list()
            res.status(StatusCodes.OK).json(categoryList)
        }catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }
}