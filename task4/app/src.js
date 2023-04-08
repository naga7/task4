const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
///////////////////
const mystaticDire= path.join(__dirname,"../resourse/public")
const myview=path.join(__dirname,"../resourse/views")
const mypartialdire=path.join(__dirname,"../resourse/layout")
//////////////////////
app.use(express.static(mystaticDire))
app.set("view engine","hbs")
app.set("views",myview)
hbs.registerPartials(mypartialdire)
//urlencond!!!
app.use(express.urlencoded({extended:true}))
const userout=require("./routes/user.routs")
const exp = require("constants")
app.use(userout)
app.all("*", (req,res)=> res.render("err404", { pageTitle:"Error in page"} ) )




module.exports=app