img=""
status=""


function preload()  {

img= loadImage('yellow car.JPG')


}


function setup() {

canvas= createCanvas(640,420)
canvas.center();

objectDetector= ml5.objectDetector('cocossd'  , modelLoaded)
document.getElementById("status").innerHTML= "Status = Detecting Objects";


}

function modelLoaded()  {

status= true;
console.log("ModelLoaded!")
objectDetector.detect(img , gotResults)
    
}


function gotResults(error , results){

if (error) {

console.log(error)

}
console.log(results)

}



function draw() {
image(img , 0 , 0 , 640 , 420);
fill("#FF0000")
text("Car" , 120 , 140)
noFill();
stroke("#FF0000")
rect(120 , 100 , 410 , 200)

}