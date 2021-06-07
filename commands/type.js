const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const typeMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#0000ff')
    .setTitle('Teste de Type')
    .setDescription("**Não esqueça de ler os txt.**\n\n**Segue o link do teste:** http://bit.ly/testetyper\nLEIA AS INTRUÇÕES DO TXT DENTRO NO .RAR\n\nAo finalizar o teste, envie para <@312268520740356097> / Toretto#3918")

  message.channel.send(embed)
}