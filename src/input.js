export default class InputHandler {
  constructor(ball) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          ball.moveLeft();
          break;

        case 39:
          ball.moveRight();
          break;
        // case 27:
        //   game.togglePause();
        //   break;

        // case 32:
        //   game.start();
        //   break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (ball.speed < 0) ball.stop();
          break;
        case 39:
          if (ball.speed > 0) ball.stop();
          break;
        default:
          break;
      }
    });
  }
}
