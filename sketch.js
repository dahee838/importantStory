var things = [];

var sceneState = {
  INTRO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4
};
var currentState = sceneState.INTRO;
var keyOn = false; 

var data;

///////////////////////////////////////////////////////////////


function preload()
{
	data = loadJSON('stuff.json');
}

///////////////////////////////////////////////////////////////


function setup()
{
	createCanvas(700,700);
	loadStuff(sceneData.scenes);
}

function loadStuff(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText,data[i].x, data[i].y))
  }
}

///////////////////////////////////////////////////////////////


function draw()
{	
	drawScene(currentState);
	checkTransition(currentState);
	keyOn = false;

}

///////////////////////////////////////////////////////////////

function drawScenes(whichScene)
{

  this.sceneText = sceneText;
  this.x = x; 
  this.y = y;

switch (currentState)
{
	case sceneState.INTRO:
	textSize(42);
    text(this.sceneText, 100, 100);

	ellipse(this.x,this.y,100,100);


	break;

	case sceneState.ONE:

	textSize(42);
    text(this.sceneText, 100, 100);

	ellipse(this.x,this.y,100,100);
	break;

	case sceneState.TWO:

	textSize(42);
    text(this.sceneText, 100, 100);

	ellipse(this.x,this.y,100,100);
	break;

	case sceneState.THREE:
	textSize(42);
    text(this.sceneText, 100, 100);

	ellipse(this.x,this.y,100,100);
	break;

	case sceneState.FOUR:
	textSize(42);
    text(this.sceneText, 100, 100);

	ellipse(this.x,this.y,100,100);
	break;

	default:
	break;
}


///////////////////////////////////////////////////////////////


function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.ONE:
        if (keyOn) {
          currentState++;
          setUpScene(currentState);      
        }
      }
      break;
    case sceneState.TWO:
      if (keyOn) {
          currentState = sceneState.THREE;
        }
        setUpScene(currentState);
      }
      break;
    case sceneState.THREE:
      if (keyOn) {
        currentState = sceneState.INTRO;
        setUpScene(currentState);
      }
      break;
    case sceneState.FOUR:
      if (keyOn) {
        currentState = sceneState.TWO;
        setUpScene(currentState);
      }
      break;
    default:
      break;
  }
}

///////////////////////////////////////////////////////////////


function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.ONE:
      break;
    case sceneState.TWO:
      break;
    case sceneState.THREE:
      break;
    case sceneState.FOUR:
      break;
    default:
      break;
  }
}

///////////////////////////////////////////////////////////////


  function keyPressed()
  {
  	keyOn = true;
  }


