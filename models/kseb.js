const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "consumernumber":String,
        "name":String,
        "email":String,
        "mobile":String




    }
)
let ksebmodels = mongoose.model("ksebs", schema)
module.exports={ksebmodels}