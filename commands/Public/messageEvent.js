module.exports = ({
    name: "$alwaysExecute",
    code: `
$nomention
    
$onlyIf[$authorID!=$clientID;]
<@$authorID>, $randomText[пошёл нахер;иди нахер;завались].`
    });
