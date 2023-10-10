
// let img;
// let button = [];

// function setup() {
//   noCanvas();

//   button = createButton("1");
//   button.mouseClicked( button1click );

//   button = createButton("2");
//   button.mouseClicked(button2click);

//   button = createButton("3");
//   button.mouseClicked(button3click);

//   img = createImg("assets/BG2.jpg");
//   img.style("width", "100%");
//   img.style("height", "100%");
//   img.position(0, 0);

// }


// function button1click() {
//   console.log("clicked button 1");
//   location.href = "indexmatch.html";
// }

// function button2click() {
//   console.log("clicked button 2");
//   location.href = "indexflint.html";
// }

// function button3click() {
//   console.log("clicked button 3");
//   location.href = "indexbow.html";
// }


let button1, button2, button3;

function setup() {
  noCanvas();

  button1 = createButton("1");
  button1.mouseClicked(button1click);

  button2 = createButton("2");
  button2.mouseClicked(button2click);

  button3 = createButton("3");
  button3.mouseClicked(button3click);

  button1.style('z-index', '1');
  button2.style('z-index', '1');
  button3.style('z-index', '1');

  button1.position(400, 400);
  button2.position(725, 400);
  button3.position(1050, 400);

  button1.style('background-color', '#000000'); // Change button color
  button1.style('color', '#FFFFFF'); // Change text color
  button1.style('font-size', '40px'); // Change text size
  button1.style('width', `70px`); 
  button1.style('height', `70px`); 

  button2.style('background-color', '#000000'); // Change button color
  button2.style('color', '#FFFFFF'); // Change text color
  button2.style('font-size', '40px'); // Change text size
  button2.style('width', `70px`); 
  button2.style('height', `70px`); 

  button3.style('background-color', '#000000'); // Change button color
  button3.style('color', '#FFFFFF'); // Change text color
  button3.style('font-size', '40px'); 
  button3.style('width', `70px`); 
  button3.style('height', `70px`);

  img = createImg("assets/BG2.jpg");
  img.style("width", "100%");
  img.style("height", "100%");
  img.position(0, 0);
  img.style('z-index', '-1');
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
