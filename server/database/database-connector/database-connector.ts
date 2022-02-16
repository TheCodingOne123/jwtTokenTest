import {IdatabaseConnector} from "./idatabase-connector";

export {}

const {MongoClient} = require('mongodb')


export class DatabaseConnector implements IdatabaseConnector{

    readonly uri = "mongodb://localhost:27017"
    readonly connection = new MongoClient(this.uri)


    constructor() {
    }

     async closeConnection(){
       await this.connection.close()
    }

    async connect()
    {
        try{
            await this.connection.connect()
        }
        catch (e){
            console.log("No connection to Database")
            console.log(e)
        }


    }

}
