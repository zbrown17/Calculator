var num1,num2,result;
window.onload = function (){
}

function getNums(){
num1 = parseFloat(document.getElementById('number1').value);
num2 = parseFloat(document.getElementById('number2').value); 
}

function add(){
getNums();
    result = num1 + num2;
    document.getElementById('output').innerHTML = result;
}

function subtract(){
  getNums();  
    result = num1 - num2;
    document.getElementById('output').innerHTML = result;
}

function divide(){
  getNums(); 
    result = num1 / num2;
    document.getElementById('output').innerHTML = result;
}

function multi(){
   getNums();
    result = num1 * num2;
    document.getElementById('output').innerHTML = result;
}