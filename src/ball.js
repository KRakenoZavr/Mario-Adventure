export default class Ball {
  constructor() {
    // this.gameWidth = game.gameWidth;
    // this.gameHeight = game.gameHeight;
    this.width = 150;

    this.height = 30;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: 0,
      y: 0
    };

    // this.position = {
    // x: game.gameWidth / 2 - this.width / 2,
    // y: game.gameHeight - this.height - 10
    // };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  draw() {}

  // draw(ctx) {
  // ctx.fillStyle = "#0ff";
  // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  // }

  stop() {
    this.speed = 0;
  }

  update(deltaTime) {
    this.position.x += this.speed;
  }
}
