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
