const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "bout!" 
})
 
bot.onMessage()
 
bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
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
