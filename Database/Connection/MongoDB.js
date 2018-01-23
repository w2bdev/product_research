import mongoose from 'mongoose';

import mongoDbConfig from '../Config/MongoDB';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDbConfig.DbConnectionString, mongoDbConfig.options);

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error:'));

console.log('MongoDB Connected !')

module.exports = mongoDB;