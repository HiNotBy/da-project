let maxx = 23;
let maxy = 9;
let tileSize = 50;
let colors = ["#813c3c78", "#aa6666"];

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
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1
];


function drawMap(gameMap, fireRow, fireColumn) {
  let cols = 24;
  let rows = 10;
  let size = 50;

  let index = 0;

  for (let y = 0; y < rows; y++) {
    
    for (let x = 0; x < cols; x++) {
      if((x === fireColumn)){
        ctx.fillStyle = "#ff9500";
      } else if(y === fireRow){
        ctx.fillStyle = "#ff9500";
      } else {
        ctx.fillStyle = colors[gameMap[index]];
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
    newY--
  }
  if (event.key === "ArrowDown") {
    newY++
  }
  if (event.key === "ArrowLeft") {
    newX--
  }
  if (event.key === "ArrowRight") {
    newX++
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
    newY--
  }
  if (event.key === "s") { 
    newY++
  }
  if (event.key === "a") {
    newX--
  }
  if (event.key === "d") {
    newX++
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

  drawMap(fire_shooty_map, 3, 3);

  ctx.fillStyle = "red";
  ctx.fillRect(playerA.x * 50, playerA.y * 50, playerA.width, playerA.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(playerB.x * 50, playerB.y * 50, playerB.width, playerB.height);

  requestAnimationFrame(gameLoop);
}

gameLoop();
