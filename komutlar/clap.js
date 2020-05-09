const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
  const mapping={
  " " : '👏'
};
  
const metin = args.slice(0).join(' ')
     if (metin.length < 1) return message.reply('You have to write something to applaud.');
    message.channel.send('👏' + metin.split("").map(c=>mapping[c]||c).join("") + '👏')
  
}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
};

exports.help = {
    name: 'clap',
    description: 'Clapping the word you wrote.',
    usage: 'clap'
};