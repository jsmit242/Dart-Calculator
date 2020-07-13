var sum = 0;

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
    if(e.keyCode == 13){
      rollDice(1);
      rollDice(2);
    }
 };
