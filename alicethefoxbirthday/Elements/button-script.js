// main button condition
var isClicked = false;
// javascript element button
var button = document.getElementsByTagName('button')[0];

// if clicked -> script on
button.onclick = function() {
  if (isClicked) {
    // if button clicked
button.classList = '';
    isClicked = false
  } else {
    // if button not clicked
    button.classList.add('clicked');
    isClicked = true;
  }
};
