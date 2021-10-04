nose_X = 0;
nose_Y = 0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/2Sp3CKQV/clown-nose-coding.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('model loaded');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X = results[0].pose.nose.x-15;
        nose_Y = results[0].pose.nose.y-15;
        console.log("nose X="+nose_X);
        console.log("nose Y="+nose_Y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_X,nose_Y,30,30);
}
function take_snapshot(){
    save('snapshot.png');
}