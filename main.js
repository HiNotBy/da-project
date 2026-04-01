let current_game = "fire_game";
let maxx = 22;
let maxy = 8;
let tileSize = 50;
let colors = ["#501f1f78", "#aa6666", "#ff7700", "#4f4f4f", "#ff0000",
"#0000ff", "#00ff00", "#180000", "#007700","#00eaff", "#c7b550"];

const deadPlayerB = new Image();
deadPlayerB.src = "deadPlayerB.jpg";

let playerA = {
  x: 22,
  y: 8,
  width: 50,
  height: 50,
  status: "alive"
};

let playerB = {
  x: 1,
  y: 1,
  width: 50,
  height: 50,
  status: "alive"
};


const canvas = document.getElementById("turtle");
const ctx = canvas.getContext("2d");


let fire_shooty_map = [
  3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
  3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
  3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3,
  3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
  3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3,
  3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
  3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3,
  3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
  3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3,
  3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
];

let islands_map = [
  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
  9,9,9,9,9,10,10,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
  9,9,9,9,10,8,8,8,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
  9,9,9,10,8,8,8,8,8,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
  9,9,9,10,8,8,8,8,8,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
  9,9,9,10,8,8,8,8,8,10,9,9,9,9,9,9,8,8,8,9,9,9,9,9,
  9,9,9,9,10,8,8,8,10,9,9,9,9,9,9,8,8,8,8,8,9,9,9,9,
  9,9,9,9,9,10,10,10,9,9,9,9,9,9,9,8,8,8,8,8,9,9,9,9,
  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,9,9,9,9,
  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,9,9,9,9,9,
];

function drawMap(gameMap, fireRow, fireColumn) {
  let cols = 24;
  let rows = 10;
  let size = 50;

  let index = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if(gameMap === fire_shooty_map){
        if((x === fireColumn || y === fireRow) && !warning){
          ctx.fillStyle = colors[4];
        if(x === playerA.x && y === playerA.y){
          playerA.status = "toasted";
        }
        if(x === playerB.x && y === playerB.y){
          playerB.status = "toasted";
        }
        } else if(warning && (x === fireColumn || y === fireRow) && (gameMap[index] === 3)){
          ctx.fillStyle = colors[2];
        } else {
          ctx.fillStyle = colors[gameMap[index]];
        }
      } else if(gameMap === islands_map){
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
    newX >= 1 && newX <= maxx &&
    newY >= 1 && newY <= maxy &&
    !playerCollision(newX, newY, playerB) &&
    playerA.status != "toasted"
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
  if (event.key === "r"){
    startFire();
  }

  if (
    newX >= 1 && newX <= maxx &&
    newY >= 1 && newY <= maxy &&
    !playerCollision(newX, newY, playerA) &&
    playerB.status != "toasted"
  ) {
    playerB.x = newX;
    playerB.y = newY;
  }
});

let fireIndex = 0
let warning = false;
const delay = 50;
let fireRow = (Math.floor(Math.random()*8)+1);
let fireColumn = (Math.floor(Math.random()*22)+1);

function gameLoop() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(current_game === "fire_game"){
    if(fireIndex > delay){
      console.log(fireRow);
      console.log(fireColumn);
      if(fireIndex < delay + 30){
        warning = true;
        drawMap(fire_shooty_map, fireColumn, fireRow);
      } else{
        warning = false;
        drawMap(fire_shooty_map, fireColumn, fireRow);
      }
      if(fireIndex > delay + 50){
        fireIndex = 0;
        warning = false;
        fireRow = (Math.floor(Math.random()*22)+1);
        fireColumn = (Math.floor(Math.random()*8)+1);
      }
      } else {
      drawMap(fire_shooty_map);
    }
      fireIndex ++;
  } else if(current_game === "islands_game"){
    drawMap(islands_map);
  }


  if(playerA.status === "toasted"){
       ctx.drawImage(deadPlayerB, playerA.x * 50 , playerA.y * 50, 50, 50)
  } else{
    ctx.fillStyle = colors[6];
  }
  ctx.fillRect(playerA.x * 50, playerA.y * 50, playerA.width, playerA.height);

  if(playerB.status === "toasted"){
 
  } else{
    ctx.fillStyle = colors[5];
    ctx.fillRect(playerB.x * 50, playerB.y * 50, playerB.width, playerB.height);
  }


  requestAnimationFrame(gameLoop);
}
gameLoop();


