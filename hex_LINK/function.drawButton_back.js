function drawButton_back() {
    // vars
    let fx = 0;
    let fy = 0;
    let rt;
    if (!window.backBtnRt) {
        rt = 0;
        window.backBtnRt = 0;
    }
    else {
        rt = window.backBtnRt;
    }
    let size = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 * 15;
    // style
    let strokeStyle = '#323232';
    let fillStyle = 'rgba(50, 50, 50, 0.25)';
    let lineWidth = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 / 2;
    // begin path
    ctx.beginPath();
    // top-right
    ctx.moveTo(
        fx + parseFloat(Math.sin((30 + rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy - parseFloat(Math.cos((30 + rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // right
    ctx.lineTo(
        fx + parseFloat(Math.sin((90 + rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy + parseFloat(Math.cos((90 - rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // bottom-right
    ctx.lineTo(
        fx + parseFloat(Math.sin((30 - rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy + parseFloat(Math.cos((30 - rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // bottom-left
    ctx.lineTo(
        fx + parseFloat(Math.sin((-30 - rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy + parseFloat(Math.cos((-30 - rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // left
    ctx.lineTo(
        fx + parseFloat(Math.sin((-90 + rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy + parseFloat(Math.cos((-90 - rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // top-left
    ctx.lineTo(
        fx + parseFloat(Math.sin((-30 + rt) * (Math.PI / 180)).toFixed(3)) * size,
        fy - parseFloat(Math.cos((-30 + rt) * (Math.PI / 180)).toFixed(3)) * size
    );
    // close path
    ctx.closePath();
    // paint
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.stroke();
    // update
    window.backBtnRt += 0.25;
    //window.backBtnRt += 1000 / core.fps / 40;
}