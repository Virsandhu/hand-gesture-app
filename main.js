https://teachablemachine.withgoogle.com/models/P5W-l4t4l/
prediction_1=""
prediction_2=""

Webcam.set({
height:300,
width:350,
img_format:'png',
png_quality:90
});
camera= document.getElementById("#camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML= '<img id="captured_img"src="'+data_uri+'"/>'
    });}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B3sXXaDyD/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model is ready");
}
function speak(){
   var synth= window.speechSynthesis;
   speak_data_1= "The first prediction is"+prediction_1;
   speak_data_2= "And The Second prediction is"+prediction_2;
   var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
   synth.speak(utterThis);
}