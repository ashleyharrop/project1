
let img;
let matchIsBeingDragged = false;

function setup() {
  noCanvas();
  
  let p = createP("FLASHLIGHT");
  
  let button = createButton("1");
  button.mouseClicked( button1click );

  button = createButton("2");
  button = createButton("3");
  
  img = createImg("assets/match.png");
  img.mousePressed( matchPressed );
  img.mouseReleased( matchReleased );
  // img.style("width","40px");

}

function matchPressed() {
  matchIsBeingDragged = true;
}
function matchReleased() {
  matchIsBeingDragged = false;
}

function draw() {
  if (matchIsBeingDragged) img.position(mouseX-100,mouseY-100);
}

function button1click() {
  console.log("clicked button 1");
  location.href = "index2.html";
}



