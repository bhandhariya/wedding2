// var express=require('express');
// var app=express();
// var path=require('path')
// app.listen(8080,function(){console.log("server readt on 1234")});
// // app.use('/',express.static('dist/aiproj'))
// app.use('/',express.static('dist/aiproj'))

// app.get('/*', function(req,res) {
    
//     res.sendFile(path.join(__dirname+'/dist/aiproj/index.html'));
//     });
// app.use('/app',express.static('public'))

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/aiproj'));
app.use('/app',express.static('public'),function(req,res){

res.sendFile(path.join(__dirname+'/public/index.html'));
})
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/aiproj/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);