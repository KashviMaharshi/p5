function preload() {
	}
function setup(){
	canvas = createCanvas(640,480);
	canvas.position(200,250);
	video = createCapture(VIDEO);
	video.hide();
	
	}
y = 75;
function draw() {
	image(video, 100,100,450,325);
	stroke(254,254,254);
	while (y<=450){
	fill(108, 168, 85);
	circle(65,y,25);
	y = y+25;
	}	
z=75;
while (z<=450){
	fill(108, 168, 85);
	circle(585,z,25);
	z= z+25;
	}
fill(204, 108, 231)
rect(50,450,550,20);
fill(204, 108, 231)
	rect(50,50,550,20);
	}
function take_snapshot() {
	save('student_name.png');
	}
function filter_tint() {
	col = document.getElementById("color").value;
	}

