let value = 0;


function setup() {
  noCanvas();


  button = createButton("Menu");
  button.position(0, 0);
  button.style('font-size', 30);
  button.mouseClicked(buttonMenuclicked);
  button.style('background-color', '#ff0000'); 
  button.style('color', '#FFFFFF'); 
  button.style('font-size', '15px'); 
  button.style('width', `55px`); 
  button.style('height', `30px`); 


}

function draw() {
  background(0); 
  ellipse (300, 300, 40, 40); 
  fill(255);
}
 
function buttonMenuclicked() {
  console.log("clicked menu button");
  window.location.href = "index.html";
}

function mouseDragged() {
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  value = map(speed, 0, 10, 255, 0);
  background(value);
}