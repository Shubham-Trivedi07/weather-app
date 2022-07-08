const http =require('http');

const { userInfo } = require('os');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=+Ujjain,IN&appid=8ddb4d54c85456c0a34d089448bd3a95&units=metric';

const server = http.createServer(function(request,response){

var request = require('request');

request(url, function(err,res,body){
const data = JSON.parse(body);
response.write("<html><body><div id='container'>");
response.write("<h1>"+ 'city Name - : ' + data['name'] + '<br>' + "</h1>");
response.write("<h2>"+ 'Temprature - : ' + data.main['temp'] + '<br>'+"</h2>");
response.write("<h3>"+ 'Sunset Time - : ' + new Date(data.sys['sunset']*1000)+"</h3>");
response.write("</div></body></html>");
response.end();
});
}).listen(4000);