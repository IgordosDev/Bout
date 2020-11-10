module.exports = ({
    name: "djsEval",
    code: `
    $author[discord.js Evaluate]
$onlyForIDs[$getVar[Owners];Это только для разрабов]
$title[Успешно. **$ping** ms.]
$description[$djsEval[$message]]
$footer[Вызвано $username]`
    });
