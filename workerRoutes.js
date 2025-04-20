const express = require('express');
const router = express.Router();
const jobRequestController = require('../controllers/jobRequestController');

// Route to get all available job requests for workers
router.get('/jobs/available', jobRequestController.getAvailableJobsForWorkers);

module.exports = router;