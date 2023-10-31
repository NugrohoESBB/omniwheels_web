// Test console log
console.log("Javascript Connected!");


// Controller Joystick
var joy1IinputPosX = document.getElementById("joy1PosizioneX");
var joy1InputPosY = document.getElementById("joy1PosizioneY");
var joy1Direzione = document.getElementById("joy1Direzione");
var joy1X = document.getElementById("joy1X");
var joy1Y = document.getElementById("joy1Y");

// Create JoyStick object into the DIV 'joy1Div'
var Joy1 = new JoyStick('joy1Div', {}, function(stickData) {
  joy1IinputPosX.value = stickData.xPosition;
  joy1InputPosY.value = stickData.yPosition;
  joy1Direzione.value = stickData.cardinalDirection;
  joy1X.value = stickData.x;
  joy1Y.value = stickData.y;
});
