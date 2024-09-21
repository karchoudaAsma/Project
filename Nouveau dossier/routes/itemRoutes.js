const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to create a new item
router.post('/items', itemController.createItem);

// Route to get all items
router.get('/items', itemController.getAllItems);

module.exports = router;
