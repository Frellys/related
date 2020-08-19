function drawLabel_levels() {
    // text
    let vmin = Math.min(document.body.clientWidth, document.body.clientHeight) / 100;
    ctx.font = vmin * 3 + 'px monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#323232';
    let tw = ctx.measureText('xx/xx').width;
    ctx.fillText('xx/xx',
        document.body.clientWidth / 100 * 75,
        document.body.clientHeight - vmin * 3);
    // line
    let height = tw * (Math.sqrt(3) / 2);
    ctx.beginPath();
    ctx.moveTo(
        document.body.clientWidth / 100 * 75 - tw,
        document.body.clientHeight);
    ctx.lineTo(
        document.body.clientWidth / 100 * 75 - tw / 2,
        document.body.clientHeight - height);
    ctx.lineTo(
        document.body.clientWidth / 100 * 75 + tw / 2,
        document.body.clientHeight - height);
    ctx.lineTo(
        document.body.clientWidth / 100 * 75 + tw,
        document.body.clientHeight);
    ctx.strokeStyle = '#323232';
    ctx.lineWidth = vmin / 2;
    ctx.lineJoin = 'round';
    ctx.stroke();
}