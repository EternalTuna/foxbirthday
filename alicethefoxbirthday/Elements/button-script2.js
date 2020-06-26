// main condition, can't draw
var weCanDraw = false;
// main condition of button
var isClicked = false;
// javascript take element
var button = document.getElementsByTagName('button')[0];

// script on click
button.onclick = function() {
  if (isClicked) {
    // drw
    button.classList = '';
    isClicked = false;
    weCanDraw = false;
  } else {
    // drw
    button.classList.add('clicked');
    isClicked = true;
    weCanDraw = true;
  }
};

function setup() {
  // create canvas for draw
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  // font size
  textSize(74);

  if (weCanDraw) {
    // if draw -> integration of position
    text('🖤', mouseX, mouseY);
  }
}