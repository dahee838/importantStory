

var sceneData;
var currentScene = 0;
var scenes = [];
var potato;


function preload() 
{
  sceneData = loadJSON('stuff.json');
  potato = loadImage("potato.png");

}

function setup() {
  createCanvas(1240, 600);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(250);
  scenes[currentScene].display();
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].thatOneBit, data[i].options, data[i].nextScenes, data[i].x,  data[i].y))
  }
}


function Scene(sceneText, thatOneBit, options, nextScenes,x,y) {
  this.sceneText = sceneText;
  this.thatOneBit = thatOneBit;
  this.options = options;
  this.nextScenes = nextScenes;
  this.x = x; 
  this.y = y;

  this.display = function() 
  {

    fill(0);
    textSize(32);
    text(this.sceneText, 100, 100);
    textSize(14);
    text(this.thatOneBit, 100,120);
    textSize(24);
    for (var i = 0; i < options.length; i++) {
      text('Go to: ' + this.options[i], 150, 200 + i * 50);
    }

    stroke(2);
    image(potato, this.x,this.y, 400,400);
  }
}


function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}