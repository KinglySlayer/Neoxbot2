const express = require('express');
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client({ autoReconnect: true});
const config = require("./config.json");
const globalRandomMessage = require('./commands/randomMessage.js');
const CronJob = require('cron').CronJob

app.get("/", (req, res, next) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  res.sendStatus(200);
});


client.once('ready', () => {
  client.user.setActivity('%duvidas - https://neoxscans.net/', { type: undefined });
});



client.on('ready', msg => {
  const job = new CronJob('0 0 */2 * * *', () => {
    const ychannel = client.channels.cache.get('512429710270267402')
    const lchannel = client.channels.cache.get('643244230122274836')
    const testchannel = client.channels.cache.get('806620872013119508')
    
    const msg = new Discord.MessageEmbed()
    .setTitle("**__AVISO - LEIA__**")
    .setDescription('O site ainda está em manutenção, então vai apresentar instabilidades, erros, algumas obras faltando e a falta de algumas funções. Caso encontre erros, caps faltando ou obras faltando, pode reportar no <#770601075534987264> para auxiliar aqueles que estão ajeitando as coisas. Contas, histórico e favoritos foram perdidos devido à manutenção.')
    // ychannel.send(globalRandomMessage());
    ychannel.send(msg);
    // lchannel.send(msg); 
    // testchannel.send(msg);
  }, null, true, 'America/Sao_Paulo');
});





client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  if (!message.content.startsWith(config.prefix)) return;
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Slayer baitola: Comando não achado, indo pro próximo.');
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  // if (message.channel.id != '643244230122274836') return;
  if(message.channel.id != '806620872013119508') return;  // chat testes
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;


  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  if (!message.content.startsWith(config.prefix)) return;
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./recrutamentoComando/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('FAQBOT o qual não sabe comentar linhas: Comando não achado, indo pro próximo.');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  // if (message.channel.id != '643244230122274836') return;
  if(message.channel.id != '806620872013119508') return;  // chat testes
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;


  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  if (!message.content.startsWith(config.prefix)) return;
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./helpComando/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Mael gostoso: Comando não achado.');
  }
});

