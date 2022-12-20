

const { pool } = require("../configs/connnect-db")

export class CategoryService {


    public create(data: any){
        const text = ` INSERT INTO tb_categories(name, created_at) VALUES($1, now())`
        return pool.query(text, [data.name])
    }

    public delete(id: string){
        const text = `DELETE FROM tb_categories WHERE id = $1`
        return pool.query(text,[id])
    }

    public update(id: string, data: object){
        const text = `UPDATE tb_categories SET name = $1 WHERE id = $2`
        return pool.query(text, [data])
    }
    public show(id: string){
        const text = `SELECT * FROM tb_categories WHERE id = $1`
        return pool.query(text, [id])
    }

    public list(){
        const text = `SELECT * FROM tb_categories`
        return pool.query(text)
    }
}