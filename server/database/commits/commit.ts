import {Hypothesis} from "../hypotheses/hypothesis";
import {Evidence} from "../evidences/evidence";

export{}

export class Commit{

    constructor(
        readonly id: number,
        readonly date: Date,
        readonly title: string,
        readonly hypotheses: Hypothesis[],
        readonly evidences: Evidence[],
    ) {
    }
}
