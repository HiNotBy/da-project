let maxx = 19;
let maxy = 9;
let tileSize = 50;

let playerA = {
  x: 19,
  y: 9,
  width: 50,
  height: 50
};

let playerB = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
};

const canvas = document.getElementById("turtle");
const ctx = canvas.getContext("2d");


let fire_shooty_map = [
  20, 
  10, 
  50, 
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1
];

function drawMap(gameMap) {
  let cols = gameMap[0];
  let rows = gameMap[1];
  let size = gameMap[2];

  let index = 3;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let tile = gameMap[index];
      if (tile === 1) {
        ctx.fillStyle = "#813c3c78";
      } else {
        ctx.fillStyle = "#aa6666";
      }
      ctx.fillRect(x * size, y * size, size, size);
      index++;
    }
  }
}



function playerCollision(newx, newy, other) {
  if(newx === other.x && newy === other.y){
    return true;
  } else {
    return false;
  }
}


window.addEventListener("keydown", function(event) {

  let newX = playerA.x;
  let newY = playerA.y;

  if (event.key === "ArrowUp"){ 
    newY--;
  }
  if (event.key === "ArrowDown") {
    newY++;
  }
  if (event.key === "ArrowLeft") {
    newX--;
  }
  if (event.key === "ArrowRight") {
    newX++;
  }

  if (
    newX >= 0 && newX <= maxx &&
    newY >= 0 && newY <= maxy &&
    !playerCollision(newX, newY, playerB)
  ) {
    playerA.x = newX;
    playerA.y = newY;
  }


  newX = playerB.x;
  newY = playerB.y;

  if (event.key === "w") { 
    newY--;
  }
  if (event.key === "s") { 
    newY++;
  }
  if (event.key === "a") {
    newX--;
  }
  if (event.key === "d") {
    newX++;
  }

  if (
    newX >= 0 && newX <= maxx &&
    newY >= 0 && newY <= maxy &&
    !playerCollision(newX, newY, playerA)
  ) {
    playerB.x = newX;
    playerB.y = newY;
  }
});


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawMap(fire_shooty_map);

  ctx.fillStyle = "red";
  ctx.fillRect(playerA.x * 50, playerA.y * 50, playerA.width, playerA.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(playerB.x * 50, playerB.y * 50, playerB.width, playerB.height);

  requestAnimationFrame(gameLoop);
}

gameLoop();
