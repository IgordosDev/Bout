module.exports = ({
    name: "eval",
    code: `
    $author[DBD.js Evaluate]
$onlyForIDs[$getVar[Owners];Это только для разрабов]
$title[Успешно. **$ping** ms.
$description[$eval[$message]]
$footerIcon[$authorAvatar]
$footer[Вызвано $username]`
    });
