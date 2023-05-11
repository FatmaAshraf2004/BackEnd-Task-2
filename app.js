const request = require('request')
const forecast = require("./data1/forecast")

forecast(29.871903452398 , 26.4941838299718 , (error , data) => {
     console.log("ERROR : " , error)
     console.log("DATA  : " , data)
})