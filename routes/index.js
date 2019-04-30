var express = require('express');
var router = express.Router();
const options = {
  client: 'mysql',
  connection: {
      host: 'localhost',
      user: 'root',
      password: '123456789',
      database: 'dbs'
  }
}
const knex = require('knex')(options);

/* GET home page. */
router.get('/user/random', function(req, res, next) {
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push(Math.floor(Math.random()*100)%100)
  }
  knex
  .from('w_user')
  .select('*')
  .whereIn('id',data)
  .then((rows) => res.send({...rows}))
});

router.post('/user/id',function(req, res, next) {
  const {body} = req
  const {id} = body
  knex
  .from('w_user')
  .select('*')
  .whereIn('id',id)
  .then((rows) => res.send({...rows}))
})

module.exports = router;
