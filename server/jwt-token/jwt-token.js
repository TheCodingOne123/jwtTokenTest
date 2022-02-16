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
exports.JwtToken = void 0;
const database_connector_1 = require("../database/database-connector/database-connector");
require('dotenv').config({ path: `${__dirname}/.env` });
class JwtToken {
    constructor() {
        this.jwt = require('jsonwebtoken');
    }
    createToken(req) {
        const token = req.body.token;
        console.log(token);
        if (!token) {
            return false;
        }
        const teamName = this.checkTokenWithUsers(token, new database_connector_1.DatabaseConnector());
        if (!teamName) {
            return false;
        }
        const jwtData = { token: token, teamName: teamName };
        const accessToken = this.jwt.sign(jwtData, process.env.ACCESS_TOKEN_SECRET);
        const cutToken = this.splitJWToken(accessToken);
        return { accessToken: cutToken };
    }
    splitJWToken(token) {
        return token.split('.')[2];
    }
    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null)
            return res.sendStatus(401);
        this.jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.sendStatus(403);
            req.user = user;
            next();
        });
    }
    checkTokenWithUsers(token, database) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database.connect();
            let databaseNameList = yield database.client.db().admin().listDatabases({ nameOnly: true });
            databaseNameList = databaseNameList["databases"];
            for (const databaseName of databaseNameList) {
                let collection = yield database.client.db(databaseName["name"]).collection("Team");
                let teamName = yield collection.findOne({ "users.token": token });
                if (teamName) {
                    return new Promise((resolve => {
                        resolve(databaseName);
                    }));
                }
            }
            return new Promise((reject) => {
                reject(false);
            });
        });
    }
}
exports.JwtToken = JwtToken;
module.exports = {
    JwtToken,
};
//# sourceMappingURL=jwt-token.js.map