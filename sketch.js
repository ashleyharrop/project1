
let img;
let matchIsBeingDragged = false;
let button = [];

function setup() {
  noCanvas();
  
  button = createButton("1");
  button.mouseClicked( button1click );

  button = createButton("2");
  button.mouseClicked(button2click);

  button = createButton("3");
  button.mouseClicked(button3click);


  // figure out images 
  // img = createImg("assets/match.png");
  // img.mousePressed( matchPressed );
  // img.mouseReleased( matchReleased );
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
  location.href = "indexmatch.html";
}

function button2click() {
  console.log("clicked button 2");
  location.href = "indexflint.html";
}

function button3click() {
  console.log("clicked button 3");
  location.href = "indexbow.html";
}
