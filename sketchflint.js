
let flintImg;
let ironImg;
let woodImg;
let fireImg;
let dropZone;
let draggingFlint = false;
let draggingIron = false;
let draggingWood = false;

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

  flintImg = createImg("assets/flint.png");
  flintImg.size(200, 200);
  flintImg.position(350, 200);
  flintImg.mousePressed(() => draggingFlint = true);
  flintImg.mouseReleased(() => draggingFlint = false);

  ironImg = createImg("assets/iron.png");
  ironImg.size(200, 200);
  ironImg.position(650, 200);
  ironImg.mousePressed(() => draggingIron = true);
  ironImg.mouseReleased(() => draggingIron = false);

  fireImg = createImg("assets/fire.png");
  fireImg.size(200, 200);
  fireImg.position(200, 100);
  fireImg.hide();

  woodImg = createImg("assets/wood.png");
  woodImg.size(200,200)
  woodImg.position(950,200);
  woodImg.mousePressed(() => draggingWood = true);
  woodImg.mouseReleased(() => draggingWood = false);

  dropZone = createDiv('Drop Zone');
  dropZone.size(200, 200);
  dropZone.position(650, 400);
  dropZone.style('border', '2px solid #000');

  dropZone.dragOver(() => false); 
  dropZone.dragLeave(() => false); 
  dropZone.drop(gotFile);

  document.body.appendChild(flintImg.elt);
  document.body.appendChild(ironImg.elt);
  document.body.appendChild(fireImg.elt);
  document.body.appendChild(woodImg.elt);
  document.body.appendChild(dropZone.elt);
}

function draw() {
  if (draggingFlint && draggingIron && draggingWood) {
    let d = dist(
      flintImg.position().x + flintImg.width / 2,
      flintImg.position().y + flintImg.height / 2,
      dropZone.position().x + dropZone.width / 2,
      dropZone.position().y + dropZone.height / 2
    );

    if (d < (flintImg.width + ironImg.width) / 2 && draggingWood) {
      fireImg.show();
      flintImg.hide();
      ironImg.hide();
      woodImg.hide();
      dropZone.hide();

      setTimeout(() => {
        invertColors();
      }, 15000);
    }
  }
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

function gotFile(file) {
  let img;
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.size(50, 50);
    img.position(mouseX - img.width / 2, mouseY - img.height / 2);

    if (
      img.position().x > dropZone.position().x &&
      img.position().x < dropZone.position().x + dropZone.width &&
      img.position().y > dropZone.position().y &&
      img.position().y < dropZone.position().y + dropZone.height
    ) {
      successImg.show();
      flintImg.hide();
      ironImg.hide();
      woodImg.hide();
      dropZone.hide();

      setTimeout(() => {
        invertColors();
      }, 15000);
    }
  } else {
    console.log('Not an image file!');
  }
}

function invertColors() {
  let body = document.body;
  body.style.backgroundColor = (body.style.backgroundColor === "white") ? "black" : "white";
  body.style.color = (body.style.color === "black") ? "white" : "black";
}

function buttonMenuclicked() {
  console.log("clicked menu button");
  window.location.href = "index.html";
}
