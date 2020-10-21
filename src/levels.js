export default class Levels {
  constructor(level) {
    level.forEach((val, i) => {
      val.forEach((el, j) => {
        let pos = [i * 20, j * 20];
        draw(el, pos);
      });
    });
  }
}

function draw(el, pos) {
  let img = document.createElement("img");
  img.src = "../assets/images" + levelObjects[el];
  img.style.position = "absolute";
  img.style.left = pos[0];
  img.style.top = pos[1];
  document.body.appendChild(img);
}

export const level1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //14
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 5, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 6],
  [0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 7, 2, 0, 7, 7, 2, 6, 6],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], //ground
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1] //1
];

const levelObjects = {
  0: "nothing",
  1: "ground_brick1.png",
  2: "truba",
  3: "air_brick1.png",
  4: "coin",
  5: "secret_block",
  6: "another_brick1.png",
  7: "goomba"
};
