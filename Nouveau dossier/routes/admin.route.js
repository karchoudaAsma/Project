// routes/admin.route.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');


// Route to generate unique admin credentials
router.post('/generateCredentials', adminController.generateAdminCredentials);
// Route for admin login
router.post('/admin-login', adminController.adminLogin);

module.exports = router;
