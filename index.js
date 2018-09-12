console.log('Memo esta despierto');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == '!buenas') {
		message.channel.sendMessage ('Buenos dias! :3');
	}
	
	if (message.content == 'O no memo?') {
		message.channel.sendMessage ('Meow :3');
	}
	
	if (message.content == 'Sad') {
		message.channel.sendMessage ('Meow 3:');
	}
	
	if (message.content == '!leand') {
		message.channel.sendMessage ('Ñiñiñi bajate del ropero >.<');
	}
});
bot.login('NDg0NjI1MTk4NzU1MjE3NDA5.DnsH2A.YjhMqZ_sy-1qYGLTtrJ9lglv_h4');