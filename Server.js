const express= require("express")
const mongoose= require("mongoose")
const cors = require("cors")

require("dotenv").config();
const app=express()
app.use(express.json())
app.use(cors)

const PORT = process.env.PORT||3001


mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(()=>{console.log("Connectedto MongoDB successfully.....")})
    .catch((error)=>console.error("error occured",error))
app.use('/api/stopwatch', require('./routes/stopwatchroute'))
app.listen(PORT,()=>{
    console.log(`App is listening to the port ${PORT}`)
})
