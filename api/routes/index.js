const { query } = require('express');
const express = require('express');
const con = require('../../connection');
const router = express.Router();



router.use(express.json());
router.get('/', (req, resp, next) => {
  con.query('select * from news_and_update', (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})

router.post('/', (req, resp) => {
  const data = req.body;
  con.query('INsert INTO news_and_update SET?', data, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})




module.exports = router;

