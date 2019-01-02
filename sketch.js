
var sound, amplitude, cnv;

function preload(){
  sound = loadSound('HalfWrittenLoveLetter.mp3');
}
function setup() {
  cnv = createCanvas(400, 400);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(51);
  fill(255,100);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 100, 400);
  ellipse(width/2, height/2, size, size);
}