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
const { MongoClient } = require('mongodb');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = "mongodb://localhost:27017";
        const client = new MongoClient(uri);
        try {
            yield client.connect();
            yield listDatabases(client);
        }
        catch (e) {
            console.error(e);
        }
        let collection = yield client.db('team_1').collection("Team");
        let team = yield collection.findOne({ _id: 'team_1' });
        console.log(team);
        yield client.close();
    });
}
function listDatabases(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let databasesList = yield client.db().admin().listDatabases();
        console.log("Databases");
        databasesList.databases.forEach((db) => console.log(`-${db.name}`));
    });
}
main().catch(console.error);
//# sourceMappingURL=database.js.map