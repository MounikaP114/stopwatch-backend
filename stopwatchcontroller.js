const timerModel=require('../models/StopWatchModel')

module.exports.getStopWatchTime=async (req,res)=>{
    const doc= timerModel.find()
    res.send(doc)
}
module.exports.getNewStopWatch=async ( req, res)=>{
    const {time, laps }=req.body
    try {
        const NewStopWatch= new timerModel({time,laps})
        await NewStopWatch.save()
        res.status(201).json(NewStopWatch)
    } catch (error) {
        res.status(500).json({error:error.message})   
    }
}