// 
//////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  // if (message.channel.id != '643244230122274836') return;  // chat dúvidas
  if(message.channel.id != '806620872013119508') return;  // chat testes
  if (message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if (comando === 'duvidas') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Perguntas Frequentes: ')
      .setDescription(`
1 - Quais são os Sites da Neox? - **%sites**,
2 - Como sei qual obra foi dropada? - **%obrasdropadas**,
3 - Como faço para receber os anuncios? - **%receberanuncios**,
4 - Quais obras possuem dia de lançamento? - **%obraslançamentos**,
5 - Por que obra tal não está lançando? - **%obrasatraso**,
6 - Como faço para ser desmutado? - **%tempomutado**,
7 - Como que faço o teste de recrutamento? - **%recrut**,
8 - Como consigo a tag de mascote? - **%tagsespeciais**,
9 - Por que há tanto Everyone/Leitores? - **%pings**,
10 - As tags no #tags não aparecem pra mim, o que faço? - **%tags**,
11 - Não estou recebendo notificação no lançamentos, o que faço? - **%notificaçoes**,
12 - Não estou conseguindo mandar mensagem pelo disqus, o que faço? - **%disqus**,
13 - Como posso apoiar a neox? - **%padrim**,
14 - Após eu ter feito a doação, com quem falo para receber a tag? - **%padrimtag**,
15 - Como faço para reportar os erros nos capítulos? - **%reporterros**,
16 - As páginas não estão carregando, o que eu faço? - **%reportpgs**,
17 - Quais obras estão em hiato? - **%obrashiato**,
18 - Quais obras estão em dia? - **%obraemdia**,
19 - Quais são os atuais Monarcas, Admnistradores e Moderadores? - **%staff**,


- Caso sua pergunta não esteja aqui, fale com o <@432980720122855434> ou algum mod/adm. 
- Caso ocorra qualquer problema/bug no bot, chame <@748614256857186354>
    `)

    return message.channel.send(embed)
  }

  if (comando === 'sites') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription(" \n**Site Oficial**: <https://neoxscans.net/>")
    message.channel.send(embed)
  };

  if (comando === 'obrasdropadas') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("** As obras dropadas são avisadas no <#650813193668657173>  dê uma olhada lá.**")

    message.channel.send(embed)
  }; 

  if (comando === 'receberanuncios') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Para obter o anúncio de suas obras preferidas vá até <#553398333704634368> e escolha as quais quer receber notificação")

    message.channel.send(embed)
  };

  if (comando === 'obraslançamentos') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("**As seguintes obras tem data fixa:** \n\n- **Solo Leveling** | Quarta-Feira \n- **O Começo Depois do Fim** | Sexta-Feira \n\n**ELAS NÃO POSSUEM HORARIO FIXO DE LANÇAMENTO, APENAS DIA!!!**")

    message.channel.send(embed)
  };

  if (comando === 'obrasatraso') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("O atraso de algumas obras se deve há alguns imprevistos na equipe, não nos apresse, fazemos isso voluntariamente!")

    message.channel.send(embed)
  };

  if (comando === 'tempomutado') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Se seu mute foi permanente, só será removido pelo adm/mod que o colocou, converse com ele.")

    message.channel.send(embed)
  };

  if (comando === 'recrut') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Para fazer o teste de recrutamento siga as informações do <#525289821669818368> ou digite `%recrutamento` e siga as etapas")

    message.channel.send(embed)
  };
  if (comando === 'tagsespeciais') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Para conseguir tags diferentes como a de **MASCOTE** é necessario ser ativo no servidor e deixar uma marca sua no server.(nos surpreenda)")

    message.channel.send(embed)
  };

  if (comando === 'pings') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Todos os Everyones e Leitores que são dados são por obras que estão há muito tempo sem ser postadas ou obras **NOVAS**, caso não queira receber a notificação mute o canal ou o servidor.")

    message.channel.send(embed)
  };

  if (comando === 'tags') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Reinicie o discord e vá até o <#553398333704634368> novamente, caso a tag ainda não esteja lá chame um adm.")

    message.channel.send(embed)
  };

  if (comando === 'notificaçoes') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Caso não esteja recebendo notificações de suas obras, verifique se o servidor/chat não está mutado ou se você está sem a tag.")

    message.channel.send(embed)

  };

  if (comando === 'disqus') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Provavelmente o disqus te considerou como spam, nós como uma scan não podemos fazer nada, não controlamos o disqus.")


    message.channel.send(embed)
  };

  if (comando === 'padrim') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("O modo para nos apoiar é através deste link:\n <https://neoxscans.net/como-ajudar-o-site/>")

    message.channel.send(embed)

  };

  if (comando === 'padrimtag') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Fale com o idoso <@240932245383282689> || Natatsu#2149")

    message.channel.send(embed)

  }

  if (comando === 'reporterros') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Para reportar erros dos capítulos temos o <#770601075534987264>, leia os fixados e mande o erro lá.")

    message.channel.send(embed)
  }

  if (comando === 'reportpgs') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setDescription("Neste caso, tire um print das pgs, mande no <#833914908210495539> e marque  <@163458629612208128> & <@748589622048587857>") 

    message.channel.send(embed)
  }

  if (comando === 'obrashiato') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Obras em Hiato')
      .setDescription(`**OBS:** Séries com datas previstas podem ainda sofrer atrasos por conta do estúdio oficial. \n\n **Dear My Teacher** - Tempo indeterminado. \n **Divine Emperor** - Tempo indeterminado. \n**Hunter Age** - Tempo indeterminado. \n**Love Advice** - Tempo indeterminado. \n **MEMORIZE** - 05/06/2021 \n **Rental Girls** - Tempo indeterminado.\n **SSS-Class Revival Hunter** - Previsão de retorno em 2/3 meses. \n**The Descent of the Demonic Master** - Previsão de retorno em 2/3 meses. \n**The Tutorial is too Hard** - Tempo Indeterminado. \n**unOrdinary** - Previsão de retorno para o fim do ano.\n\n**OBS:** *Lembrando, hiato é uma pausa dada pela editora entre uma temporada e outra.*
      **OBS:** *As obras que possuem mês para voltar, é apenas o **MÊS**, **NÃO SABEMOS**  o dia exato.*`)

    message.channel.send(embed)
  }


  if(comando === 'staff') {
    let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Atuais **Monarcas, Adms & Mods**')
      .setThumbnail('https://media.discordapp.net/attachments/748618439869988935/805929885964697630/5dd00521ab330b8d32b74629ca60799c.png?width=473&height=473')
      .addField("Monarcas", "\n- Gatts \n- Kyoya \n- Natatsu \n- Sharrim")
      .addField("Administradores", "\n- Atayde \n- Bananinha \n- Emer \n- Rheagor \n- Sir.Sarah \n- Slayer \n- Snicher \n- Tat \n- Toretto")
      .addField("Moderadores", "\n- FAQBOT \n- Iglu \n- Norket \n- Quincoces \n- Semper Fi Cass \n- Tsuki \n- V11 \n- Vitorregis \n- Yuri Ha Zahard")
     
    
    message.channel.send(embed)
  }

 if (comando === 'obraemdia') {
      let pages = [" \n\n***OBRAS SEMANAIS*** \n1 - A Newbie Who's Nobody's Fool \n2 - Chronicles of the Heavenly Demon \n3 - Covenant \n4 - Dungeons & Artifacts \n5 - Doupo Cangqiong \n6 - Everything is Fine \n7 - FFF-Class Trashero \n8 - Give Me a Break, Your Majesty! \n9 - God of BlackField \n10 - Hero Killer \n11 - I Am The Sorcerer King\n12 - I'm a Martial Art Villainess, but I'm the Strongest \n13 - I’m the Stepmother, but my Daughter is too Cute \n14 - Max Level Returner\n15 - MookHyang-The Origin\n16 - Learning the Hard Way \n17 - Omniscient Reader's Viewpoint\n18 - Overgeared \n19 - Precious Daughter of the Greatest Villain in a Martial Arts Novel \n20 - Return of the Frozen Player \n21 - Second Life Ranker \n22 - Slave B\n23 - SSS-Class Suicide Hunter\n24 - Survival Story of a Sword King in a Fantasy World\n25 - Tale of Scribe Who Retires to the Countryside", "\n26 - The Blade of Evolution \n27 - The Constellation that Returned from Hell \n28 - The Descent of the Demonic Master\n29 - The God of Highschool\n30 - The Great Mage Returns After 4000 Years\n31 - The Legendary Mechanic \n32 - The MAX Leveled Hero Will Return! \n33 - The Player That Can't Level Up\n34 - The Second Coming of Gluttony\n35 - The Tutorial is Too Hard\n36 - Trash of the Count's Family \n37 - The Way to Protect the Female Lead’s Older Brother \n38 - Untouchable Lady \n39 - Updater \n40 - Villain To Kill \n41 - White Blood", "\n\n***OBRAS MENSAIS*** \n1 - Arifureta Shokugyou de Sekai Saikyou\n2 - Mato Seihei no Slave\n3 - Mieruko-Chan\n4 - The red Rager Becomes an Adventurer in Another World\n5 - #DCRL:Midnight Children"];
      let page = 1;

      let embed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('OBRAS SEMANAIS & MENSAIS')
      .setThumbnail('https://media.discordapp.net/attachments/748618439869988935/805929885964697630/5dd00521ab330b8d32b74629ca60799c.png?width=473&height=473')
      .setFooter(`Pagina ${page} / ${pages.length}`)
      .addField('------------------------------------------------------------------------------', '***OBS: São obras em dia sem data fixa de lançamento.***')
      .setDescription(pages[page-1])
    

    message.channel.send(embed).then(msg => {
      msg.react('⬅️').then(r => {
        msg.react('➡️')

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {time: 10 * 60 * 1000});
        const forwards = msg.createReactionCollector(forwardsFilter, {time: 10 * 60 * 1000});

        backwards.on('collect', r => {
          if(page === 1) {
            return page = page + pages.length; 
          } else {
          page--;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Pagina ${page} de ${pages.length}`);
          msg.edit(embed); }
        })
        forwards.on('collect', r => {
          if(page === pages.length) {
            return page = page - pages.length;
          } else {
          page++;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Pagina ${page} de ${pages.length}`);
          msg.edit(embed); }
        });

      });
    }); 
   
  }});
