const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const tradutorMessage = args.join(' ');
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Tradutor')
    .setDescription("*Se quiser o teste de inglês, é só digitar ->>* **%ing**\n\n*Se quiser o teste de Japonês digite ->>*  **%jap**\n\n*Se quiser o teste de Chinês digite ->>* **%china**\n\n*Se quiser o teste de Coreano digite ->>* **%coreano**\n\n*Se quiser o teste de Espanhol digite ->>* **%esp**\n\n**OBS: Não precisa ter pressa, faça o teste quando puder...**")

message.channel.send(embed)
};


//*Segue o Link do arquivo: https://cdn.discordapp.com/attachments/786021920414892054/786204946516803615/Teste_de_Traducao_para_Ingles.rar*\n\nAo finalizar o teste, envie para **Bananinha#0745**"
