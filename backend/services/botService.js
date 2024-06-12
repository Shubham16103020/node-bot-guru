// services/botService.js
const WebSocket = require('ws');

exports.getBotResponse = (message) => {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket('https://mediafiles.botpress.cloud/fac78e8e-eedc-459f-8311-d2c194aaecdf/webchat/bot.html');

        ws.on('open', () => {
            const payload = {
                type: 'text',
                text: message,
                userId: 'user123'
            };
            ws.send(JSON.stringify(payload));
        });

        ws.on('message', (data) => {
            const response = JSON.parse(data);
            if (response && response.responses && response.responses.length > 0) {
                resolve(response.responses[0].text);
            } else {
                reject(new Error('No valid response from Botpress'));
            }
            ws.close();
        });

        ws.on('error', (error) => {
            reject(error);
        });
    });
};
