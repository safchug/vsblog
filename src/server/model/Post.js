import db from "./db";

class Post {
    constructor(title, text, userId) {
        this.title = title;
        this.text = text;
        this.userId = userId;
        this.creationDate = new Date();
    }

    save(cb){
        let sql = "INSERT INTO myblog.posts(title, text, creation_date, user_id) VALUES ?";
        let values = [[this.title, this.text, this.creationDate, this.userId]];
        db.query(sql, [values],(err, result)=> cb(err, result));
    }

    static getAllPosts(cb){
        let sql = 'SELECT * FROM posts';
        db.query(sql, cb);
    }
}

export default Post;