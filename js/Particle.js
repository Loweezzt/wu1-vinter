class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.dy = (1 + Math.random() * 10) * speed / 3;
    this.dx = (-5 + Math.random() * 10) * speed / 2;
    this.color = `rgba(${color[1]}, ${color[2]}, ${color[2]}, ${Math.random()})`;
    this.size = 4 + Math.floor(Math.random(10) * 4);
    this.toDelete = false;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, pi2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.y += this.dy;
    this.x += this.dx;
    if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
      this.toDelete = true;
    }
  }
}