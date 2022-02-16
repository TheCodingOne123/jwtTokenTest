"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interview = exports.Article = exports.Evidence = exports.EvidenceType = void 0;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType["article"] = "article";
    EvidenceType["interview"] = "interview";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
class Evidence {
}
exports.Evidence = Evidence;
class Article {
    constructor(id, type, author, date, keyInsights, url, ratings) {
        this.id = id;
        this.type = type;
        this.author = author;
        this.date = date;
        this.keyInsights = keyInsights;
        this.url = url;
        this.ratings = ratings;
    }
}
exports.Article = Article;
class Interview {
    constructor(id, type, interviewConductor, participantName, audioFileId, keyInsights, date, transcriptExternal, ratings) {
        this.id = id;
        this.type = type;
        this.interviewConductor = interviewConductor;
        this.participantName = participantName;
        this.audioFileId = audioFileId;
        this.keyInsights = keyInsights;
        this.date = date;
        this.transcriptExternal = transcriptExternal;
        this.ratings = ratings;
    }
}
exports.Interview = Interview;
module.exports = {
    Evidence,
    Article,
    Interview
};
//# sourceMappingURL=evidence.js.map