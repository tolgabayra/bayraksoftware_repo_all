
const {pool} = require("../configs/connnect-db")

export class CustomerService {
    public create(data: any){
        const text = `INSERT INTO tb_customers(firstname,middlename,lastname,phonenumber) VALUES ($1,$2,$3,$4)`
        return pool.query(text, [data.firstname, data.middlename, data.lastname, data.phonenumber])
    }

    public delete(id: any){
        const text = `DELETE FROM tb_customers WHERE id=$1`
        return pool.query(text, [id])
    }

    public update(id: any, data: object){
        const text = `
        UPDATE tb_customers SET firstname = $1, middlename = $2, lastname = $3, phonenumber = $4 WHERE id = $5
        `
        return pool.query(text, [data])
    }

    public show(id: any){
        const text = `SELECT * FROM tb_customers WHERE id = $1`
        return pool.query(text, [id])
    }

    public list(){
        const text = `SELECT * FROM tb_users`
        return pool.query(text)
    }
}