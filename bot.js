const Discord = require('discord.js');

const client = new Discord.Client("NzQxODgyNDYwODQ0ODUxMjUx.Xy-B4g.2ws9BBfUAJds0skZbPcLjdnBqg8");

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
