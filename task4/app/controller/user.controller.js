const coonnnect_db= require("../../model.task/dbConnect")
const ObjectId=require("mongodb").ObjectId
const deelwith=require("../helpper/dealWithJson")

const fileName_tasks="model.task/tasks.json"
class task{
        static all =async(req,res)=>{
                try{
                        coonnnect_db(async(db)=>{
                                // res.send("test")
                                const all_tasks=await db.collection("task-db").find().toArray()
                                res.render("all",{
                                        PageTitle:"ALL TASKS",
                                        all_tasks,
                                       hasData:all_tasks.length
                     
                                     }) 
                        })
                }catch(e){
                        res.send(e)

                }
              
               
        }
        static add = (req,res)=>{
                res.render("add",{
                PageTitle:"Add task"})
        }


        static addlogic= async(req,res)=>{
                try{
                        coonnnect_db(async(db)=>{
                                await db.collection("task-db").insertOne(req.query)
                                res.redirect("/")
                        })
                }
                catch(e){
                        res.send(e)

                }
              
        }

        static singletask=(req,res)=>{
                coonnnect_db(async(db)=>{
                        const Task=await db.collection("task-db").findOne({
                                _id:new ObjectId(req.params.id)
                        })
               
                        res.render("singletask", {
                            pageTitle:"Single Data",
                        Task
                        })
                })
        }
        static deletall= (req,res)=>{
                try{   coonnnect_db(async(db)=>{
                        await db.collection("task-db").remove()})
                
                res.redirect("/")     }
                catch(e){
                        res.send(e.message)
                }
             
        }
        static deltask = (req,res)=>{
                try{
                coonnnect_db(async(db)=>{
                        await db.collection("task-db").deleteOne({
                                _id:new ObjectId(req.params.id)
                        })
                 } )
                 res.redirect("/")}
                catch(e){
                        res.send(e)
                 }


      
      
        }
        static edtit =(req,res)=>{
                try{ coonnnect_db(async(db)=>{
                        const Task=await db.collection("task-db").findOne({
                                _id:new ObjectId(req.params.id)
                        })
                        res.render("edit",{
                                pageTitle:"Edite",
                                Task       
                        })
                })
               }
                catch(e){res.send(e.message)}
        }

        static edtitlogic = (req, res) => {
              
                try {
                        coonnnect_db(async (db) => {
                                const Task = await db.collection("task-db").findOneAndUpdate(
                                      _id,req.query)
                              
                           
                        })
                        res.redirect(`/singletask/${_id}`)

                } catch (e) {
                        res.send(e.message)
                }

        }

}



module.exports = task

