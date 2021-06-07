const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type == 'dm') return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return
  const recrutamentoMessage = args.join(' ');
  message.delete().catch(O_o => {});
   message.reply("DM enviada, confira seu privado!").then((sent) => {
    setTimeout(function() {sent.delete()}, 5000)
  })
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Bem-vindo ao Recrutamento da Neox')
    .setDescription("**Dê uma lidinha nas funções que precisamos de ajuda:**\n\n**TRADUTOR:**\nO tradutor deve traduzir (seja inglês, espanhol, japonês, coreano ou chinês) para a língua portuguesa.\n**Requisitos: **Ter uma boa noção de inglês[Fluente] /Espanhol[Fluente] / japonês[N3+] / coreano[Intermediário+] / chinês[HSK4+], de preferência ter algum curso ou já ter morado no exterior (nada de google tradutor). **__Se você quer TRADUZIR envie aqui o comando  -->>    %tradutor.__**\n\n**EDITOR:**\n**Type:** Ter uma boa noção de centralização e posicionamento das falas e uma boa memória para fontes e variações de configuração textual.\n**Redraw:** Ter um bom domínio das ferramentas de edição, paciência e atenção para fazer corretamente os redesenhos das imagens.\n**Requisitos: **Saber trabalhar com o editor de imagens (Photoshop CS6+).\n(Caso queira aprender estamos com disponibilidade para ensinar, basta ter tempo e o Photoshop CS6+)\n**Obs:** Youtube tem muitos tutoriais de edição.\n**__Se quiser EDITAR envie aqui o comando ->>  %editor.__**\n\n**REVISOR**\nO revisor fica responsável por conferir a tradução do tradutor para possíveis erros de digitação, tradução, balões, páginas faltando e etc.\n**Requisitos: **Ter domínio da língua portuguesa, ou intermediário com conhecimento do inglês. **__Se quer REVISAR envie aqui o comando     ->> %revisor__**\n\n**[Seja paciente ao enviar seu pedido pelo teste, devido ao alto número de candidatos, podemos demorar a responder.]**\n[*Não esqueça de enviar o teste* **FEITO** *para o devido responsável de cada teste...*]\n\nTradução (Inglês & Japonês): <@216002354900762637>\nTradução (Chinês & Coreano): <@748589622048587857>\nTradução (Espanhol):<@236666061603340288>\nEdição (Type & Redraw): <@312268520740356097>\nRevisão: <@407895508179484672>\n\n**AVISO: Estamos procurando pessoas REALMENTE INTERESSADAS em ajudar.**\n\n- Caso ocorra qualquer problema/bug no bot, chame <@748614256857186354>")
    //.setImage('https://cdn.discordapp.com/attachments/806193271835066408/806355192072503348/unknown.png')

    message.author.send(embed)
};