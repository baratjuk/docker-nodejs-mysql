import mysql from 'mysql';

class Db {

    dbConnect

    constructor() {
        super.constructor()
        this.dbConnect = mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        })
        this.dbConnect.connect((err) => {
            if (err) {
                throw err
            }
            console.log("DB Connected!");
        })
    }

    async select(sql) {
        let tableData = await new Promise(r => this.dbConnect.query(sql, (err, result) => {
            if (err) {
                console.log('select sql : ' + sql)
                console.log('select error : ' + err.message)
                r([])
            } else {
                r(result)
            }
        }))
        return tableData
    }

    insert(sql) {
        this.dbConnect.query(sql, (err, result) => {
            if (err) {
                console.log('insert sql : ' + sql)
                console.log('insert error : ' + err.message)
            }
        })
    }

    upsert(updateSql, insertSql) {
        this.dbConnect.query(updateSql, (err1, result) => {
            if (err1) {
                this.dbConnect.query(insertSql, (err2, result) => { 
                })
            }
        })
    }

    async getItems() {
        let ret = await this.select(`SELECT * FROM table1;`)
        return ret
    }

}
export default Db;