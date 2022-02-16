import {DatabaseConnector} from "../database-connector/database-connector";

export {}

export class UserMongodb {

    constructor(
        readonly database: DatabaseConnector
    ) {
        database.client.connect()
    }

    async getUser(id:number)
    {

    }


}
