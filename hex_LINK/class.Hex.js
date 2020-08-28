class Hex {
    constructor(data) {
        this.size = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 * 4;
        this.height = this.size * (Math.sqrt(3) / 2);
        this.pos = data.pos;
        this.selected = false;
    }
    draw() {
        let tx = this.selected ? core.click.x : this.pos.x;
        let ty = this.selected ? core.click.y : this.pos.y;
        ctx.beginPath();
        ctx.moveTo(tx - this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size, ty);
        ctx.lineTo(tx + this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size, this.pos.y);
        ctx.closePath();
        // hover
        if (ctx.isPointInPath(core.mouse.x, core.mouse.y)) {
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
        // stroke
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#323232';
        ctx.stroke();
        // fill
        ctx.fillStyle = this.fillStyle ? this.fillStyle : 'whitesmoke';
        ctx.fill();
    }
}