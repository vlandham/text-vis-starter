
// all strings loaded
var data;

// current data being displayed
var viewData = [];

// Preload function is used to load data and nothing else
function preload() {
  // load strings as an array and save to data
  data = loadStrings('data/alice.txt');
}

// Initial setup of sketch
function setup() {

  createCanvas(windowWidth, windowHeight);
  background('steelblue');

  textSize(32);
  fill('white');


  // sort the lines just for fun
  data.sort(function(a,b) { return a.length - b.length; });
  console.log(data);

  // starter data to be displayed.
  for(var i = 0; i < 10; i++) {
    addView();
  }
}

// Draw function
function draw() {
  clear();
  background('steelblue');

  // modify the lines being displayed
  updateView();
  // for each line to display
  viewData.forEach(function(d) {
    // display text
    text(data[d.index], d.x, d.y);
    // move text down by 1
    d.y = d.y + 1;
  });
}

// add a new random line to be displayed.
function addView() {
  viewData.push({x: random(10, width - 10), y: random(10, height - 10), index: Math.floor(random(0, data.length))});
}

// if a line has moved off the screen,
// add two more randomly in its place.
function updateView() {
  var len = viewData.length;
  var remove = []

  viewData.forEach(function(d,i) {
    if(d.y > height) {
      remove.push(i);
    }
  });

  remove.forEach(function(r){
    viewData.splice(r,1);
    addView();
    addView();
  });
}

// resize canvas if window resizes.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
