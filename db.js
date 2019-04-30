var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '123456789',
    database : 'dbs'
  },
 
});

module.exports= knex ;