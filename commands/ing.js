const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const ingMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setTitle ('Teste de Inglês')
    .setColor('#0000ff')
    .setDescription("*Segue o Link do arquivo:* https://bit.ly/neoxtradutor\n\n\**__LEIA AS INSTRUÇÕES CONTIDAS NO ARQUIVO__**.\n\n**Boa sorte.**\n\nAo finalizar o teste, envie para <@216002354900762637> / Bananinha#0745 em formato .txt")
    

  message.channel.send(embed)
}