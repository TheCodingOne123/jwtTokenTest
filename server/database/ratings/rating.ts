export {}

export class Rating{


    constructor(
        readonly id: number,
        readonly rating: number,
        readonly reasoning: string,
    ) {
    }
}

module.exports = {
    Rating
}
