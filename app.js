const express = require('express')
const app = express()
app.get('/', function(request,result){
	var name = prompt("Enter your name", "Enter name");
    result.send('Hello World!! from ' + name)
})
app.listen(3333,"0.0.0.0",function(){
    console.log('hello world app is listening on port 3333')
})
