module.exports = ({
    name: "$alwaysExecute",
    code: `$reply[$messageID;<@$authorID>, $randomText[пошёл нахер;иди нахер;завались].;yes]
$onlyIf[$isBot[$authorID]==true;]
$onlyIf[$authorID!=$clientID;]`
    });
