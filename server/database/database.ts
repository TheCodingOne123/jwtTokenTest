
const {MongoClient} = require('mongodb')

async function main()
{
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri)


    try{
        await client.connect()

        await listDatabases(client)
    }
    catch (e){
        console.error(e)
    }


    let collection = await client.db('team_1').collection("Team")
    let team = await collection.findOne({_id: 'team_1'})
    console.log(team)

    await client.close()

}

async function listDatabases(client:any)
{
    let databasesList = await client.db().admin().listDatabases()

    console.log("Databases")
    databasesList.databases.forEach((db: any) => console.log(`-${db.name}`))
}

main().catch(console.error)
