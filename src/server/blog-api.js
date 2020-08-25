import {Router} from "express";
import User from './model/User';
import Post from "./model/Post";

let router = new Router();

router.post('/regist', (req, res)=> {
    let entryData = req.body;

    let newUser = new User(entryData.name, entryData.surname, entryData.login, entryData.password);

    newUser.save((err, result)=> {
        if (err) {
            res.json({status: 'err'});
        }
        res.json({status: "ok"});
    });
});

router.post('/login', async (req, res)=> {
    let {login, password} = req.body;

    let user = await User.selectUserWithLogin(login);

    if(user) {
        user.varification(password, user.hash).then((match)=> {
            if(match) {
                req.session.user = user;
                res.json({status: "ok"});
            } else {
                res.json({status: "wrong password"});
            }
        });
    } else {
        res.json({status: "bad login"});
    }
});

router.get('/logout', (req, res)=> {
    req.session.destroy((err)=>{
        if(err) {
            res.json({status: err.message});
        }
        res.json({status: "ok"});
    });
});

router.get('/user', (req, res)=> {
    let user = req.session.user || null;
    res.json(user);
});

router.get('/initblog', (req, res)=> {
    let user = req.session.user || null;

    Post.getAllPosts((err, result)=>{

        let response = {user, data:result};

        res.json(response);
    });

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