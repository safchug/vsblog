import {Router} from "express";
import User from './model/User';
import Post from "./model/Post";

let router = new Router();

router.post('/regist', (req, res)=> {
    let entryData = req.body;

    let newUser = new User(entryData.name, entryData.surname, entryData.login, entryData.password);

    newUser.save((err, result)=> {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});

router.post('/login', (req, res)=>{
    let {login, password} = req.body;
    User.login();
});

router.get('/user', (req, res)=> {
    let user = req.session.user || null;
    res.json(user);
});

router.get('/initblog', async (req, res)=> {
    let user = req.session.user || null;

    let data = await Post.getAllPosts();

    let result = {user, data};

    res.json(result);
});

router.post('/add', (req, res)=> {
    let enteredData = req.body;
    let post = new Post(enteredData.title, enteredData.text, 1);
    post.save((err, result)=> {
        if(err) {
            console.log(err.message);
            console.log(err.stack);
        }
        console.log(result);
        res.json({data: "ok"});
    });

});

router.delete('/remove/:id', (req, res) => {
   res.json({data: "post has been deleted"});
});

router.post('/edit/:id', (req, res) => {
   res.json({data: "message has been edited!"});
});

export default router;