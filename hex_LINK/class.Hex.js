class Hex {
    constructor(data) {
        this.size = data.size;
        this.height = this.size * (Math.sqrt(3) / 2);
        this.pos = data.pos;
        this.selected = false;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.pos.x - this.size / 2, this.pos.y - this.height);
        ctx.lineTo(this.pos.x + this.size / 2, this.pos.y - this.height);
        ctx.lineTo(this.pos.x + this.size, this.pos.y);
        ctx.lineTo(this.pos.x + this.size / 2, this.pos.y + this.height);
        ctx.lineTo(this.pos.x - this.size / 2, this.pos.y + this.height);
        ctx.lineTo(this.pos.x - this.size, this.pos.y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#323232';
        ctx.stroke();
    }
}