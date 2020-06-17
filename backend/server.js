//const config = require('./api/Config.json');
const Sequelize = require('sequelize');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

var cors = require('cors')
app.use(cors())
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var models = require("./api/Models");

//Routes
var userRoute = require('./api/controllers/UserController.js');
app.use('/user', userRoute);
var registroRoute = require('./api/controllers/RegistroController.js');
app.use('/registro', registroRoute);

//Sync Database


//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

models.sequelize.sync().then(function() {
	
	console.log('Nice! Database looks fine');
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});

const server = app.listen(port, function(err) {
 
    if (!err)
        console.log("Site is live " + port);
    else console.log(err)
 
});

