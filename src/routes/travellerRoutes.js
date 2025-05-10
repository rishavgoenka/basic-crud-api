const express = require('express');
const router = express.Router();
const travellerController = require('../controllers/travellerController');

router.get('/', travellerController.getTravellers);
router.post('/', travellerController.createTraveller);
router.put('/:id', travellerController.updateTraveller);
router.delete('/:id', travellerController.deleteTraveller);

module.exports = router;