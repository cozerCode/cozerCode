const Discord = require("discord.js");
const Client = new Discord.Client();

const prefix = "!"; 

Client.on('ready', ()=>{
    console.log("ass");
    Client.user.setPresence({activity: {name: "under your bed"}});
})

Client.on('message', (message)=>{
    if (!message.content.startsWith(prefix)) return;

    if(message.content === (prefix + "lol")){
        let lols = ["lool", "shut up", "wtf", "holy shit", "oh my god", "ricard", "mokey??"]
        message.channel.send(`${lols[Math.floor(Math.random() * lols.length)]}`);
    }

    if(message.content === (prefix + "hammer")){
        message.channel.send("bummer");
    }

    if(message.content === (prefix + "newname")){
        let newNames = ["cozer", "owner", "party boy", "shitty guy", "pink guy", "retard", "bad boy"]
        message.channel.send(`${newNames[Math.floor(Math.random() * newNames.length)]} is your new name!!!`)
    }

    if(message.content.startsWith(prefix + "kill")){
        let victim = message.mentions.users.first();
        if (!victim) message.reply("mention the victim first")
        else{
            message.channel.send(`${victim} died lol`)
        }
    }

    if(message.content.startsWith(prefix + "kick")){
        if(message.member.hasPermission("KICK_MEMBERS")){
            let member = message.mentions.members.first();
            if(!member){
                message.channel.send("please mention the member to kick")
            }
            else{
                member.kick().then(mem =>{
                    const embed = new Discord.MessageEmbed()
                        .setTitle('knock out')
                        .setDescription(`see ya 'round ${mem.user.username}!`)
                        .setColor('RANDOM')
                        .setFooter('hommie');
                    message.channel.send(embed);
                })
            }
        }
        else{
            message.channel.send("YOU DON'T HAVE THE PERMISSION TO KICK THE MEMBERS")
        }
    }
    if(message.content.startsWith(prefix + "ban")){
        if(message.member.hasPermission("BAN_MEMBERS")){
            let member = message.mentions.members.first();
            if(!member){
                message.channel.send("please mention the member to ban")
            }
            else{
                member.kick().then(mem =>{
                    const embed = new Discord.MessageEmbed()
                        .setTitle('knock out 🔨')
                        .setDescription(`see ya later hommie ${mem.user.username}!`)
                        .setColor('RANDOM')
                        .setFooter('hommie');
                    message.channel.send(embed);
                })
            }
        }
        else{
            message.channel.send("YOU DON'T HAVE THE PERMISSION TO KICK THE MEMBERS")
        }
    }
})


Client.login("NzgxODkwMjE2MjU1NTUzNTM2.X8EOAg.3jxhZmNymHMNCKB6cZ9VX-HXFac");