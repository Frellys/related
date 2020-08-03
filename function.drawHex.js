// ctx - canvas.getContext('2d');
// tx - tile pos x
// ty - tile pos y
// ts - tile side size
// th - ts * (Math.sqrt(3) / 2)
function drawHex(tx, ty, ts, th) {
    ctx.beginPath();
    ctx.moveTo(tx - ts / 2, ty - th);
    ctx.lineTo(tx + ts / 2, ty - th);
    ctx.lineTo(tx + ts, ty);
    ctx.lineTo(tx + ts / 2, ty + th);
    ctx.lineTo(tx - ts / 2, ty + th);
    ctx.lineTo(tx - ts, ty);
    ctx.closePath();
    ctx.strokeStyle = '#323232';
    ctx.lineWidth = 1;
    ctx.stroke();
}