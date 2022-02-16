import {DatabaseConnector} from "../database-connector/database-connector";
import {IIdMongodb} from "./iid-mongodb";

export {}

export interface IdCount{
    readonly commit: number,
    readonly evidence: number,
    readonly hypothesis: number,
    readonly user: number,
    readonly rating: number,
}

export class IdMongodb implements IIdMongodb{

    constructor(
        private readonly database: DatabaseConnector
    ) {
    }

    getNextCommitId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextEvidenceId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextHypothesisId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    getNextRatingId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

    async getNextTeamId(): Promise<any> {

        let databaseNames = await this.database.connection.client.admin().listDatabases()


        return Promise.resolve(databaseNames);
    }

    getNextUserId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }


}

module.exports= {
    IdMongodb
}
