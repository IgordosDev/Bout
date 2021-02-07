module.exports = ({
    name: "info",
    code: `
    $title[бот который посылает нахер других ботов]
$description[бот придуман [Робертом Растроповым\\](https://vk.com/tailt99) и реализован $userTag[694849711437250581].]
$addField[техническая инфа;ОС — linux
Задержка — $botPing(websocket — $ping)
Аптайм — $uptime
RAM — $ram
CPU — $cpu;yes]
$addField[инфа о боте;всего серверов — $serverCount
всего ботов — $sub[$membersCount[all;yes];$membersCount[all;no]](людей - $membersCount[all;no])
[GitHub//](https://github.com/RinaryYT/Bout)
[пригласи меня на свои сервера//](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=68608);yes]`});
