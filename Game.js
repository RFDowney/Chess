function begin(){
let B;
const board0 =[WR,WH,WB,WK,WQ,WB,WH,WR];
const board1= [WP,WP,WP,WP,WP,WP,WP,WP];
const board2= [B, B, B, B ,B ,B ,B ,B];
const board3= [B, B, B, B ,B ,B ,B ,B];
const board4= [B, B, B, B ,B ,B ,B ,B];
const board5= [B, B, B, B ,B ,B ,B ,B];
const board6= [BP,BP,BP,BP,BP,BP,BP,BP]
const board7 =[BR,BH,BB,BK,BQ,BB,BH,BR];
for(let row=0; row<8;row++){
  for(let col=0; col<8; col++){
    if(row==0){
      if(board0[col]!=B)
      {image(board0[col],col*50,50*row)}
    }
    if(row==1){
      if(board1[col]!=B)
      {image(board1[col],col*50,50*row)}
    }
    if(row==2){
      if(board2[col]!=B)
      {image(board2[col],col*50,50*row)}
    }
    if(row==3){
      if(board3[col]!=B)
      {image(board3[col],col*50,50*row)}
    }
    if(row==4){
      if(board4[col]!=B)
      {image(board4[col],col*50,50*row)}
    }
    if(row==5){
      if(board5[col]!=B)
      {image(board5[col],col*50,50*row)}
    }
    if(row==6){
      if(board6[col]!=B)
      {image(board6[col],col*50,50*row)}
    }
    if(row==7){
      if(board7[col]!=B)
      {image(board7[col],col*50,50*row)}
    }
    
  }
}
}
