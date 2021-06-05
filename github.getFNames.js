// extract repo filenames
copy(Array.from(document.querySelectorAll('div[role="grid"] > div[role="row"] > div[role="rowheader"] > span > a')).map(function (a) {
    return a.innerText.toString().replace('.js', '');
}).join('\n'));

// find repo mismatch
document.querySelectorAll('tr').forEach(function (tr) {
    let title = tr.querySelector('td[label="Title"]');
    if (title) {
        title = title.getAttribute('value');
        if (names.includes(title)) {
            let diff = tr.querySelector('td[label="Difficulty"] > span').innerText;
            if (diff != 'Medium') {
                console.log(diff + " " + title);
            }
        }
    }
});