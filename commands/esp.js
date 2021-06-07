const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const espMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setTitle ('Teste de Espanhol')
    .setColor('#0000ff')
    .setDescription("*Segue o Link do arquivo:* http://bit.ly/esptrad\n\n\**__LEIA AS INSTRUÇÕES CONTIDAS NO ARQUIVO__**.\n\n**Boa sorte.**\n\nAo finalizar o teste, envie para <@236666061603340288> / Sir. Sarah Aquill#7039 em formato .txt")
    

  message.channel.send(embed)
}