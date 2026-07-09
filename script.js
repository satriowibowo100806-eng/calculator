const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    if(display.value==="") return;

    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";

        setTimeout(()=>{
            display.value = "";
        },1000);
    }
}

document.addEventListener("keydown",function(e){

    if(
        (e.key>='0' && e.key<='9') ||
        ['+','-','*','/','.','%'].includes(e.key)
    ){
        display.value += e.key;
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }

});