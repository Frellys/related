function drawBackground() {
    // base
    ctx.clearRect(0, 0, core.width, core.height);
    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, core.width, core.height);
    // particles
    if (!window.bgParticles) {
        window.bgParticles = [];
        window.bgParticles.push({
            figure: 'square',
            fade: 'in',
            x: Math.floor(Math.random() * document.body.clientWidth),
            y: Math.floor(Math.random() * document.body.clientHeight),
            size: (Math.floor(Math.random() * 3) + 1) * (Math.min(document.body.clientWidth, document.body.clientHeight) / 100),
            minAlpha: 0.0,
            maxAlpha: 0.25,
            alphaShift: 0.1,
            color: 'rgba(50, 50, 50, curAlpha)'
        });
    }
    // draw particles
    window.bgParticles.forEach(function (el, idx) {
        if (el.figure == 'square') {

            ctx.fillStyle = el.color.replace('curAlpha', el.minAlpha + el.alphaShift);
            ctx.fillRect(
                el.x,
                el.y,
                el.size,
                el.size);
        }
    });
}