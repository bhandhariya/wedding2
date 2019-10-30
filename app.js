var express=require('express');
var app=express();
var path=require('path')
app.listen(1234,function(){console.log("server readt on 1234")});
// app.use('/',express.static('dist/aiproj'))
app.use('/',express.static('dist/aiproj'))
app.use('/app',express.static('public'))

