var sum = 0;

// seizure mode
var count = [0];
var up1 = true;
var down1 = false;
var up2 = true;
var down2 = false;
var up3 = true;
var down3 = false;
var up4 = true;
var down4 = false;
var up5 = true;
var down5 = false;
var up6 = true;
var down6 = false;
var colorLow = 50;
var color1 = colorLow;
var color2 = colorLow;
var color3 = colorLow;
var color4 = colorLow;
var color5 = colorLow;
var color6 = colorLow;
var colorAllRate = .7;
var color1Rate = .4*colorAllRate;
var color2Rate = .6*colorAllRate;
var color3Rate = .12*colorAllRate;
var color4Rate = .3*colorAllRate;
var color5Rate = .1*colorAllRate; 
var color6Rate = .8*colorAllRate;
var fadeRate = .5;
var seizureMode = false;

function updateValue(wedgeValue){
    sum = sum + wedgeValue;
    document.querySelector("#sumValue").value = sum;
}

function clearValue(){
    sum = 0;
    document.querySelector("#sumValue").value = null;
}

function rollDice(dice){
    var roll = 0;
    var id = "";
    console.log(dice)
    if (dice == 1){
        id = "#dice1";
    }
    else{
        id = "#dice2";
    }
    console.log(id)
    roll = Math.floor(Math.random()*20 + 1)
    document.querySelector(id).value = roll;
    console.log("Roll " + dice + ": " + roll)
}

// roll dice on enter
document.onkeydown = function(e){
    console.log(e.keyCode)
    if(e.keyCode == 13){
      rollDice(1);
      rollDice(2);
    }
    else if(e.keyCode == 83 && seizureMode == false){
        console.log("Seizure Mode activated");
        setInterval(colorFade, fadeRate);
        seizureMode = true;
    }
    else if(e.keyCode == 83 && seizureMode == true){
        console.log("Seizure Mode deactivated");
        clearInterval(colorFade);
        seizureMode = false;
        revertSeizureMode();
    }
 };

 function revertSeizureMode() {
    document.getElementById("dartboard-column").style.backgroundImage = "radial-gradient(rgba(73, 52, 52, 0.986),rgb(116, 84, 84))";
    document.getElementById("all").style.backgroundImage = "url(\"woodBackground.jpeg\")"


 }

 function colorFade(){
    if (color1 > 255){
        up1 = false;
        down1 = true;
    }
    else if (color1 <= colorLow){
        up1 = true;
        down1 = false;
    }
    if (color2 > 255){
        up2 = false;
        down2= true;
    }
    else if (color2 <= colorLow){
        up2 = true;
        down2 = false;
    }
    if (color3 > 255){
        up3 = false;
        down3 = true;
    }
    else if (color3 <= colorLow){
        up3 = true;
        down3 = false;
    }
    if (color4 > 255){
        up4 = false;
        down4 = true;
    }
    else if (color4 <= colorLow){
        up4 = true;
        down4 = false;
    }
    if (color5 > 255){
        up5 = false;
        down5 = true;
    }
    else if (color5 <= colorLow){
        up5 = true;
        down5 = false;
    }
    if ( color6 > 255){
        up6 = false;
        down6 = true;
    }
    else if (color6 <= colorLow){
        up6 = true;
        down6 = false;
    }

    if (down1){
     
        color1 = (color1 - color1Rate);
    }
    else if (up1) {
        color1 = (color1 + color1Rate);
    }
    if (down2){
        color2 = (color2 - color2Rate);
    }
    else if (up2) {
        color2 = (color2 + color2Rate);
    }
    if (down3){
        color3 = (color3 - color3Rate);
    }
    else if (up3) {
        color3 = (color3 + color3Rate);
    }
    if (down4){
        color4 = (color4 - color4Rate);
    }
    else if (up4) {
        color4 = (color4 + color4Rate);
    }
    if (down5){
        color5 = (color5 - color5Rate);
    }
    else if (up5) {
        color5 = (color5 + color5Rate);
    }
    if (down6){
        color6 = (color6 - color6Rate);
    }
    else if (up6) {
        color6 = (color6 + color6Rate);
    }

    // Color Fade Table
    document.getElementById("dartboard-column").style.backgroundImage =  "linear-gradient(90deg, rgb(" + color1 + ", " + color2 + ", " + color3 + "), rgb(" + color4 + ", " + color5 + ", " + color6 + ")";
    document.getElementById("all").style.backgroundImage =  "linear-gradient(90deg, rgb(" + color4 + ", " + color3 + ", " + color2 + "), rgb(" + color5 + ", " + color6 + ", " + color1 + ")";
        
}