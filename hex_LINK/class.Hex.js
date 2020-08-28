class Hex {
    constructor(data) {
        this.size = Math.min(document.body.clientWidth, document.body.clientHeight) / 100 * 4;
        this.height = this.size * (Math.sqrt(3) / 2);
        this.pos = data.pos;
        this.hover = false;
        this.selected = false;
    }
    draw() {
        let tx = this.pos.x;
        let ty = this.pos.y;
        ctx.beginPath();
        ctx.moveTo(tx - this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size / 2, ty - this.height);
        ctx.lineTo(tx + this.size, ty);
        ctx.lineTo(tx + this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size / 2, ty + this.height);
        ctx.lineTo(tx - this.size, this.pos.y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#323232';
        ctx.stroke();
    }
}