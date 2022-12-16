var rain = []
let x=450
let y=480

function setup() {
	createCanvas(windowWidth, windowHeight);

	  for(var i = 0; i < 200; i++) {
    rain[i] = new Rain();
}
}

function draw() {
background(0)

	//window
	stroke(255)
	fill(7, 29, 56)
	rect(450,100,600,600);
	
	//moon
	fill(222, 218, 100)
	circle(520,170,100)
	fill(7, 29, 56)

	
	//house 1
	strokeWeight(0.5)
	fill(31, 33, 36)
	rect(850,230,200,470)
	
	//house 1 windowns
	fill(0)
	rect(900,250,30,30)
	rect(900,400,30,30)
	rect(900,500,30,30)
	rect(900,600,30,30)
	
	rect(950,550,30,30)
	rect(950,500,30,30)
	rect(950,450,30,30)
	rect(950,300,30,30)
	
	rect(1000,450,30,30)
	rect(1000,300,30,30)
	rect(1000,250,30,30)
	
	fill(240, 181, 79)
	rect(900,300,30,30)
	rect(950,600,30,30)
	rect(950,350,30,30)
	rect(950,300,30,30)
	rect(1000,550,30,30)
	rect(1000,500,30,30)
	rect(1000,400,30,30)
	rect(1000,350,30,30)
	rect(900,450,30,30)
	
	fill(230, 152, 18)
	rect(900,350,30,30)
	rect(900,550,30,30)
	rect(950,250,30,30)
	rect(1000,600,30,30)
	rect(900,450,30,30)
	rect(950,400,30,30)
	
	//house 2
	fill(53, 56, 59)
	rect(600,175,300,525)
	
	//house 2 windowns
	fill(0)
	rect(620,230,100,40)
	rect(620,440,100,40)
	rect(620,510,100,40)

	rect(770,300,100,40)
	rect(770,440,100,40)
	rect(770,580,100,40)

	
	fill(240, 181, 79)
	rect(620,300,100,40)
	rect(620,370,100,40)
	fill(230, 152, 18)
	rect(620,580,100,40)
	fill(230, 152, 18)
	rect(770,230,100,40)
	rect(770,370,100,40)
	rect(770,510,100,40)
	
	
	//house 3
	fill(60, 62, 66)
	rect(450,285,200,415)
	
	//house 3 windows
	
	//black
	fill(0)
	rect(470,420,40,50)
	rect(470,480,40,50)
	rect(530,300,40,50)
  rect(530,540,40,50)
	rect(530,600,40,50)
	rect(530,360,40,50)
	rect(590,300,40,50)
	rect(590,480,40,50)
	rect(590,600,40,50)
	
	//orange
	fill(240, 181, 79)
	rect(470,300,40,50)
	rect(470,360,40,50)
	rect(470,600,40,50)
	rect(530,420,40,50)
	rect(530,480,40,50)
	rect(590,600,40,50)
	
	//orange 2
	fill(230, 152, 18)
	rect(470,540,40,50)
	rect(470,540,40,50)
	rect(590,540,40,50)
	rect(590,360,40,50)
	rect(590,420,40,50)
	
	
	//window frame 1
	stroke(255)
	strokeWeight(3)
	line(450,290,1050,290)
	
	//window frame 2
	line(450,480,1050,480)
	
	//window frame 3
	line(750,100,750,700)
	
	//fish 1
	fill(255,255,255,150)
	noStroke(0)
	triangle(x+50,y,x+50,y+50,x+150,y+25)
	triangle(x+20,y+10,x+20,y+30,x+50,y+20)
	circle(x+120,y+25,10)
	
	//fish 2
	fill(255,255,255,150)
	noStroke(0)
	triangle(x-200,y-200,x-400,y-300,x-400,y-100)
	triangle(x-450,y-150,x-450,y-250,x-400,y-200)
	circle(x-250,y-200,10)
	
	//rain
		  for(var i = 0; i < 200; i++) {
  rain[i].show();
  rain[i].update();
}
	
	//cat 
	noStroke(0)
	fill(0)
	ellipse(530,580,90,80)
	ellipse(530,650,100,130)
	triangle(500, 560, 520, 520, 530, 570)
	triangle(550, 560, 570, 520, 575, 580)
	rect(540,690,90,20);
	
	//wall
	rect(0,0,448,950)
	rect(1051,0,1300,1300)
	rect(450,0,600,100)
	rect(430,700,700,700)
	
	x=x+2
	

}

function Rain() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}