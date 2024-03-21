function displayResult(n){
    display.value+=n
}

function allClear(){
    display.value=""
}

function deleteElement(){
    
    display.value=display.value.slice(0,-1); 
}

function resultPrint(){
    display.value=eval(display.value)
}