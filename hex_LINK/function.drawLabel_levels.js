function drawLabel_levels() {
    // text
    let vmin = Math.min(document.body.clientWidth, document.body.clientHeight) / 100;
    ctx.font = vmin * 3 + 'px monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#323232';
    let tw = ctx.measureText('xx/xx');
    ctx.fillText('xx/xx',
        document.body.clientWidth / 100 * 75,
        document.body.clientHeight - vmin * 3);
    // line
    ctx.beginPath();
    ctx.moveTo(
        document.body.clientWidth / 100 * 75 - tw,
        document.body.clientHeight);
}