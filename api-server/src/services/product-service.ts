

const { pool } = require("../configs/connnect-db")

export class ProductService {


    public create(data: any, manufacturer_id: string, category_id: string){
        const text = `INSERT INTO tb_products(name, description,price,color,manufacturer_id,category_id,created_at,updated_at) VALUES(1$,2$,3$,4$,5$,$6,now(),now())`
        return pool.query(text, [data.name,data.description, data.price,data.color,manufacturer_id, category_id])
    }

    public delete(id: string){
        const text = `DELETE FROM tb_products WHERE id = $1`
        return pool.query(text, [id])
    }

    public update(id: string, data: any){
        const text = `UPDATE tb_products SET 
                      name = $1,
                      description = $2, 
                      price = $3, 
                      color = $4,
                      manufacturer_id = $5,
                      category_id = $6, 
                      WHERE id = $7`
        return pool.query(text, [data, id])

    }
    public show(id:string){
        const text = `SELECT * FROM WHERE id = $1`
        return pool.query(text, [id])
    }

    public list(){
        const text = `SELECT * FROM tb_products`
    }
}