var express = require ("express") ;
var app = express();

app.get("/",function(req,res){
    res.end("Hello, My World!")
})

app.listen(8080 || process.env.PORT)