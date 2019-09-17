var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',express.static('public'));
app.use('/api', require('./routes/api').route)

app.listen(port, function(){
    console.log("Server running on " + port);
})