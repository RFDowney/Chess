
let BK,BQ,BH,BR,BP,WK,WQ,WH,WR,WP,B,log,storedr,storedc;
let board;
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

  board=[ [BR,BH,BB,BQ,BK,BB,BH,BR],
          [BP,BP,BP,BP,BP,BP,BP,BP],
          [B, B, B, B ,B ,B ,B ,B],
          [B, B, B, B ,B ,B ,B ,B],
          [B, B, B, B ,B ,B ,B ,B],
          [B, B, B, B ,B ,B ,B ,B],
          [WP,WP,WP,WP,WP,WP,WP,WP],
          [WR,WH,WB,WQ,WK,WB,WH,WR], ];
  noLoop();
  log=-1;
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

  update(board,B);
}
function mouseClicked(){
  log++;
  console.log(log);
  let c = floor(8*(mouseX/width));
  
  let r = floor(8*(mouseY/width));
  
  if(log%2==0){
  storedr=r;
  storedc=c;
  }
  else{
    click2(board, B,r,c,storedr,storedc)
  }
  update(board, B);
  draw();

}
