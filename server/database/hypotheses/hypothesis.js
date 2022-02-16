"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hypothesis = exports.HypoCategory = exports.HypoStatus = void 0;
var HypoStatus;
(function (HypoStatus) {
    HypoStatus["experimental"] = "experimental";
    HypoStatus["validated"] = "validated";
    HypoStatus["rejected"] = "rejected";
})(HypoStatus = exports.HypoStatus || (exports.HypoStatus = {}));
var HypoCategory;
(function (HypoCategory) {
    HypoCategory["valuePropositions"] = "Value Propositions";
    HypoCategory["keyActivities"] = "Key Activities";
    HypoCategory["keyResources"] = "Key Resources";
    HypoCategory["keyMembers"] = "Key Members";
    HypoCategory["costStructure"] = "Cost Structure";
    HypoCategory["revenueStreams"] = "Revenue Streams";
    HypoCategory["customerRelationships"] = "Customer Relationships";
    HypoCategory["channels"] = "Channels";
    HypoCategory["customerSegments"] = "Customer Segments";
})(HypoCategory = exports.HypoCategory || (exports.HypoCategory = {}));
class Hypothesis {
    constructor(id, content, category, status, ratings, baseHypothesis) {
        this.id = id;
        this.content = content;
        this.category = category;
        this.status = status;
        this.ratings = ratings;
        this.baseHypothesis = baseHypothesis;
    }
}
exports.Hypothesis = Hypothesis;
module.exports = {
    Hypothesis,
    HypoCategory,
    HypoStatus
};
//# sourceMappingURL=hypothesis.js.map