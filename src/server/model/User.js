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

    varification(pass, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(pass, hash, (err, result) => {
                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });

    }

    static selectUserWithLogin(login) {
        let sql = 'select * from users where login = ?';

        return new Promise((resolve, reject)=> {
            db.query(sql, [login], (err, result)=>{
                if(err) {
                    reject(err);
                }

                let user = (result.length != 0)? User.createUser(result) : null;

                resolve(user);
            });
        })

    }

    static createUser(result) {
        let user = new User();

        console.log("creating user");
        for(let key in result[0]) {
            user[key] = result[0][key];
        }

        return user;
    }
}

export default User;