copy(Array.from(document.querySelectorAll('div[role="grid"] > div[role="row"] > div[role="rowheader"] > span > a')).map(function (a) {
    return a.innerText.toString().replace('.js', '');
}).join('\n'));