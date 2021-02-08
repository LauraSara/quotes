const express = require("express");
const app = express();
const port = 8000;

app.use('/static', express.static('static'))
//app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require('./routes/principal'));


app.listen(8000, function() {
  console.log("listening on port 8000");
});