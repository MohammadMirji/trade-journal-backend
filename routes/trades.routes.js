const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/trades.controller')

router.get('/', tradesController.getTrade);
router.get('/:id', tradesController.getoneTrade);
router.post('/', tradesController.createTrade);
router.put('/:id', tradesController.updateTrade);
router.delete('/:id', tradesController.deleteTrade);

module.exports = router;