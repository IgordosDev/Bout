const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: process.env.BOT_TOKEN, 
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
console.log(`Bot became ready. Logged in as ${Bot.user.tag}.`);
		Bot.user.setActivity('посылании нахер', { type: 'COMPETING' });
	}
}
