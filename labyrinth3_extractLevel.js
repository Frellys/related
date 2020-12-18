let img = document.querySelector('img');
let cnv = document.createElement('canvas');
document.body.appendChild(cnv);
cnv.width = img.width;
cnv.height = img.height;
let ctx = cnv.getContext('2d');
ctx.drawImage(img, 0, 0, img.width, img.height);
let field = [];
for (let r = 1; r < img.width - 1; r += 16) {
    let row = [];
    for (let c = 1; c < img.width - 1; c += 16) {
        let cur = {
            't': (ctx.getImageData((1 * c) + 6, r, 1, 1).data[1] < 155),
            'r': (ctx.getImageData(c + 16, (1 * r) + 6, 1, 1).data[1] < 155),
            'b': (ctx.getImageData((1 * c) + 6, r + 16, 1, 1).data[1] < 155),
            'l': (ctx.getImageData(c, (1 * r) + 6, 1, 1).data[1] < 155)
        };
        if (r == 1 && !cur['t']) cur['t'] = true;
        if (r == (img.width - 16) || r == (img.width - 17)) cur['b'] = true;
        if (c == 1 && !cur['l']) cur['l'] = true;
        if (c == (img.width - 16) || c == (img.width - 17)) cur['r'] = true;
        let char = '';
        if (!cur['t'] && !cur['r'] && !cur['b'] && !cur['l']) char = '0';
        if (cur['t'] && !cur['r'] && !cur['b'] && !cur['l']) char = '1';
        if (!cur['t'] && cur['r'] && !cur['b'] && !cur['l']) char = '2';
        if (!cur['t'] && !cur['r'] && cur['b'] && !cur['l']) char = '3';
        if (!cur['t'] && !cur['r'] && !cur['b'] && cur['l']) char = '4';
        if (cur['t'] && cur['r'] && !cur['b'] && !cur['l']) char = '5';
        if (!cur['t'] && cur['r'] && cur['b'] && !cur['l']) char = '6';
        if (!cur['t'] && !cur['r'] && cur['b'] && cur['l']) char = '7';
        if (cur['t'] && !cur['r'] && !cur['b'] && cur['l']) char = '8';
        if (cur['t'] && cur['r'] && !cur['b'] && cur['l']) char = '9';
        if (cur['t'] && cur['r'] && cur['b'] && !cur['l']) char = 'A';
        if (!cur['t'] && cur['r'] && cur['b'] && cur['l']) char = 'B';
        if (cur['t'] && !cur['r'] && cur['b'] && cur['l']) char = 'C';
        if (!cur['t'] && cur['r'] && !cur['b'] && cur['l']) char = 'D';
        if (cur['t'] && !cur['r'] && cur['b'] && !cur['l']) char = 'E';
        row.push(char);
    }
    field.push(row);
}
console.log(field);
copy(JSON.stringify(field).replace(/"/g, "'"));