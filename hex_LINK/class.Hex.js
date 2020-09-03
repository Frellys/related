class Hex {
    constructor(data) {
        this.size = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 * 4;
        this.height = this.size * (Math.sqrt(3) / 2);
        this.id = data.id
        this.pos = data.pos;
        this.offset = {
            x: undefined,
            y: undefined
        };
        this.selected = false;
    }
    draw() {
        // path
        let tx = this.selected ? core.mouse.x - this.offset.x : this.pos.x;
        let ty = this.selected ? core.mouse.y - this.offset.y : this.pos.y;
        ctx.beginPath();
        ctx.moveTo(tx - this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size, ty);
        ctx.lineTo(tx + this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size, ty);
        ctx.closePath();
        // select
        if (core.mouse.pressed && ctx.isPointInPath(core.mouse.pressed.x, core.mouse.pressed.y)) {
            core.mouse.pressed = false;
            core.selected = this.id;
            this.selected = true;
            this.offset = {
                x: core.mouse.x - this.pos.x,
                y: core.mouse.y - this.pos.y
            };
        }
        // hover
        if (ctx.isPointInPath(core.mouse.x, core.mouse.y)) {
            if (core.selected) {
                if (this.selected) {
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 2;
                    ctx.shadowColor = '#323232';
                }
                else {
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = 'transparent';
                }
            }
            else {
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 2;
                ctx.shadowColor = '#323232';
            }
        }
        else {
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';
        }
        // stroke
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#323232';
        ctx.stroke();
        // fill
        ctx.fillStyle = this.fillStyle ? this.fillStyle : 'whitesmoke';
        ctx.fill();
    }
}