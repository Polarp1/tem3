const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzUwMTU3MTQ5MjY2NTA5OTY1.X02cSQ.tt6DkjTe_vlqNisgW73QJYAgGkE);//BOT_TOKEN is the Client Secret
