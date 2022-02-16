import {Team} from "./team";

export {}

export interface ITeamMongoDb{

    postTeam(team: Team): Promise<boolean>

    getTeam(): Promise<boolean>

    putTeam(): Promise<boolean>


}
