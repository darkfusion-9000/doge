img = "";

status = "";

objects = [];

function preload() {
  img = loadImage("couch.jpeg");
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
  OD = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded() {
  console.log('modelLoaded');
  status = true;
  OD.detect(video, gotresult);
}

function gotresult(error,results) {
if (error) {
  console.log(error);

}
console.log(results)
objects = results

}


function draw() {
    image(video,0,0,380,380); 
    if (status != "") {
      
      for (index = 0; index < objects.length; index++) {

   document.getElementById("status").innerHTML = "Status object detected";
   document.getElementById("noof").innerHTML = "No. of objects detected are: "+objects.length;
   fill("#00FFAE");
   percent = floor(objects[index].confidence*100);
   text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y);
   stroke("#00FFAE");
   noFill();
   rect(objects[index].x-100, objects[index].y, objects[index].width, objects[index].height);
   

      }

    }

   
}
