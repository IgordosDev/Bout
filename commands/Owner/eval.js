module.exports = ({
    name: "eval",
    code: `
    $author[DBD.js Evaluate]
$onlyForIDs[$getVar[Owners];Это только для разрабов]
$title[Успешно. **$ping** ms.]
$addField[Ввод;$message;no]
$addField[Вывод;$eval[$message];no]
$footer[Вызвано $username]`
    });
