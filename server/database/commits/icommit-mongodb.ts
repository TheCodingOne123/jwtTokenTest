import {Commit} from "./commit";

export {}

export interface IcommitMongodb{

    getCommit() : Promise<Commit>

    postCommit() : Promise<boolean>

    putCommit() : Promise<boolean>



}
