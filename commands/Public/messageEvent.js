module.exports = ({
    name: "$alwaysExecute",
    code: `$reply[$messageID;<@$authorID>, $randomText[пошёл нахер;иди нахер;завались;заткнись;пожалуйста, закрой рот;рот закрой;ещё один твой, никому не нужный, ответ].;no]
$onlyIf[$isBot[$authorID]==true;]
$onlyIf[$authorID!=$clientID;]`
    });
