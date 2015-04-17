function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  if (mouseIsPressed) {
  	  ellipse(mouseX, mouseY, 80, 80);

  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
};