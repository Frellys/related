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
    // hover
    if (ctx.isPointInPath(core.mouse.x, core.mouse.y)) {
        // paint
        ctx.fillStyle = '#323232';
        ctx.fill();
        ctx.strokeStyle = '#323232';
        ctx.lineWidth = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 / 2;
        ctx.lineJoin = 'round';
        ctx.stroke();
        // draw text
        ctx.font = size / 2 + 'px monospace';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'whitesmoke';
        ctx.fillText('<',
            Math.min(document.body.clientWidth, document.body.clientHeight) / 100 + size / 4,
            Math.min(document.body.clientWidth, document.body.clientHeight) / 100 + size / 4);
    }
    else {
        // paint
        ctx.fillStyle = 'rgba(50, 50, 50, 0.25)';
        ctx.fill();
        ctx.strokeStyle = '#323232';
        ctx.lineWidth = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 / 2;
        ctx.lineJoin = 'round';
        ctx.stroke();
        // draw text
        ctx.font = size / 2 + 'px monospace';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#323232';
        ctx.fillText('<',
            Math.min(document.body.clientWidth, document.body.clientHeight) / 100 + size / 4,
            Math.min(document.body.clientWidth, document.body.clientHeight) / 100 + size / 4);
    }
    // update
    window.backBtnRt += 0.25;
}