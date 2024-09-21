const express = require('express');
const router = express.Router();
const contratController = require('../controllers/contrat.controller'); // Correct path

router.post('/add-contrat', contratController.addContrat);
router.get('/get-contrats/:clientId', contratController.getContractsByClientId);
router.put('/update-contrat/:id', contratController.updateContrat);
router.delete('/delete-contrat/:id', contratController.deleteContrat);

module.exports = router;

