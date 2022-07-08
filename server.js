const express = require('express');
const request = require('request');

const app = express();

app.get('/',(req,res) => {
let city = req.query.City;
var request = require('request');
request('https://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=8ddb4d54c85456c0a34d089448bd3a95&units=metric',  //Api key
function(error, response, body){
let data = JSON.parse(body);  //return data into JSON format
if(response.statusCode === 200){
    res.send('The weather in your city "${New Delhi}" is ${data.list[0].weather[0].description}');
}
}
);
});

app.listen(3000, () => console.log('server running on port 3000'));