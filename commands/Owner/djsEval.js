module.exports = ({
    name: "eval",
    code: `
    $author[djs Evaluate]
$onlyForIDs[$getVar[Owners];Это только для разрабов]
$title[Успешно. **$ping** ms.]
$description[$djsEval[$message]]
$footer[Вызвано $username]`
    });
