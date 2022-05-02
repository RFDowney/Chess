
let BK,BQ,BH,BR,BP,WK,WQ,WH,WR,WP,B;
let board0, board1, board2, board3, board4, board5, board6, board7;
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

  board0 =[BR,BH,BB,BQ,BK,BB,BH,BR];
  board1= [BP,BP,BP,BP,BP,BP,BP,BP];
  board2= [B, B, B, B ,B ,B ,B ,B];
  board3= [B, B, B, B ,B ,B ,B ,B];
  board4= [B, B, B, B ,B ,B ,B ,B];
  board5= [B, B, B, B ,B ,B ,B ,B];
  board6= [WP,WP,WP,WP,WP,WP,WP,WP]
  board7 =[WR,WH,WB,WQ,WK,WB,WH,WR];
  noLoop();
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

  /*const board0 =[BR,BH,BB,BQ,BK,BB,BH,BR];
  const board1= [BP,BP,BP,BP,BP,BP,BP,BP];
  const board2= [B, B, B, B ,B ,B ,B ,B];
  const board3= [B, B, B, B ,B ,B ,B ,B];
  const board4= [B, B, B, B ,B ,B ,B ,B];
  const board5= [B, B, B, B ,B ,B ,B ,B];
  const board6= [WP,WP,WP,WP,WP,WP,WP,WP]
  const board7 =[WR,WH,WB,WQ,WK,WB,WH,WR];*/

  update(board0, board1, board2, board3, board4, board5, board6, board7, B);
}
function mouseClicked() {
  console.log("work");
  let r = floor(8*(mouseX/width));
  
  let c = floor(8*(mouseY/width));
  console.log(r,c);
  board0[c]=B;
  update(board0, board1, board2, board3, board4, board5, board6, board7, B);

}
