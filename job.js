    // backend/models/JobRequest.js
    const mongoose = require('mongoose');
    const { Schema } = mongoose;

    const jobRequestSchema = new Schema({
        owner: { type: Schema.Types.ObjectId, ref: 'User',},
        jobTitle: { type: String, required: true },
        jobType: { type: String },
        jobDescription: { type: String },
        urgency: { type: String },
        budgetType: { type: String },
        amount: { type: String },
        preferredStartDate: { type: Date },
        estimatedTimeline: { type: String },
        specialInstructions: { type: String },
        property: { type: String },
        address: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        status: { type: String, enum: ['pending', 'accepted', 'completed', 'cancelled'], default: 'pending' },
        workerAssigned: { type: Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        licenseRequired: { type: Boolean, default: false }, // Added this field
        insuranceRequired: { type: Boolean, default: false }, // Added this field
        toolsProvided: { type: Boolean, default: false }, // Added this field
    });

    const JobRequest = mongoose.model('JobRequest', jobRequestSchema);

    module.exports = JobRequest;