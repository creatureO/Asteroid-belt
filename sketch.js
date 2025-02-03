// Click and drag the mouse to view the scene from different angles.
let button;
let particles;
let img;
let milano;
let angle = 0;
let skin;
let Adventure;


// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('pano space.jpg');
  milano = loadModel('GotG Warbird complete.obj', true);
  skin = loadImage('GotG Warbird Rocket.png');
  Adventure=loadSound('wasteland.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Create a button to reset the particle system.
  button = createButton('Reset');

  // Call resetModel() when the user presses the button.
  button.mousePressed(resetModel);

  // Add the original set of particles.
  resetModel();
}

function draw() {
  background(225);
   panorama(img);//this is for the BACKGROUND
  
  
  // Enable orbiting with the mouse.
  orbitControl();
rotateX(frameCount * 0.001);
rotateY(frameCount * 0.01);
rotateZ(frameCount * 0.001);

  // Turn on the lights.
  lights();

  // Style the particles.
  noStroke();

  // Draw the particles.
  model(particles);

  
sphere(0.01);
  translate(200,100,0);
  
              //  /////////TEST
  if (milano) {
    rotateZ(angle);
    model(milano);
    translate(100,0,0);
    angle += 0.03;
  } else {
    console.log("Model not loaded yet");
  } 
  fill(160);
////////TEST
  
}


function resetModel() {
  // If the p5.Geometry object has already been created,
  // free those resources.
  if (particles) {
    freeGeometry(particles);
  }

  // Create a new p5.Geometry object with random spheres.
  particles = buildGeometry(createParticles);
}

function createParticles() {
  for (let i = 0; i < 120; i += 1) {
    // Calculate random coordinates.
    let x = randomGaussian(0, 2000);
    let y = randomGaussian(0, 2000);
    let z = randomGaussian(0, 2000);

    push();
    // Translate to the particle's coordinates.
    translate(x, y, z);
    // Draw the particle.
        fill(150,96,70);
    sphere(random(5,100),5,7);
    pop();   
  }

  
    for (let i = 0; i < 120; i += 1) {
    // Calculate random coordinates.
    let x = randomGaussian(0, 800);
    let y = randomGaussian(0, 500);
    let z = randomGaussian(0, 800);
    push();
    // Translate to the particle's coordinates.
    translate(x, y, z);
    // Draw the particle.
    fill(180,120,100);
 ellipsoid(random(5,18),random(8,10),random(9,14),4,6);
    pop();
  }

}

function mouseMoved(){
    if (Adventure.isLoaded()) {
    Adventure.play();
    Adventure.loop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}