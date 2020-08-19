function drawBackground() {
    ctx.clearRect(0, 0, core.width, core.height);
    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, core.width, core.height);
    //let grd = ctx.createRadialGradient(
    //    document.body.clientWidth / 2,
    //    document.body.clientHeight / 2,
    //    //document.body.clientHeight / 2,
    //    0,
    //    document.body.clientWidth / 2,
    //    document.body.clientHeight / 2,
    //    document.body.clientWidth);
    //grd.addColorStop(0, 'whitesmoke');
    //grd.addColorStop(1, '#969696');
    //ctx.fillStyle = grd;
    //ctx.fillRect(0, 0, core.width, core.height);
}