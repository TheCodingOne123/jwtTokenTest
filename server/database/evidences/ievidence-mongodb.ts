import {IdatabaseConnector} from "../database-connector/idatabase-connector";
import {Evidence} from "./evidence";

export {}

export interface IEvidenceMongodb{

     getEvidence(databaseName: string, id: string): Promise<Evidence | boolean>

     postEvidence(databaseName: string, evidence: Evidence): Promise<Evidence | boolean>

}
