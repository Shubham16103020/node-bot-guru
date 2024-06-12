// controllers/botController.js
const botService = require('../services/botService');

exports.handleMessage = async (req, res, next) => {
    try {
        const userMessage = req.body.message;
        const botResponse = await botService.getBotResponse(userMessage);
        res.json({ response: botResponse });
    } catch (error) {
        next(error);
    }
};
