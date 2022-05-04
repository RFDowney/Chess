function update(board,B){

for(let row=0; row<8;row++){
  for(let col=0; col<8; col++){
    if (board[row][col]!=B) {
        
 image(board[row][col],col*50,50*row);
        }

  }
}   
}
function rules(board,B,r,c,storedr,storedc){
 return true;
}
function click2(board, B,r,c,storedr,storedc){
  if(rules(board,B,r,c,storedr,storedc)==true){
    console.log(storedr,storedc);
    let storedpiece;
  storedpiece=board[storedr][storedc]
    board[storedr][storedc]=B;
    board[r][c]=storedpiece;
  }
}
