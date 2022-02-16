import {Rating} from "../ratings/rating";

export {}

export const enum EvidenceType{
    article = "article",
    interview = "interview"
}

export class Evidence{



    private constructor(readonly type: EvidenceType) {
    }

}

export class Article implements Evidence{

    constructor(
        readonly _id:number,
        readonly type: EvidenceType,
        readonly author: string,
        readonly date: Date,
        readonly keyInsights: string,
        readonly url: string,
        readonly ratings: Rating[]


    ) {
    }
}

export class Interview implements Evidence{

    constructor(
        readonly _id:number,
        readonly type: EvidenceType,
        readonly interviewConductor: string,
        readonly participantName: string,
        readonly audioFileId: string,
        readonly keyInsights: string,
        readonly date: Date,
        readonly transcriptExternal: string,
        readonly ratings: Rating[]
    ) {
    }
}

module.exports = {
    Evidence,
    Article,
    Interview,

}
