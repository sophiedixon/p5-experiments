
// var sound, amplitude, cnv;

// function preload(){
//   sound = loadSound('HalfWrittenLoveLetter.mp3');
// }
// function setup() {
//   cnv = createCanvas(400, 400);
//   amplitude = new p5.Amplitude();

//   // start / stop the sound when canvas is clicked
//   cnv.mouseClicked(function() {
//     if (sound.isPlaying() ){
//       sound.stop();
//     } else {
//       sound.play();
//     }
//   });
// }
// function draw() {
//   background(51);
//   fill(255,100);
//   var level = amplitude.getLevel();
//   var size = map(level, 0, 1, 100, 400);
//   ellipse(width/2, height/2, size, size);
// }

let angle = 0;
var sound, amplitude, cnv;

function preload(){
    sound = loadSound('HalfWrittenLoveLetter.mp3');
}

function setup () {
   cnv = createCanvas (400, 400, WEBGL);
   amplitude = new p5.Amplitude();

//    start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}

function draw () {
   background(175);
   directionalLight(0, 0, 255, 1000, 0, 0);
   directionalLight(255, 0, 0, 0, 1000, 0);

   var level = amplitude.getLevel();
   var size = map(level, 0, 1, 100, 400);

   // translate(0, 0, 0);
   noStroke();
   ambientMaterial(255);
   rotateX(angle * 0.3);

   specularMaterial(255);
   sphere(size);


   angle += 0.07;
}