import {DatabaseConnector} from "../database/database-connector/database-connector";
import {IdatabaseConnector} from "../database/database-connector/idatabase-connector";

export{}

require('dotenv').config({ path: `${__dirname}/.env` })


export class JwtToken{

    readonly jwt = require('jsonwebtoken')


    async createToken(req:any)
    {

        const token =  req.body.token

        if(!token)
        {return false}



        const teamName = await this.checkTokenWithUsers(token,new DatabaseConnector())


        if(teamName == false)
        {return false}
        console.log(teamName)

        const jwtData = {token: token, teamName: teamName}

        const accessToken =  this.jwt.sign(jwtData, process.env.ACCESS_TOKEN_SECRET)

        const cutToken = this.splitJWToken(accessToken)

        return {accessToken : cutToken}
    }

    private splitJWToken(token: string)
    {
       return token.split('.')[2]
    }

    authenticateToken(req:any, res:any, next:any) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(token == null) return res.sendStatus(401)

        this.jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err:any, user:any) => {

            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })


    }

    async checkTokenWithUsers(token: string, database: IdatabaseConnector): Promise<string | boolean>
    {


        await database.connect()
        let databaseNameList: any = await database.connection.db().admin().listDatabases({nameOnly: true})
        databaseNameList = databaseNameList["databases"]


        for (const databaseName of databaseNameList) {


            let collection = await database.connection.db(databaseName["name"]).collection("Team")
            let teamName = await collection.findOne({"users.token": token})
            if(teamName)
            {
                await database.closeConnection()
                console.log("found match")
                return databaseName
            }

        }

        await database.closeConnection()
        return false



    }


}



module.exports = {
    JwtToken,
}
