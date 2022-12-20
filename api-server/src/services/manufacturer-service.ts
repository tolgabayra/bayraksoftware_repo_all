

const { pool } = require("../configs/connnect-db")

export class ManufacturerService {


    public create(data: any){
        const text = `INSERT INTO tb_manufacturers(name,phone_number,address, mail,created_at) VALUES ($1,$2,$3,$4,now())`
        return pool.query(text, [data.name, data.phone_number, data.adress, data.mail])
    }

    public delete(id: string){
        const text = `DELETE FROM tb_manufacturers WHERE id = $1`
        return pool.query(text, [id])
    }

    public update(id: number, data: any){
        const text = `UPDATE tb_manufacturers SET name = $1,phone_number = $2, address = $3, mail = $4 WHERE id = $5`
        return pool.query(text, [data, id])
    }
    public show(id: string){
        const text = `SELECT * FROM tb_manufacturers WHERE id = $1`
        return pool.query(text, [id])
    }

    public list(){
        const text = `SELECT * FROM tb_manufacturers`
        return pool.query(text)
    }
}