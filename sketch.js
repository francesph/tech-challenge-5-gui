//3 resizeable lights
let d = 30;
let d2 = 15
let d3 = 27
//3 moving lights:
let bulb1 = 55;
let bulb2 = 55;
let bulb3 = 55;

//joysticks for the 3 lights:
let j;
let x, y, velX, velY;

let j2;
let x2, y2, velX2, velY2;

let j3;
let x3, y3, velX3, velY3;

// //snow
// var w = window.innerWidth;
// var h = window.innerHeight;
// let p = -1200;
// let snowflakes = 400;


let gui;
let diameterSlider, diameterSlider2, diameterSlider3;
//===================================================================================
function setup() {
  createCanvas(450, 550);
  // let q = frameRate(5); //snowfall speed

  gui = createGui();
  diameterSlider = createSlider("Pink", 100,450,100,20,20,43);
  diameterSlider2 = createSlider("Blue", 100,480,100,20,15,35);
  diameterSlider3 = createSlider("Orange",100,510,100,20,15,35)

  j = createJoystick("red", 240,480,45,45,-1,1,1,-1);
  x = 300;
  y = 100;
  velX = 0;
  velY = 0;  
//=============================================================================================


  j2 = createJoystick("yellow", 305,480,45,45,-1,1,1,-1);
  x2 = 300;
  y2 = 100;
  velX2 = 0;
  velY2 = 0;  
//======================================================================================

  j3 = createJoystick("purple", 370,480,45,45,-1,1,1,-1);
  x3 = 300;
  y3 = 100;
  velX3 = 0;
  velY3 = 0;  
  
}
//=======================================================================================
function draw() {
  background("#d7f0f0");
  noStroke();

//christmas tree

//trunk
  fill("#523215");
  rect(250,350,50,60);
//green part
  fill("green");
  triangle(150, 350, 400, 350, 270, 198);

  fill("green");
  triangle(160, 300, 390, 300, 270, 160);

  fill("green");
  triangle(180, 250, 368, 250, 270, 122);

  fill("green");
  triangle(200, 200, 348, 200, 270, 100);

  //lights
  fill("pink");
  circle(269,200,diameterSlider.val);

  fill("blue");
  circle(229,321, diameterSlider2.val);

  fill("white");
  circle(320,310,25);

  fill("orange");
  circle(310,260,diameterSlider3.val);

  fill("#a0e364"); //light green
  circle(254,258,30);
  
  // //snow
  // fill("white");
  // for (let s = 0; s < snowflakes; s++) {
  //   circle(random(width), p + random(1200), random(1, 6));
  // }
  // p += 20;

  // if (p > 0) {
  //   p = -600;
  // }
  
//--------------------------------------------------------------
  drawGui();
 


if (bulb1.isChanged) {
  print(bulb1.label + " = " + bulb1.val);
}
if (j.isChanged); {
  print(j.label + " = {" + j.valX + ", " + j.valY + "}");
}

velX += j.valX;
velY += j.valY;
fill("red");
circle(100 + velX, 130 + velY, 30); 
//----------------------------------------------------------------
if (j2.isChanged); {
  print(j2.label + " = {" + j2.valX2 + ", " + j2.valY2 + "}");
}

velX2 += j2.valX;
velY2 += j2.valY;
fill("yellow");
circle(100 + velX2, 200 + velY2, 30); //middle
//--------------------------------------------------
if (j3.isChanged); {
  print(j3.label + " = {" + j3.valX3 + ", " + j3.valY3 + "}");
}

velX3 += j3.valX;
velY3 += j3.valY;
fill("purple");
circle(100 + velX3, 270 + velY3, 30); //bottom



  // labels
  fill("black");
  text(j.label, 254, 470); //red
  text(j2.label,310,470); //yellow
  text(j3.label,377,470);//purple

  text(diameterSlider.label, 60, 463)
  text(diameterSlider2.label, 60, 493)
  text(diameterSlider3.label, 45, 523)
}
//--------------------------------------------------------------------
function touchMoved() {
  return false;
}
