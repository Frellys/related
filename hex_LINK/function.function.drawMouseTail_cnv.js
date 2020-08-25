// old
//function drawMouseTail() {
//    if (!window.mouseTail) {
//        window.mouseTail = [];
//        window.addEventListener('mousemove', function (e) {
//            if (window.mouseTail.length == 5) {
//                window.mouseTail.shift();
//            }
//            window.mouseTail.push({
//                x: e.x,
//                y: e.y,
//                ts: new Date().getTime()
//            });
//        }, false);
//    }
//    // draw
//    if (window.mouseTail.length != 0) {
//        ctx.moveTo(
//            window.mouseTail[0].x,
//            window.mouseTail[0].y);
//        window.mouseTail.forEach(function (el, idx) {
//            // remove old
//            if (new Date().getTime() - el.ts > 25) {
//                window.mouseTail.shift();
//            }
//            // create line
//            if (idx != 0) {
//                ctx.lineTo(el.x, el.y);
//            }
//        });
//        ctx.strokeStyle = '#323232';
//        ctx.lineWidth = 2;
//        ctx.stroke();
//    }
//}
// new
function drawMouseTail() {
    if (!window.mouseTail) {
        window.mouseTail = [];
        window.mouseTailmaxLen = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 * 10;
        window.mouseTailcurLen = 0;
        window.addEventListener('mousemove', function (e) {
            window.mouseTail.unshift({
                x: e.x,
                y: e.y,
                ts: new Date().getTime()
            });
        }, false);
    }
    // calc
    if (window.mouseTail.length != 0) {
        // remove old
        window.mouseTail.forEach(function (el) {
            if (new Date().getTime() - el.ts > 25) {
                window.mouseTail.pop();
            }
        });
        // reset curent length
        window.mouseTailcurLen = 0;
        // check for max length
        window.mouseTail.forEach(function (el, idx, arr) {
            if (idx != 0) {
                window.mouseTailcurLen += Math.sqrt(Math.pow(el.x - arr[idx - 1].x, 2) + Math.pow(el.y - arr[idx - 1].y, 2));
            }
        });
        // debug
        //console.log('len: ' + window.mouseTailcurLen);
        //console.log('max: ' + window.mouseTailmaxLen);
        //console.log('arr: ' + window.mouseTail.length);
    }
    // draw
    if (window.mouseTail.length != 0) {
        ctx.moveTo(
            window.mouseTail[0].x,
            window.mouseTail[0].y);
        window.mouseTail.forEach(function (el, idx) {
            if (idx != 0) {
                ctx.lineTo(el.x, el.y);
            }
        });
        ctx.strokeStyle = '#323232';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
