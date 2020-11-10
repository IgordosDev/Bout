module.exports = ({
    name: "$alwaysExecute",
    code: `
$onlyIf[$isBot[$authorID]==true;]
$onlyIf[$authorID!=$clientID;]
<@$authorID>, $randomText[пошёл нахер;иди нахер;завались].`
    });
