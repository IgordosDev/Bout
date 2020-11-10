module.exports = ({
    name: "eval",
    code: `
    $author[DBD.js Evaluate]
$onlyForIDs[$getVar[Owners];Это только для разрабов]
$title[Успешно. **$ping** ms.]
$description[$eval[$message]]
$footer[Вызвано $username]`
    });
