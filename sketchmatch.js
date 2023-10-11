
let matchImg;
let boxImg;
let matchIsBeingDragged = false;
let matchoffsetX, matchoffsetY;
let isLit = false;
let isBurnt = false;
let isnotBurnt = false;
let burntImg;
let burntIsBeingDragged = false;
let burntoffsetX, burntoffsetY;


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

  matchImg = createImg("assets/match.png");
  matchImg.mousePressed(matchPressed);
  matchImg.mouseReleased(matchReleased);
  matchImg.size(300, 300);

  burntImg = createImg("assets/burnt.png");
  burntImg.mousePressed(burntPressed);
  burntImg.mouseReleased(burntReleased);
  burntImg.size(300, 300);
  burntImg.hide();

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
   
  // if (burntIsBeingDragged && !isnotBurnt) {
  //   burntImg.position(mouseX - burntoffsetX, mouseY - burntoffsetY);
  //   let d = dist(
  //     burntImg.position().x + burntImg.width / 2,
  //     burntImg.position().y + burntImg.height / 2,
  //     boxImg.position().x + boxImg.width / 2,
  //     boxImg.position().y + boxImg.height / 2, 
  //   );
  //   if (d < (burntImg.width + boxImg.width) / 2) {
  //     if (!isnotBurnt) {
  //       burntImg.attribute('src', 'assets/match.png');

  //     }
  //   }
  // }
}


function buttonMenuclicked() {
  console.log("cliked menu button");
  location.href = "index.html";
}

function burntPressed() {
  burntIsBeingDragged = true;
  burntoffsetX = mouseX - burntImg.position().x;
  burntoffsetY = mouseY - burntImg.position().y;
}

function burntReleased() {
  burntIsBeingDragged = false;

  let d = dist(
    burntImg.position().x + burntImg.width / 2,
    burntImg.position().y + burntImg.height / 2,
    boxImg.position().x + boxImg.width / 2,
    boxImg.position().y + boxImg.height / 2
  );

  if (d < (burntImg.width + boxImg.width) / 2) {
    burntImg.hide(); 
    matchImg.show(); 
    matchImg.position(burntImg.position().x, burntImg.position().y); 
    isBurnt = false;
  }
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

