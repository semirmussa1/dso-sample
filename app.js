const express = require('express')
const app = express()
app.get('/', function(request,result){
    result.send('Hello World. from Gary!!')
})
app.listen(3333,"0.0.0.0",function(){
    console.log('hello world app is listening on port 3333. from Gary')
})
