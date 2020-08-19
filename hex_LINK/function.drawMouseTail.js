function drawMouseTail() {
    if (!window.mouseTail) {
        window.mouseTail = [];
        window.addEventListener('mousemove', function (e) {
            if (window.mouseTail.length == 5) {
                window.mouseTail.shift();
            }
            window.mouseTail.push({
                x: e.x,
                y: e.y,
                ts: new Date().getTime()
            });
        }, false);
    }
    // draw
    if (window.mouseTail.length != 0) {
        ctx.moveTo(
            window.mouseTail[0].x,
            window.mouseTail[0].y);
        window.mouseTail.forEach(function (el, idx) {
            // remove old
            if (new Date().getTime() - el.ts > 25) {
                window.mouseTail.shift();
            }
            // create line
            if (idx != 0) {
                ctx.lineTo(el.x, el.y);
            }
        });
        ctx.strokeStyle = '#323232';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}