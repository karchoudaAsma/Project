const express = require('express');
const router = express.Router();
const clientController = require('../controllers/crud.controller');

// Route for adding a new client
router.post('/add-client', clientController.addClient);
router.get('/get-clients', clientController.getClient)
// Route to delete a client by ID
router.delete('/delete-client/:id', clientController.deleteClient);

// Route to update a client by ID
router.put('/update-client/:id', clientController.updateClient);


module.exports = router;
