
const {pool} = require("../configs/connnect-db")

export class CustomerService {

    public create(data: object){
        const text = `INSERT INTO tb_customers(id,firstname,middlename,lastname,phonenumber) VALUES ($1,$2,3$,4$,$5)`
        return pool.query(text, data)
    }

    public delete(id: number){
        const text = `DELETE FROM tb_customers WHERE id=$1`
        return pool.query(text, id)
    }

    public update(id: number, data: object){
        const text = `
        UPDATE tb_customers SET firstname = $1, middlename = $2, lastname = $3, phonenumber = $4 WHERE id = $5
        `
        return pool.query(text, [data])
    }

    public show(id: number){
        const text = `SELECT * FROM tb_customers WHERE id = $1`
        return pool.query(text, [id])
    }

    public list(){
        const text = `SELECT * FROM tb_users`
        return pool.query(text)
    }
}