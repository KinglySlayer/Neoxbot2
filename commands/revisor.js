const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const revisorMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Revisor')
    .setDescription("**Eai, " + message.author.username + ". Basicamente vc tem que corrigir ortografia, concordância e gramática**\n\n**Boa sorte.**\n**OBS: Não precisa ter pressa, faça o teste quando puder...**\n\n *Segue o Link do arquivo:* http://bit.ly/neoxrevisor\n\nAo finalizar o teste, envie para <@407895508179484672> / Emer#3854 no formato .txt")

  message.channel.send(embed);
}