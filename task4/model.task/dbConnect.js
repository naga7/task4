const {MongoClient}=require("mongodb")
const coonnect_db=(cb)=>{ MongoClient.connect(process.env.dburl,async(erro,client)=>{
        if(erro) return console.log("error in connect data")
        const db = client.db(process.env.dbname)
        cb(db)
})}
module.exports=coonnect_db