import db from "./db";
import bcrypt from "bcryptjs";

class User {
    constructor(name, surname, login, pass) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.pass =pass;
    }

    async save(cb){

        let result = await this.genSalt(this.pass)
            .then((result)=> {
                return this.genHash(result.salt, result.password);
            });

        this.hash = result.hash;

        let sql = "INSERT INTO users(name, surname, login, hash) VALUE ?";
        let values = [[this.name, this.surname, this.login, this.hash]];
        db.query(sql, [values], cb);
    };

    genSalt(password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        salt: salt,
                        password: password
                    });
                }
            });
        });
    }

    genHash(salt, password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        salt: salt,
                        password: password,
                        hash: hash
                    });
                }
            });
        });
    }

    hashPass(pass, cb){
        bcrypt.genSalt(8,(err, salt) => {
            if (err) throw err;
            bcrypt.hash(pass, salt, (result)=>{
                cb(result);
            });
        });
    }

    varification(login, password, cb) {
        bcrypt.compare(pass, hash, (err, result) => {
            cb(result);
        });
    }
}

export default User;