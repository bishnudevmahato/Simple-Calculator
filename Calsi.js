var buffer = '0';
let screen = document.querySelector("#screen");

let runningTotal = 0;
let previousOperator = null;

let buffer1 = '0';
let fullscreen = document.querySelector("#full-screen");



function buttonclick1(value){
    if(value === 'C'){
        buffer1 = '0';
    }
    else if(buffer1 === '0'){
        buffer1 = value;
    }
    else if(value === '←'){
        buffer1 = buffer;
    }
   else if(value != '='){
        buffer1= buffer1 +""+value;
    }
    else if(value === '='){
        buffer1 = buffer;
    }
    fulldisplay();
}

let b;

function buttonclick(value){
    if(value === '.'){
        var a = parseFloat(buffer).toFixed(2)
        buffer = parseFloat(a);
    }
    else if(isNaN(parseFloat(value))){
        handleSymbol(value);
        b = null;
    }

    else{
        handleNumber(value);
        // let value1 = Number.isInteger(buffer)
        // if(value1){
        //     buffer = buffer;
        // }
        // else{

        // }
        b = value;
    }
    display();
}

function handleNumber(number){

    if(buffer === '0'){
        buffer = number;
    }
    else{
        buffer += number;
        // let value1 = Number.isInteger(buffer)
        // if(value1){
        //     // buffer += number;
        //     console.log("hi");
        // }
        // else{
        //     // buffer = buffer + (number/10)
        //     console.log("hello");
        // }
    }
}
function handleMath(value){
    if(buffer === '0'){
        return;
    }
    const intbuffer = parseInt(buffer);
    if(runningTotal === 0){
       runningTotal = intbuffer;
    }
    else{
       flushOperation(intbuffer);
    }

previousOperator = value;
buffer = '0';
console.log((runningTotal));
}

function flushOperation(intbuffer){
    if(previousOperator ==='+'){
        runningTotal += intbuffer;
    }else if(previousOperator ==='-')
    {
        runningTotal -= intbuffer;
    }else if(previousOperator ==='*')
    {
        runningTotal *= intbuffer;
    }else if(previousOperator ==='÷')
    {
        runningTotal /= intbuffer;
    }
}

function handleSymbol(symbol){
    switch (symbol) {
        case 'C':
            buffer = '0';
            buffer1 = '0';
            break;
        case '=':
            if(previousOperator === null){
                return;
            }
            flushOperation(parseFloat(buffer));

            buffer = "" +runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1 && buffer1.length === 1){
                buffer = '0';
                buffer1 = 0;
            }
            else{
                buffer = buffer.substring(0,buffer.length-1);
                buffer1 = buffer1.substring(0,buffer1.length-1);
            }
            break;
        // case '.':        
        //         var a = parseFloat(buffer).toFixed(2)
        //         buffer = parseFloat(a);
        case '+':
        case '-':
        case '*':
        case '÷':
            handleMath(symbol);
            break;
        default:
            break;
    }
}

function inits(){
    // console.log("hi");
    document
    .querySelector("#calsi-buttons")
    .addEventListener("click", function(event){
        buttonclick(event.target.innerText);
        buttonclick1(event.target.innerText);
    });
}
inits();

function display(){
    screen.innerText = buffer;
}

function fulldisplay(){
    fullscreen.innerText = buffer1;
}

/*history javascript */

// let buffer2 = 0;
// let historyscreen = document.querySelector("#calsi-history");

// function historydisplay(){
//     historyscreen.innerText = fulldisplay();
// }