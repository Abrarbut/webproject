const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber'); // Assuming you have a Subscriber model

// @route POST /api/subscribe
// @desc Subscribe a user
// @access Public

router.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Check if the email already exists
        let subscriber = await Subscriber.findOne({ email });
        if (subscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Create a new subscriber
        let newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
);

module.exports = router;