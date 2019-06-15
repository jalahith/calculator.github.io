console.log("Inside Main");


var result = "";

function dis(x){
    console.log(x.value);
    addToResult(x.value);
}

function addToResult(char){
    result = result + char;
    document.getElementById("result").value = result;
}

function clr(){
    result = "";
    document.getElementById("result").value = result;

}
function backspace(){
    console.log("backspace");
    result = result.substring(0, result.length-1);
    document.getElementById("result").value = result;
    
}
function equal(){
    console.log("evaluating");
    result = eval(result);
    document.getElementById("result").value = result;
}
