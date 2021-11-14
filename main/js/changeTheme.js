/* Created by CDZ-Answers 2021 */

function changeStylesheetBtn(chboxElementId) {
    var stylesheet;
    var iconColor;
    var chbox = document.getElementById(chboxElementId);

    if (chbox.checked) {
        stylesheet = 'Light';
        iconColor = 'dark';
    } else {
        stylesheet = 'Dark';
        iconColor = 'light';
    }

    document.getElementById('moonImg').setAttribute('src', `https://cdz-answers.github.io/main/images/${iconColor}MoonStyle.png`);
    document.getElementById('sunImg').setAttribute('src', `https://cdz-answers.github.io/main/images/${iconColor}SunStyle.png`);

    document.getElementById('mainStylesheet').setAttribute('href', `https://cdz-answers.github.io/main/css/main${stylesheet}.css`);
    try {
        document.getElementById('cdzStylesheet').setAttribute('href', `https://cdz-answers.github.io/cdz/css/cdz${stylesheet}.css`);
    } catch {}

    document.cookie = `stylesheet=${stylesheet};path=/`;
}
