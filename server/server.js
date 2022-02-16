"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_token_1 = require("./jwt-token/jwt-token");
require('dotenv').config({ path: `${__dirname}\.env` });
const express = require('express');
const app = express();
const jwtToken = require('./jwt-token/jwt-token');
const data = require('./data');
app.use(express.json());
app.get('/Login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let jwtTokenObject = new jwt_token_1.JwtToken();
    let jwtToken = yield jwtTokenObject.createToken(req);
    console.log(jwtToken);
    if (!jwtToken) {
        res.sendStatus(401);
    }
    if (jwtToken) {
        res.json({ jwtToken: jwtToken });
    }
}));
app.get('/Evidence/:id', (req, res) => {
    let id = req.params;
    res.sendStatus(404);
});
app.post('/Evidence', (req, res) => {
    let body = req.params;
});
app.get('/Hypothesis/:id', (req, res) => {
    let id = req.params.id;
});
app.get('/', (req, res) => {
    /* return angular app*/
});
app.listen(3000);
/*app.get('/posts', jwtToken.authenticateToken , (req :any, res: any)=> {


    res.json(data.posts.filter((post: { username: any }) => post.username === req.user.name))
})

app.get('/test',(req:any, res:any)=> {
    res.send(`${process.env["ACCESS_TOKEN_SECRET"]}`)
})

app.post('/login', (req: any, res : any) => {

    let accessToken = jwtToken.createToken(req)
    console.log(accessToken)
    res.json(accessToken)
})*/
//# sourceMappingURL=server.js.map