song=""
left_wrist_x=0
left_wrist_y=0
right_wrist_x=0
right_wrist_y=0
score_left_wrist=0

function preload(){
song=loadSound("music.mp3")
song=loadSound("music2.mp3")
}

function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
}

function draw(){
image(video,0,0,600,500)
if(score_left_wrist>0.2){
circle(left_wrist_x,left_wrist_y,20)
inNumberleft_wrist_y=Number(left_wrist_y)
remove_decimals=floor(inNumberleft_wrist_y)
volume=remove_decimals/500
document.getElementById("volume").innerHTML="volume"+volume;
song.setVolume(volume)
}
}

function modelloaded(){
console.log("model has been loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
left_wrist_x=results[0].pose.leftWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
right_wrist_x=results[0].pose.rightWrist.x;
right_wrist_y=results[0].pose.rightWrist.y;
score_left_wrist=results[0].pose.keypoints[9].score
console.log("left wrist x= "+ left_wrist_x+"left wrist y="+left_wrist_y);
console.log("right wrist x="+right_wrist_x+"right wrist y="+right_wrist_y);
}
}
