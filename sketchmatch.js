
let matchImg;
let boxImg;
let matchIsBeingDragged = false;
let matchoffsetX, matchoffsetY;
let isLit = false;
let isBurnt = false;

function setup() {
  noCanvas();

  button = createButton("Menu");
  button.position(0, 0);
  button.mouseClicked(buttonMenuclicked);

  matchImg = createImg("assets/match.png");
  matchImg.mousePressed(matchPressed);
  matchImg.mouseReleased(matchReleased);
  matchImg.size(300, 300);

  boxImg = createImg("assets/box.png");
  boxImg.size(300, 300);
  boxImg.position(500, 500);

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

function draw() {
  if (matchIsBeingDragged && !isBurnt) {
    matchImg.position(mouseX - matchoffsetX, mouseY - matchoffsetY);

    let d = dist(
      matchImg.position().x + matchImg.width / 2,
      matchImg.position().y + matchImg.height / 2,
      boxImg.position().x + boxImg.width / 2,
      boxImg.position().y + boxImg.height / 2
    );

    if (d < (matchImg.width + boxImg.width) / 2) {
      if (!isLit) {
        matchImg.attribute('src', 'assets/lit.png');
        invertColors();
        isLit = true;

        setTimeout(() => {
          matchImg.attribute('src', 'assets/burnt.png');
          invertColors();
          isLit = false;
          isBurnt = true;
        }, 10000);
      }
    }
  }
}

function buttonMenuclicked() {
  console.log("cliked menu button");
  location.href = "index.html";
}

function matchPressed() {
  matchIsBeingDragged = true;
  matchoffsetX = mouseX - matchImg.position().x;
  matchoffsetY = mouseY - matchImg.position().y;
}

function matchReleased() {
  matchIsBeingDragged = false;
}

function invertColors() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}


