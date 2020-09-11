var sum = 0;
var playerNumber = 1;

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
var fadeRate = 0.5;
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

    var roll1 = document.getElementById("dice1").value;
    var roll2 = document.getElementById("dice2").value;

    console.log(document.getElementById("gamesMenu").value == "roulette")
    if(document.getElementById("gamesMenu").value == "roulette"){
        highlightWedge(roll1,roll2);
    }

}

// roll dice on enter
document.onkeydown = function(e){
    if(e.keyCode == 49){
      rollDice(1);
    }
    else if(e.keyCode == 50){
        rollDice(2);
    }
    else if(e.keyCode == 13){
        addPlayer();
    }
    else if(e.keyCode == 83 && seizureMode == false){
        console.log("Seizure Mode activated");
        var seizure = setInterval(colorFade, fadeRate);
        seizureMode = true;
    }
    else if(e.keyCode == 83 && seizureMode == true){
        console.log("Seizure Mode deactivated");
        clearInterval(seizure);
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

function selectText(id) {
    console.log(id)
    const input = document.getElementById(id);
    input.focus();
    input.select();
  }

function addPlayer() {
    var table = document.getElementById("playerList");
    var tr = document.createElement("tr");
    name = document.getElementById("playerName").value;
    tr.id = "playerRow"+playerNumber
    table.appendChild(tr);
    console.log(name);
    
    var td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.id = "Player" + playerNumber;
    td1.className = "player"
    document.getElementById("Player" + playerNumber).innerHTML = name;
    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.id = "Score" + playerNumber;
    td2.className = "score"
    document.getElementById("Score" + playerNumber).innerHTML = 0;
    
    var td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.id = "Checkbox" + playerNumber;
    td3.className = "checkbox"

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "CheckboxInput"+playerNumber
    checkbox.value = "off"
    td3.appendChild(checkbox);
    playerNumber++;
}

function saveScore(){
    var score = 0;
    for (var i=1;i<playerNumber;i++){
        if (document.getElementById("CheckboxInput"+i) != null){
            if (document.getElementById("CheckboxInput"+i).checked == true){
                score = document.getElementById("Score"+i).innerHTML;
                document.getElementById("Score"+i).innerHTML = Number(document.getElementById("sumValue").value) + Number(score);
            }
        }
    }
}

function removePlayer(){
    var table = document.getElementById("playerList");
    for (var i=1;i<playerNumber;i++){
        if (document.getElementById("CheckboxInput"+i) != null){
            if (document.getElementById("CheckboxInput"+i).checked == true){
                tr = document.getElementById("playerRow"+i)
                table.removeChild(tr)
            }
        }
    }
}

function resetPlayer(){
    for (var i=1;i<playerNumber;i++){
        if (document.getElementById("CheckboxInput"+i) != null){
            if (document.getElementById("CheckboxInput"+i).checked == true){
                document.getElementById("Score"+i).innerHTML = 0;
            }
        }
    }
}

function highlightWedge(roll1,roll2){
    var tancells = document.getElementsByClassName("tancell");
    var blackcells = document.getElementsByClassName("blackcell");
    for (var i=0;i<10;i++){
        console.log(i)
        tancells[i].style.fill = "#F7E9CD";
        blackcells[i].style.fill = "#000000";
    }
    document.getElementById("s" + roll1).style.fill = "blue";
    document.getElementById("s" + roll2).style.fill = "purple";

    if (roll1 == roll2){
        document.getElementById("s" + roll1).style.fill = "gold";
    }
}
