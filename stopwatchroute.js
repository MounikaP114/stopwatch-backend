const {Routes}=require('express')
const {getNewStopWatch,getStopWatchTime}= require('../controllers/stopwatchcontroller')

const route=Routes()

route.get('/',getStopWatchTime)
route.post('/',getNewStopWatch)