/////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.channel.id != '515175247624929343') return; //chat da equipe
  if (message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if (comando === 'uninhorosa') {
    let embed = new Discord.MessageEmbed()
      .setColor('#ff33cc')
      .setDescription("Fujoshi que todos amamos e odiamos ao mesmo tempo! vrumm")
      .setImage('http://lh6.ggpht.com/_wkU0aCa0Pag/S9adWR_Cn-I/AAAAAAAATfM/obYTk_bGfJ4/uno%20rosa%20%281%29_thumb.jpg?imgmax=800')

    message.channel.send(embed)
  }

  if (comando === 'kyoya') {
    let embed = new Discord.MessageEmbed().setTitle('Cadê as Camada porra?').setImage('https://media.discordapp.net/attachments/515175247624929343/767177321232072725/Hora_de_Zoar.jpg')

    message.channel.send(embed)
  }

  if (comando === 'caxoro') {
    let embed = new Discord.MessageEmbed()
      .setColor('#c0c0c0')
      .setDescription("**Caxoro no carnaval de 2017**")
      .setImage('https://i.pinimg.com/564x/30/51/af/3051aff7ee2479fd5486afad1ba7707c.jpg')

    message.channel.send(embed)

  }

  // if (comando == 'gatts') {
  //   let embed = new Discord.MessageEmbed()
  //     .setColor('RANDOM')
  //     .setDescription("**O poeta**")
  //     .setImage('https://cdn.discordapp.com/attachments/806620872013119508/811438413466959922/unknown.png')

  //   message.channel.send(embed)

  // }

});

///////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
  if (message.channel.id != '512429710270267402') return; //chat geral
  if (message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if (comando === 'banido') {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage('https://media1.tenor.com/images/62a37dd5340b195ab972fa268d79378e/tenor.gif?itemid=19429642')

    message.channel.send(embed)
  }

  if (comando === 'desbanido') {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage('https://media1.tenor.com/images/18292adc44c7ae571b83d77c459d2ca7/tenor.gif?itemid=19443137')

    message.channel.send(embed)
  }

  if (comando === 'mutado') {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage('https://media1.tenor.com/images/2f02a27700c2684f60f0fe158aff6eb3/tenor.gif?itemid=18054635')

    message.channel.send(embed)
  }

  if(comando === 'vitin') {
    message.channel.send('https://imgur.com/G49V4p4');
  }
  if(comando === 'cass') {
   let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage('https://cdn.discordapp.com/attachments/834734540668665856/849618905596035123/7ef03bc1737fdcd05cbd8f02e9b0be86.gif')

    message.channel.send(embed)
  }
  
  if(comando === 'johnny') {
    message.channel.send('https://imgur.com/XfUsRAm')
  }

});




const mySecret = process.env['TOKEN']

app.listen(process.env.PORT);
client.login(process.env.PORT)
