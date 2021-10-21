status="";

function setup()
{
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function draw()
{
image(video,0,0,380,380);
}

function start()
{
object_detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
object_name=document.getElementById("input").value;
}

function modelLoaded()
{
console.log('model is loaded');
status=true;
}