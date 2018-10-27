var started = false;
  function setup() {
    noLoop()
    canvasWidth = 500
    canvasHeight = 500
    angleMode(DEGREES)
    createCanvas(canvasWidth, canvasHeight)
    textSize(45);

  }
  function draw(){
    if(started){
    let secondsColor = [46, 255, 0]
    let minuteColor = [0, 255, 255]
    let hourColor = [0, 89, 255]

    function drawWords(){ //creates the digital clock in the center of the arcs
      rotate(90)
      fill(0)
      textAlign(CENTER)
      stroke(hourColor)
      text(hr % 12, -55, 0)

      stroke(minuteColor)
      text(min, 0, 0)

      stroke(secondsColor)
      text(sec, 60, 0)
    }

    background(0);
    translate(width/2, height/2)
    rotate(-90)

    let min = minute();
    let sec = second();
    let hr = hour();
    strokeWeight(8)
    //creates arc for seconds timer
    noFill();
    stroke(secondsColor);
    let end = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end);
    //Creates arc for minutes timer
    noFill();
    stroke(minuteColor)
    let end2 = map(min, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, end2);
  //Creates arc for hour timer in 12 hour standard
    stroke(hourColor)
    noFill();
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, end3);

    drawWords()
  }
  }
function start(){
  started = true;
  loop();
}