import {IdatabaseConnector} from "../database-connector/idatabase-connector";
import {ITeamMongoDb} from "./iteam-mongodb";
import {Team} from "./team";

export {}

export class TeamMongodb implements ITeamMongoDb{

    constructor(readonly database: IdatabaseConnector,
                ) {

    }

    async getTeam(): Promise<boolean> {
        return Promise.resolve(false);
    }

    async postTeam(team: Team): Promise<boolean> {


        try{

        await this.database.connect()

        let teamCollection = await this.database.client.db(team.id).collection
        let teamJsonString = JSON.stringify(team)
        let teamJson= JSON.parse(teamJsonString)

        await teamCollection.insertOne(team)
            return Promise.resolve(true)
        }
        catch (e)
        {
            console.log(e)
            return Promise.reject(false)
        }





    }

    async putTeam(): Promise<boolean> {
        return Promise.resolve(false);
    }










}
