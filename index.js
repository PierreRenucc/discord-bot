const Discord = require('discord.js');
const Client = new Discord.Client({intents : [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]
});

Client.on('ready', () => {
    console.log('bot ok')
});

const prefix = "!";

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === "Pierre"){
        message.reply("Vive Pierre ! Mon créateur !")
    }
    else if(message.content === prefix + 'help'){
     
    }
});

Client.login('ODc4Mzg2MjQ2NTI5OTkwNzM3.YSAa8A._tiiaPeYyTghxSGe2rUnb55WgUo');