// backend/controllers/jobRequestController.js
const mongoose = require('mongoose');
const JobRequest = require("../models/job");

exports.createJobRequest = async (req, res) => {
    try {
        const {
            jobTitle,
            jobType,
            jobDescription,
            jobUrgency,
            budgetType,
            budgetAmount,
            startDate,
            timeline,
            specialInstructions,
            property,
            address,
            phoneNumber,
            licenseRequired,
            insuranceRequired,
            toolsProvided,
        } = req.body;

        let owner;
        if (req.user && req.user.userId) {
            owner = req.user.userId;
        } else {
            owner = null; // Or handle the guest user scenario appropriately
        }

        const newJobRequest = new JobRequest({
            owner: owner, // Use null or the guest user's ObjectId
            jobTitle,
            jobType,
            jobDescription,
            urgency: jobUrgency,
            budgetType,
            amount: budgetAmount,
            preferredStartDate: startDate ? new Date(startDate) : null,
            estimatedTimeline: timeline,
            specialInstructions,
            property: property,
            address: address || '', // Make sure your frontend sends this
            phoneNumber: phoneNumber || '', // Make sure your frontend sends this
            licenseRequired: licenseRequired || false,
            insuranceRequired: insuranceRequired || false,
            toolsProvided: toolsProvided || false,
        });

        await newJobRequest.save();

        res.status(201).json({ message: 'Job request created successfully', jobRequest: newJobRequest });

    } catch (error) {
        console.error('Failed to create job request:', error);
        res.status(500).json({ message: 'Failed to create job request', error: error.message }); // Include error message for debugging
    }
};

exports.getAvailableJobsForWorkers = async (req, res) => {
    try {
        const availableJobs = await JobRequest.find({ status: 'pending' });
        res.status(200).json(availableJobs);
    } catch (error) {
        console.error('Error fetching available jobs for workers:', error);
        res.status(500).json({ message: 'Failed to fetch available jobs', error: error.message }); // Include error message for debugging
    }
};

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await JobRequest.find({ status: "pending" }); // Or "open" depending on your logic
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error fetching jobs" });
    }
};