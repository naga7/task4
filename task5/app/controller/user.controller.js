const taskmodel=require("../../model.task/model.task/task.model")
const coonnnect_db= require("../../model.task/dbConnect")
// const ObjectId=require("mongodb").ObjectId
// const deelwith=require("../helpper/dealWithJson")

const fileName_tasks="model.task/tasks.json"
class task{
        static all =async(req,res)=>{
                try{
                      const alltaskes=await taskmodel.find()
                                res.render("all",{
                                 PageTitle:"ALL TASKS",
                                alltaskes,
                                 hasData:alltaskes.length
                     
                                
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
                try{const data=new taskmodel(req.query)
                        await data.save()
                         res.redirect("/")
                        console.log(data)
                }
                catch(e){
                        res.send(e)

                }
              
        }

        static singletask=async(req,res)=>{
              
        const Task=await taskmodel.findById(req.params.id)
               
                        res.render("singletask", {
                            pageTitle:"Single Data",
                        Task
                        })
                
        }
        static deletall=async (req,res)=>{
                try{
                        
                        await taskmodel.deleteMany()
                   res.redirect("/")  
                   }
                catch(e){
                        res.send(e.message)
                }
             
        }
        static deltask = async(req,res)=>{
                try{
                
                        await taskmodel.findByIdAndDelete(
                               req.params.id)
                               res.redirect("/")
                 } 
              
                catch(e){
                        res.send(e)
                 }


      
      
        }
        static edtit =async(req,res)=>{
                try{
                        const Task=await taskmodel.findByIdAndUpdate(req.params.id)
                            
                       
                        res.render("edit",{
                                pageTitle:"Edite",
                                Task       
                        })
               
               }
                catch(e){res.send(e.message)}
        }

        static edtitlogic =async (req, res) => {
              const id =req.params.id
                try {
                        
                                const Task = await taskmodel.findOneAndUpdate(
                                      id,req.query,{runValidators:true})
                              
                           
                      
                        res.redirect(`/singletask/${_id}`)

                } catch (e) {
                        res.send(e.message)
                }

        }

}



module.exports = task

