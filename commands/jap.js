const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const japMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Japonês')
    .setDescription("*Segue o Link do arquivo:* http://bit.ly/Japtrad\n\n**Boa sorte.**\n\n**__LEIA AS INSTRUÇÕES CONTIDAS NO ARQUIVO__**\n\n Ao finalizar o teste, envie para <@216002354900762637> / Bananinha#0745 no formato .txt")
    

  message.channel.send(embed)
}