const history = document.querySelector('.history');
const number_input = document.querySelector('.number_input');
const tempHolder = document.querySelector('.tempHolder');

const operations = document.querySelectorAll('.operations');
const numbers = document.querySelectorAll('.number');

const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clearAll');

const equals = document.querySelector('.equals');

let dispNum1 = '';
let dispNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach(number => {
    number.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dispNum2 += e.target.innerText;
        number_input.innerText = dispNum2;
    })
});

operations.forEach(operation =>{
    operation.addEventListener('click', (e) =>{
        if(!dispNum2) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dispNum1 && dispNum2 && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dispNum2);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
});

function clearVar(name = '') {
    dispNum1 += dispNum2+ ' ' +name + ' ';
    history.innerText = dispNum1;
    dispNum2 = '';
    number_input.innerText = '';
    tempHolder.innerText = result;
}

function mathOperation() {
    if(lastOperation === '×'){
        result = parseFloat(result) * parseFloat(dispNum2);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dispNum2);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dispNum2);
    }else if(lastOperation === '÷'){
        result = parseFloat(result) / parseFloat(dispNum2);
    }if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dispNum2);
    }
}

equals.addEventListener('click', (e) => {
    if(!dispNum1 && !dispNum2) return;
    haveDot = false;
    mathOperation();
    clearVar();
    number_input.innerText = result;
    tempHolder.innerText = '';
    dispNum2 = result;
    dispNum1 = '';
})

clearAll.addEventListener('click', (e) =>{
    number_input.innerText = '0';
    history.innerText = '';
    tempHolder.innerText = '';

    dispNum1 = '';
    dispNum2 = '';
    result = '';
})

clear.addEventListener('click', (e) => {
    number_input.innerText = number_input.innerText.slice(0, -1);
    dispNum2 = number_input.innerText;
    if(dispNum2.length < 1){
        number_input.innerText = '0';
        dispNum2 = '';
    }
})