function setup() {
  noCanvas();

// let img = loadImage(assets/matchstick.jpeg);
// img.loadPixels();


button = createButton("Menu");
button.position(CENTER);
button.mouseClicked(buttonMenuclicked);

}

function draw() {
  background(125);
}

function buttonMenuclicked () {
  console.log("cliked menu button");
  location.href = "index.html";
 }
