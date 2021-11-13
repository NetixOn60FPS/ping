const Discord = require('discord.js');
const botConfig = require("./botconfig.json");
        const client = new Discord.Client();
        client.login(botConfig.token);
client.on("ready", async () => {

    console.log(`${client.user.username} is ready for action.`)

});
        client.on('message', msg => {
            if (msg.author === client.user) return;
            if (msg.isMentioned(client.user)) {
                if ([""].includes(msg.member.id)) {
                    return;
                }
                if (["845769088844169226", "887403747238637658", "727923609288441948", "875029397927763978", "395642395129020420", "886726398717329428", "872361556451659796", "525781097544679432", "804719733995864094", "908869922300518400"].includes(msg.guild.id)) {
                    msg.reply("**please don't ping me.**");
                }
            }
        });
 
