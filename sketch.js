
let BK,BQ,BH,BR,BP,WK,WQ,WH,WR,WP;
function preload() {
  BK = loadImage("Pieces/BKing.png");
  BQ = loadImage("Pieces/BQueen.png");
  BH = loadImage("Pieces/BHorse.png");
  BR = loadImage("Pieces/BRook.png");
  BB=loadImage("Pieces/BBishop.png")
  BP = loadImage("Pieces/BPawn.png");
  WK = loadImage("Pieces/WKing.png");
  WQ = loadImage("Pieces/WQueen.png");
  WH = loadImage("Pieces/WHorse.png");
  WB=loadImage("Pieces/WBishop.png")
  WR = loadImage("Pieces/WRook.png");
  WP = loadImage("Pieces/WPawn.png");
  console.log("Done preload");
}
function setup() {
  createCanvas(410, 410);
}
function draw() {
  background(220);
  for(let y=0; y<8; y++){
    for(let x=0; x<8; x++){
      if((x+y)%2==0){
        fill('white');
      } else {
        fill('darkgrey'); 
      }
      square(5+50*x,5+50*y,50);
    }    
  
  }
begin();
}
