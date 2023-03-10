import express from "express";

import bodyParser from "body-parser";

import route from "./src/route/index.route"

import { ConnectDatabase } from "./src/config/connectDatabase";

import flash from 'connect-flash';

import cookieParser from 'cookie-parser';

import session from 'express-session';

import passport from "passport";

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.set('views', './views');

app.use(express.static('public'));

app.use(session({
    secret: 'mk',
    resave: false,
    saveUninitialized: false,

}));

app.use(passport.initialize());

app.use(passport.authenticate('session'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(flash());

ConnectDatabase.connect();

route(app);

app.listen(PORT, () => {

    console.log("App running on port: " + PORT)

})