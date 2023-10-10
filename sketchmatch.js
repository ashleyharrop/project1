let matchImg;
let boxImg;
let matchIsBeingDragged = false;

function setup() {
  noCanvas();

  button = createButton("Menu");
  button.position(CENTER);
  button.mouseClicked(buttonMenuclicked);


  matchImg = createImg("assets/match.png");
  matchImg.mousePressed( matchPressed );
  matchImg.mouseReleased( matchReleased );
  matchImg.style(50,50);

  boxImg = createImg("assets/box.png");
  boxImg.style(50,50);


}

function draw() {

}

function buttonMenuclicked() {
  console.log("cliked menu button");
  location.href = "index.html";
 }

function matchPressed() {
  matchIsBeingDragged = true; {
    if (matchIsBeingDragged) img.position(mouseX-100,mouseY-100);
  }
}
function matchReleased() {
  matchIsBeingDragged = false;
}
 
