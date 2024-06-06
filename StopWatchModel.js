const  mongoose=  require("mongoose")

const  stopwatchSchema=mongoose.Schema({
    time:{type:Number, require:true},
    lap:{type:[Number], require:true}
})
module.exports= mongoose.model("Timer", stopwatchSchema)