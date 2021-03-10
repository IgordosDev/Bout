module.exports = ({
    name: "$alwaysExecute",
    code: `$reply[$messageID;<@!$authorID>, $randomText[пошёл нахер;иди нахер;завались;заткнись;пожалуйста, закрой рот;рот закрой;иди нахуй;пошёл нахуй;заткни ебало;иди нахуй, програмная сука].;no]
$onlyIf[$isBot[$authorID]==true;]
$onlyIf[$authorID!=$clientID;]`
    });
