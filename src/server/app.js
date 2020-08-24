import express from "express";
import bodyParser from "body-parser";
import session from 'express-session';
import expessMySqlSession from 'express-mysql-session';
import {dbConfig} from './model/db';

import api from "./blog-api";
import template from "./template";

let app = express();
let MySqlStore = expessMySqlSession(session);

app.use(bodyParser.json());
app.use(session({
    key: 'vblog',
    secret: 'vblog_sess_secret',
    store: new MySqlStore(dbConfig),
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=> {
    res.end(template('VS Blog', 'Loading...'));
});

app.use("/api", api);

export default app;
