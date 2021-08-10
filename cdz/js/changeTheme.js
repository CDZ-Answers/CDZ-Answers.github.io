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

    document.cookie = `stylesheet=${stylesheet};path=/`;

    document.getElementById('mainStylesheet').setAttribute('href', `/static/css/main${stylesheet}.css`);
    document.getElementById('cdzStylesheet').setAttribute('href', `/static/cdz/css/cdz${stylesheet}.css`);

    document.getElementById('sunImg').setAttribute('src', `/static/images/${iconColor}SunStyle.png`);
    document.getElementById('moonImg').setAttribute('src', `/static/images/${iconColor}MoonStyle.png`);
}
