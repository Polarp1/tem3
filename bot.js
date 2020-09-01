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

client.login(process.env.NzQxODgyNDYwODQ0ODUxMjUx.Xy-B4g.2ws9BBfUAJds0skZbPcLjdnBqg8);//BOT_TOKEN is the Client Secret
