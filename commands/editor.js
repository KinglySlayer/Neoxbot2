const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const editorMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setDescription("Qual das funções de edição? digite **%type** para o teste de typer e **%redraw** para o teste de redrawer.")

  message.channel.send(embed)
}