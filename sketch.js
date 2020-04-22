function setup(){

  createCanvas(1200,400);
}


function draw(){
  
  
  let v = map(mouseX, 0, height, 0, 100)
  
  let i = map(mouseX, 0, height, 70, 110)
  
  let p = map(mouseX, 0, height, 120, 160)

  background(v,i,p)
  fill(255,20,20)
  ellipse(mouseX,mouseY,20,20)
  

}