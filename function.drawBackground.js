function drawBackground() {
    // base
    ctx.clearRect(0, 0, core.width, core.height);
    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, core.width, core.height);
    // particles
    if (!window.bgParticles) {
        window.bgParticles = [];
        for (let a = 0.001; a < 0.0041; a += 0.0001) {
            window.bgParticles.push({
                figure: 'square',
                fadeIn: true,
                x: Math.floor(Math.random() * document.body.clientWidth),
                y: Math.floor(Math.random() * document.body.clientHeight),
                size: (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100),
                curAlpha: 0.0,
                maxAlpha: 0.25,
                alphaShift: a,
                color: 'rgba(50, 50, 50, curAlpha)'
            });
            window.bgParticles.push({
                figure: 'square',
                fadeIn: true,
                x: Math.floor(Math.random() * document.body.clientWidth),
                y: Math.floor(Math.random() * document.body.clientHeight),
                size: (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100),
                curAlpha: 0.0,
                maxAlpha: 0.25,
                alphaShift: a,
                color: 'rgba(50, 50, 50, curAlpha)'
            });
            window.bgParticles.push({
                figure: 'square',
                fadeIn: true,
                x: Math.floor(Math.random() * document.body.clientWidth),
                y: Math.floor(Math.random() * document.body.clientHeight),
                size: (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100),
                curAlpha: 0.0,
                maxAlpha: 0.25,
                alphaShift: a,
                color: 'rgba(50, 50, 50, curAlpha)'
            });
            window.bgParticles.push({
                figure: 'square',
                fadeIn: true,
                x: Math.floor(Math.random() * document.body.clientWidth),
                y: Math.floor(Math.random() * document.body.clientHeight),
                size: (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100),
                curAlpha: 0.0,
                maxAlpha: 0.25,
                alphaShift: a,
                color: 'rgba(50, 50, 50, curAlpha)'
            });
        }
    }
    // draw particles
    window.bgParticles.forEach(function (el, idx) {
        if (el.fadeIn) {
            el.curAlpha += el.alphaShift;
            if (el.curAlpha >= el.maxAlpha) el.fadeIn = false;
        }
        else {
            el.curAlpha -= el.alphaShift;
            if (el.curAlpha <= 0) {
                el.fadeIn = true;
                el.x = Math.floor(Math.random() * document.body.clientWidth);
                el.y = Math.floor(Math.random() * document.body.clientHeight);
                el.size = (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100);
            }
        }
        if (el.figure == 'square') {
            ctx.fillStyle = el.color.replace('curAlpha', el.curAlpha);
            ctx.fillRect(
                el.x,
                el.y,
                el.size,
                el.size);
        }
    });
}