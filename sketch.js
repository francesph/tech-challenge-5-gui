let bulb1 = 55; //starting diameter
let bulb2 = 55;
let bulb3 = 55;

let j;
let x, y, velX, velY;

let j2;
let x2, y2, velX2, velY2;

let j3;
let x3, y3, velX3, velY3;

let gui;
let diameterSlider, diameterSlider2 /*diameterSlider3*/;

function setup() {
  createCanvas(450, 550);
  strokeWeight(1);

  gui = createGui();

  //diameter slider
  diameterSlider = createSlider("bulb1", /*position on (x,y)*/50,440,/*slider length*/100,20,/*diameter range:*/10,55);
  diameterSlider.onChange = diameterSliderChange;
  j = createJoystick("red", 190,450,65,65,-1,1,1,-1);
  x = 300;
  y = 100;
  velX = 0;
  velY = 0;  
//=============================================================================================
  diameterSlider2 = createSlider("bulb2",50,470,100,20,10,55);
  diameterSlider2.onChange = diameterSliderChange;
  j2 = createJoystick("yellow", 270,450,65,65,-1,1,1,-1);
  x2 = 300;
  y2 = 100;
  velX2 = 0;
  velY2 = 0;  

  diameterSlider3 = createSlider("bulb3",50,500,100,20,10,55);
  diameterSlider3.onChange = diameterSliderChange;
  j3 = createJoystick("purple", 350,450,65,65,-1,1,1,-1);
  x3 = 300;
  y3 = 100;
  velX3 = 0;
  velY3 = 0;  
}

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
  circle(269,200, 25);

  fill("blue");
  circle(229,321, 30);

  fill("white");
  circle(320,310,25);

  fill("orange");
  circle(310,260,27);

  fill("#a0e364");
  circle(254,258,30);
  
  drawGui();
  
  
//--------------------------------------------------------------
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
  text(j.label, 214, 445);
  text(j2.label,285,445);
  text(j3.label,365,445);
}
//--------------------------------------------------------------------
function touchMoved() {
  return false;
}
function diameterSliderChange() {
  bulb1 = diameterSlider.val;
  bulb2 = diameterSlider2.val;
  bulb3 = diameterSlider3.val;
}