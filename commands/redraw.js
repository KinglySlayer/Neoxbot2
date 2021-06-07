const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const redrawMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#0000ff')
    .setTitle('Teste de Redraw')
    .setDescription("**No teste de redrawer você não precisa fazer todas as paginas, faça apenas as que você conseguir e não esqueça de ler o txt e ver os videos.**\n\n**Segue o link do teste:** http://bit.ly/redrawneox\nLEIA AS INTRUÇÕES DO TXT DENTRO NO .RAR\n\nAo finalizar o teste, envie para <@312268520740356097> / Toretto#3918")

  message.channel.send(embed)
}