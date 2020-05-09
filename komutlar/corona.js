const Discord = require("discord.js")
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();


exports.run = async (client, message, args) => {
   track.all().then(data => {
    const embed = new Discord.RichEmbed()
      .addField("Total Infections", data.cases)
      .addField("Total Dies", data.deaths)
      .addField("Total Convalescent", data.recovered)
      .setFooter("This Informations Reset Everyday!");
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'corona'
};