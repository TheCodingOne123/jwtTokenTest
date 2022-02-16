import {IdatabaseConnector} from "../database-connector/idatabase-connector";
import {IEvidenceMongodb} from "./ievidence-mongodb";
import {Article, Evidence, EvidenceType, Interview} from "./evidence";

export {}



export class EvidenceMongodb implements IEvidenceMongodb{


    constructor(
        private readonly database : IdatabaseConnector
    ) {
        this.database.connect()
    }

    async getEvidence(databaseName:string, id: string): Promise<Evidence | boolean> {
        let value = await this.database.client().db(databaseName).collection("evidence").findOne(`evi_${id}`)
        if(value)
        {
            return new Promise((resolve) => {
                resolve(value)
            })
        }
        return new Promise((reject) => {
            reject(false)
        })

    }

    async postEvidence(databaseName: string, evidence: Evidence ): Promise<Evidence | boolean> {

        if(evidence.type === EvidenceType.article)
        {
          return this.postArticle(databaseName, evidence as Article);
        }
        else if(evidence.type === EvidenceType.interview)
        {
          return this.postInterview(databaseName, evidence as Interview)
        }

    }

    private async postArticle(databaseName: string, article: Article): Promise<boolean> {

        let collection = await this.database.client().db(databaseName).collection
        return new Promise((resolve) => {
            resolve()
        })

    }

    private async postInterview(databaseName: string, interview: Interview) : Promise<boolean>
    {
        return new Promise((resolve) => {
            resolve()
        })

    }





}
