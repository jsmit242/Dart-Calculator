var sum = 0;

function updateValue(wedgeValue){
    sum = sum + wedgeValue;
    document.querySelector("#sumValue").value = sum;
}

function clearValue(){
    sum = 0;
    document.querySelector("#sumValue").value = null;
}
