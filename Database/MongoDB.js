import mongoose from 'mongoose';

import mongoDbConfig from '../Configs/MongoDB/Config';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDbConfig.DbConnectionString, mongoDbConfig.options);

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoDB;