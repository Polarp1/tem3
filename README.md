# How to get your bot running 
In the heroku app dashboard click deploy
connect heroku to github
go to settings and scroll until you find Config Vars
press Reveal Config Vars and add a variable named BOT_TOKEN containing your bots token
go into recourses and uncheck web npm start
check worker node bot.js
# Your bot should be running
add it to your channel and say ping,it should reply with pong
