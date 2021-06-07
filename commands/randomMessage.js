const Discord = require('discord.js')

module.exports = function globalRandomMessage() {
  let text_sd = new Array();

  text_sd[0] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('**Tem dúvidas sobre o servidor, obras ou a scan? vá até o <#643244230122274836> e digite `%duvidas`**');
  text_sd[1] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('**Não sabe quais obras estão em hiato ou o que é hiato? vá até <#643244230122274836> e digite `%obrashiato`**');
  text_sd[2] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('**Gostaria de saber quais obras têm dia de lançamento? vá até <#643244230122274836> e digite `%obraslançamentos`**');
  text_sd[3] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('**Gostaria de fazer parte da neox? vá até o <#643244230122274836> e escreva `%recrutamento`**');
  text_sd[4] = new Discord.MessageEmbed().setColor('#0000ff').setDescription('**Não sabe quais obras estão em dia? vá até o <#643244230122274836> e escreva `%obraemdia`**');

  let random = Math.floor(5* Math.random())
  return text_sd[random]
};