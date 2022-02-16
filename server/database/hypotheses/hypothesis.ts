import exp from "constants";

export {};

import {Rating} from '../ratings/rating'

export enum HypoStatus{
    experimental = "experimental",
    validated = "validated",
    rejected = "rejected",
}

export enum HypoCategory{
    valuePropositions = "Value Propositions",
    keyActivities = "Key Activities",
    keyResources = "Key Resources",
    keyMembers = "Key Members",
    costStructure = "Cost Structure",
    revenueStreams = "Revenue Streams",
    customerRelationships = "Customer Relationships",
    channels = "Channels",
    customerSegments = "Customer Segments"


}

export class Hypothesis
{


    constructor(
        readonly id : number,
        readonly content: string,
        readonly  category: HypoCategory,
        readonly  status: HypoStatus,
        readonly  ratings: Rating[],
        readonly baseHypothesis: number
    ) {}

}

module.exports = {
    Hypothesis,
    HypoCategory,
    HypoStatus
}
