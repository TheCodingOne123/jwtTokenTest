import {User} from "../user/user";
import {IdCount} from "../id-mongodb/id-mongodb";

export {}



export class Team {

    constructor(
        readonly _id: number,
        readonly teamName: string,
        readonly users: User[],
        readonly idCount: IdCount
    ) {
    }
}

module.exports = {
    Team,
}
