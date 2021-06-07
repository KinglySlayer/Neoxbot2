const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type == 'dm') return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return
  // const recrutamentoMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.reply("DM enviada, confira seu privado!!").then((sent) => {
    setTimeout(function() {sent.delete()}, 3000)
  })

  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setAuthor('Neox', 'https://media.discordapp.net/attachments/748618439869988935/805929885964697630/5dd00521ab330b8d32b74629ca60799c.png?width=473&height=473')
    .setDescription("**__COMO UTILIZAR O BOT__** \n\n - Prefixo: **%** \n - Digite **%duvidas** em <#643244230122274836> para ver os comandos do bot \n - Digite **%recrutamento** para fazer os testes de recrutamento \n\n **__CHATS IMPORTANTES__** \n\n - <#643244230122274836> | Chat de duvidas \n - <#770601075534987264> | Chat para relatar erros no capítulo \n - <#833914908210495539> | Chat para relatar capítulos que não carregam \n - <#379088050438930432> | Chat destinado para utilizar comando dos bots \n - <#826944584524234754> | Chat para pegar as tags dos projetos \n - <#650813193668657173> | Chat onde todos os avisos importantes acontecem \n - <#776227640783667220> | Chat de regras, as **__LEIA COM ATENÇÃO__** \n - <#528768314730741800> | Chat para fazer sugestões de obras \n")
     .setImage('https://i.imgur.com/cEoJkes.png')
     .setFooter("Mangá - SSS-Class Revival Hunter", 'https://media.discordapp.net/attachments/748618439869988935/805929885964697630/5dd00521ab330b8d32b74629ca60799c.png?width=473&height=473')
    message.author.send(embed)
};
