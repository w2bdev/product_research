import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import gameRoute from './Route/Game';
import userRoute from './Route/User';

import mongoDbConfig from './Configs/MongoDB/Config';


const app = express(); 

const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(mongoDbConfig.DbConnectionString, mongoDbConfig.options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Router Injection
app.use(gameRoute.router);
app.use(userRoute.router);

// For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
    res.sendFile('client/dist/index.html', { root: __dirname });
});







app.listen(port);
console.log(`listening on port ${port}`);