import {IIdMongodb} from "./iid-mongodb";

export {}

export class IdTestMongodb implements IIdMongodb{


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

    getNextTeamId(): Promise<number> {
        return Promise.resolve(0);
    }

    getNextUserId(databaseName: string): Promise<number> {
        return Promise.resolve(0);
    }

}
