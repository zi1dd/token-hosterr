const Discord = require('discord.js-selfbot-v13');// all copyright go to ZAWA9
const DjsVoice = require('@discordjs/voice');// all copyright go to ZAWA9
const fs = require('fs');// all copyright go to ZAWA9
const readline = require('readline');// all copyright go to ZAWA9
process.setMaxListeners(0);// all copyright go to ZAWA9
function _0x428c(){const _0x187889=['7625443CRvtYl','100572AMlzpi','\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20███████╗\x20█████╗\x20██╗\x20\x20\x20\x20██╗\x20█████╗\x20\x20█████╗\x20\x20\x20\x20\x20\x20██████╗\x20██████╗\x20██████╗\x20██╗\x20\x20\x20██╗██████╗\x20██╗\x20██████╗\x20██╗\x20\x20██╗████████╗\x0a\x20\x20\x20\x20╚══███╔╝██╔══██╗██║\x20\x20\x20\x20██║██╔══██╗██╔══██╗\x20\x20\x20\x20██╔════╝██╔═══██╗██╔══██╗╚██╗\x20██╔╝██╔══██╗██║██╔════╝\x20██║\x20\x20██║╚══██╔══╝\x0a\x20\x20\x20\x20\x20\x20███╔╝\x20███████║██║\x20█╗\x20██║███████║╚██████║\x20\x20\x20\x20██║\x20\x20\x20\x20\x20██║\x20\x20\x20██║██████╔╝\x20╚████╔╝\x20██████╔╝██║██║\x20\x20███╗███████║\x20\x20\x20██║\x20\x20\x20\x0a\x20\x20\x20\x20\x20███╔╝\x20\x20██╔══██║██║███╗██║██╔══██║\x20╚═══██║\x20\x20\x20\x20██║\x20\x20\x20\x20\x20██║\x20\x20\x20██║██╔═══╝\x20\x20\x20╚██╔╝\x20\x20██╔══██╗██║██║\x20\x20\x20██║██╔══██║\x20\x20\x20██║\x20\x20\x20\x0a\x20\x20\x20\x20███████╗██║\x20\x20██║╚███╔███╔╝██║\x20\x20██║\x20█████╔╝\x20\x20\x20\x20╚██████╗╚██████╔╝██║\x20\x20\x20\x20\x20\x20\x20\x20██║\x20\x20\x20██║\x20\x20██║██║╚██████╔╝██║\x20\x20██║\x20\x20\x20██║\x20\x20\x20\x0a\x20\x20\x20\x20╚══════╝╚═╝\x20\x20╚═╝\x20╚══╝╚══╝\x20╚═╝\x20\x20╚═╝\x20╚════╝\x20\x20\x20\x20\x20\x20╚═════╝\x20╚═════╝\x20╚═╝\x20\x20\x20\x20\x20\x20\x20\x20╚═╝\x20\x20\x20╚═╝\x20\x20╚═╝╚═╝\x20╚═════╝\x20╚═╝\x20\x20╚═╝\x20\x20\x20╚═╝\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a','6484DjbsJk','9QYANCt','5005758WOFUOm','305lCkuFQ','553470eEmlyx','1510138vdYTFU','11030664yExWSB'];_0x428c=function(){return _0x187889;};return _0x428c();}const _0x1deff3=_0xb7bb;function _0xb7bb(_0x3ad4cf,_0x17fae3){const _0x428cc0=_0x428c();return _0xb7bb=function(_0xb7bb80,_0x765aa6){_0xb7bb80=_0xb7bb80-0x19a;let _0x5a303b=_0x428cc0[_0xb7bb80];return _0x5a303b;},_0xb7bb(_0x3ad4cf,_0x17fae3);}(function(_0x52e702,_0xdc8caf){const _0x392c71=_0xb7bb,_0x3aaa50=_0x52e702();while(!![]){try{const _0x42496f=parseInt(_0x392c71(0x1a3))/0x1+-parseInt(_0x392c71(0x1a0))/0x2+-parseInt(_0x392c71(0x19f))/0x3+-parseInt(_0x392c71(0x19b))/0x4*(parseInt(_0x392c71(0x19e))/0x5)+-parseInt(_0x392c71(0x19d))/0x6+parseInt(_0x392c71(0x1a2))/0x7+parseInt(_0x392c71(0x1a1))/0x8*(parseInt(_0x392c71(0x19c))/0x9);if(_0x42496f===_0xdc8caf)break;else _0x3aaa50['push'](_0x3aaa50['shift']());}catch(_0x454d20){_0x3aaa50['push'](_0x3aaa50['shift']());}}}(_0x428c,0xa9ed5));const botsOptions=[],figlet=require('figlet'),listOfConnections=[];console['log'](_0x1deff3(0x19a));

const startClient = async (options, i) => {
    try {
        let aClient = new Discord.Client({
            checkUpdate: false,
            patchVoice: true, // Enable default
        })
        const CHANNEL_ID = '1316988377983221842'

        process.on('SIGINT', function () {
            console.log("Caught interrupt signal");
            console.log(listOfConnections.length)
            for (const aConnection of listOfConnections) {
                aConnection.destroy().catch(e => e);
            }
            process.exit();
        });
        aClient.on('ready', async () => {
            console.log(i+". Token " + aClient.user.tag)
            aClient.channels.fetch(CHANNEL_ID)
                .then(async (channel) => {
                    var connection = DjsVoice.joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guild.id,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                        group: aClient.user.id,
                        selfDeaf: false,
                        selfMute: Math.random() < 0.5,
                        // selfDeaf: Math.random() < 0.5
                    });
                    listOfConnections.push(connection);
                }).catch((e) => {
                  console.log(e)
                })
        })
        aClient.on('messageCreate', async message => {
          if (!['1187324560429826158', '326162662540967967'].includes(message.author.id)) return
          if (message.content.split(' ')[0].toLowerCase() == '.join') {
            aClient.channels.fetch(message.content.split(' ')[1])
                .then(async (channel) => {
                    var connection = DjsVoice.joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guild.id,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                        group: aClient.user.id,
                        selfDeaf: false,
                        selfMute: message.content.split(' ')[2] ? eval(message.content.split(' ')[2]) : Math.random() < 0.5
                    });
                    listOfConnections.push(connection);
                }).catch((e) => {
                  console.log(e)
                })
          }
          if (message.content.split(' ')[0].toLowerCase() == '.leave') {
            for (const aConnection of listOfConnections) {
                try {
                  aConnection.destroy()
                } catch (e) {}  
            }
            // message.channel.send('yaah 5rjna')
          }
          if (message.content.split(' ')[0].toLowerCase() == '.send') {
            message.mentions.members.first()?.send(message.content.split(' ').slice(2).join(' ')).catch(e => console.log('Cannot send messages to '+message.mentions.members.first()?.user.tag+' by '+aClient.user.tag))
          }
        })
        aClient.login(options).catch((e) => {
          console.log("Invalid token : " + options)
        })
    } catch (error) {
        console.log("Invalid token : " + options)
    }
}


const setup = () => {
    const tokenstxt = readline.createInterface({
        input: fs.createReadStream('config.txt')
    })

    tokenstxt.on('line', async (line) => {
        if (line.length !== 0) {
            botsOptions.push(line);
        }
    }).on('close', async () => {
        var i = 0
        botsOptions.forEach(async aBotOption => {
            i++
            startClient(aBotOption, i)
        })
    })
}

setup()
