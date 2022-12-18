
const {pool} = require("../configs/connnect-db")

export class CustomerService {

    public create(data: object){
        const text = `INSERT INTO tb_customers(id,firstname,middlename,lastname,phonenumber) VALUES ($1,$2,3$,4$,$5)`
        return pool.query(text, data)
    }
}