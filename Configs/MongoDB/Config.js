const DbConnectionString = "mongodb://localhost/full";

const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}; 

export default {
  DbConnectionString,
  options
};