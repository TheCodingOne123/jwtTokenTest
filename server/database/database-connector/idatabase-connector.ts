export {}


const {MongoClient} = require('mongodb')





export interface IdatabaseConnector{

    readonly uri: string,
    readonly connection:  typeof MongoClient

    connect() :void

    closeConnection() : void
}
