export {}

export class User{

    constructor(
        readonly id: number,
        readonly firstname: string,
        readonly surname: string,
        readonly eMail: string,
        readonly token: string
    ) {
    }


}

module.exports = {
    User
}
