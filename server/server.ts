import {JwtToken} from "./jwt-token/jwt-token";
import {Article, Evidence, EvidenceType} from "./database/evidences/evidence";
import {Team} from "./database/team/team";
import {IdMongodb} from "./database/id-mongodb/id-mongodb";
import {DatabaseConnector} from "./database/database-connector/database-connector";
import {IdTestMongodb} from "./database/id-mongodb/id-test-mongodb";


require('dotenv').config({path: `${__dirname}\.env`})
const express = require('express')
const app = express()






app.use(express.json())

app.post('/Team',async(req, res)=>{



    try{
        let body = req.body
        let team = new Team(1,body.teamname, [],
            {
                commit: 1,
                evidence : 1,
                hypothesis: 1,
                user: 1,
                rating: 1,
            })
    }
    catch (e)
    {
        console.log(e)
        res.sendStatus(400)
    }




})

app.get('/Test', async (req,res)=> {


/*    let idTest = new IdTestMongodb()
    let value = await idTest.getNextTeamId()
    res.send(value.toString())*/

    let idGetter = new IdMongodb(new DatabaseConnector())
    console.log(idGetter.getNextTeamId)
    await idGetter.getNextTeamId()

/*    let test = new JwtToken()
    console.log(test)
    console.log(idGetter)
    console.log(idGetter.getNextTeamId)
    let result = await idGetter.getNextTeamId()
    result = JSON.stringify(result)*/


})

app.get('/Login',async (req: any, res: any) => {

    let jwtTokenObject = new JwtToken()
    let jwtToken = await jwtTokenObject.createToken(req)

    if (!jwtToken) {
        res.sendStatus(401)
    }
    if (jwtToken) {
        res.json({jwtToken: jwtToken})
    }


})

app.get('/Evidence/:id',(req: any, res :any) => {

    let id = req.params

    let test = new Article(1,EvidenceType["article"], "hi",new Date(),"hi","hi",[])

    console.log(JSON.stringify(test))

    res.sendStatus(404)

})

app.post('/Evidence',(req: any , res: any)=>{

    let body = req.params



})

app.get('/Hypothesis/:id',(req: any, res :any) => {

    let id = req.params.id

})


app.get('/',(req:any,res: any)=>
{
    /* return angular app*/
})




app.listen(3000)





/*app.get('/posts', jwtToken.authenticateToken , (req :any, res: any)=> {


    res.json(data.posts.filter((post: { username: any }) => post.username === req.user.name))
})

app.get('/test',(req:any, res:any)=> {
    res.send(`${process.env["ACCESS_TOKEN_SECRET"]}`)
})

app.post('/login', (req: any, res : any) => {

    let accessToken = jwtToken.createToken(req)
    console.log(accessToken)
    res.json(accessToken)
})*/



