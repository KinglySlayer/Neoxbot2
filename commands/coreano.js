const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const coreanoMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Coreano')
    .setDescription("*Segue o Link do arquivo:* http://bit.ly/koreatrad\n\n**__LEIA AS INSTRUÇÕES CONTIDAS NO ARQUIVO__**.\n\n**Boa sorte.**\n\nAo finalizar o teste, envie para <@748589622048587857> / Rheagor#0945 no formato .txt")
    

  message.channel.send(embed)
}