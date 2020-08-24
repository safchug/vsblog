import mysql from 'mysql';

export let dbConfig = {
    host: "localhost",
        user: "root",
        password: "S1w0rR@&6",
        database: "myblog"
}

let db = mysql.createConnection(dbConfig);

db.connect((err)=>{
    if(err) {
        throw err;
    }
});

export default db;