function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
for(let y=0; y<8; y++){
  if(y%2==0){
    for(let x=0; x<8; x++){
      square(30+40*x,30+40*y,40);
      if(x%2==0){
      fill(0,0,0);
        
      }
    }
    }
  if(y%2!=0){
    for(let x=0; x<8; x++){
      square(30+40*x,30+40*y,40);
      if(x%2!=0){
      fill(30+40*x,30+40*y,40);  
      }
    }
    } 
}
}
