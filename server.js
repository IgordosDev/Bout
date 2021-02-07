const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "bout!" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
bot.variables({
    Owner: "Your ID"
  });
bot.status({
  text: "посылании нахер",
  type: "COMPETING",
  time: 12
})
bot.status({
  text: "bout!info",
  type: "PLAYING",
  time: 5
})
bot.readyCommand({
channel: "Любой канал для уведомления, если аватар не поменялся",
code: `$setBotAvatar[https://thispersondoesnotexist.com/image]`
})
