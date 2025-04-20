const express = require('express');
const router = express.Router();
const jobRequestController = require('../controllers/jobRequestController');
// const authMiddleware = require('../middleware/authMiddleware'); // Uncomment later if needed

router.post(
  '/create',
  // authMiddleware.authenticate, // Uncomment later if needed
  // authMiddleware.isOwner,      // Uncomment later if needed
  jobRequestController.createJobRequest
);

module.exports = router;