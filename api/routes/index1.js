const { query } = require('express');
const express = require('express');
const conn = require('../../connection');
const router = express.Router();



router.use(express.json());
router.get('/', (req, resp, next) => {
  conn.query('select * from cart_items', (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})

router.post('/', (req, resp) => {
  const data = req.body;
  conn.query('INsert INTO cart_items SET?', data, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})




module.exports = router;

