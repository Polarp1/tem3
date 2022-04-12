import {
    config
} from 'dotenv'

import Bot from './Bot'

config()

const bot = new Bot()

client.on('message', msg => {
  msg.reply('pong');
});

bot.login(process.env.DISCORD_BOT_TOKEN)
