const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const { ksebmodels } = require("./models/kseb")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://adarshp:beenasadu@cluster0.6nnmmnj.mongodb.net/ksebapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/Adduser",(req,res)=>{
    let input = req.body
    let kseb = new ksebmodels(input)
    kseb.save()
    console.log(input)

})
app.get("/Viewall",(req,res)=>{
    ksebmodels.find().then(
        (data)=>{
            res.json(data)
        }
    )
})
app.post("/Searchuser",(req,res)=>{
    let input = req.body
    ksebmodels.find(input).then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
    
})
app.post("/Deleteuser",(req,res)=>{
    let input = req.body
    ksebmodels.findByIdAndDelete(input._id).then(
    (response)=>{
        res.json({"success":"deleted"})
    }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )

})
app.listen(8080,()=>{
    console.log("server started")
})