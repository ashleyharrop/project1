function setup() {
  noCanvas();

  button = createButton("Menu");
  button.position(CENTER);
  button.mouseClicked(buttonMenuclicked);

}

function draw() {
  
}

function buttonMenuclicked () {
  console.log("cliked menu button");
  location.href = "index.html";
 }
