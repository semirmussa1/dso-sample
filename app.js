//const express = require('express')
//const app = express()
//app.get('/', function(request,result){
    
    // result.send('Hello World!! from ')
    var name = prompt("Enter your name", "Enter name");
    document.write("Hello " + name + "!");
    //document.getElementById("demo").innerHTML = "Hello Connor!" + name;
    console.log('hello world app is listening on port 3333')
//})
app.listen(3333,"0.0.0.0",function(){
   console.log('hello world app is listening on port 3333')
})
