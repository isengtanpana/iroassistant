const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client({
    //restartOnAuthFail: true,
    authStrategy: new LocalAuth(/*{ clientId: "client" }*/),
    //ffmpeg: './ffmpeg.exe',
puppeteer: {    headless: true,args: ["--no-sandbox","--disabled-setupid-sandbox",/*"--no-sandbox","--disable-gpu"*/ ],
            //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    }
 
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
client.on('message', async (message) => {
	if (message.body === '!ping') {
		await message.reply('pong');
	}
});
