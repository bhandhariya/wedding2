var express=require('express');
var app=express();
var path=require('path')
app.listen(8080,function(){console.log("server readt on 1234")});
// app.use('/',express.static('dist/aiproj'))
app.use('/',express.static('dist/aiproj'))

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/aiproj/index.html'));
    });
app.use('/app',express.static('public'))

