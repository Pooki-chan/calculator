let operator="";
let operatorClicked=false;
let numberOne=""; 
let numberTwo="";
let input;
// give numbers to them and display and add an event listener to all boxex who are indexed here
const cont = document.querySelector("#container");
const display= document.querySelector(".box");


for (let i = 0; i < 10; i++) {
    const num = document.createElement("div");
    num.classList.add("int");
    num.textContent = `${i}`;
    cont.appendChild(num);
    num.addEventListener("click",function (){
    updatingDex=`${i}`;
    updateDisplay(updatingDex);
    });
}
//on operator button click we assign it a number and then pass onto operate function

function updateDisplay(value){
display.textContent=value;
// separate stuff
if (operatorClicked==true){
    numberTwo+=value;
}
else
{
    numberOne+=value;
}
}
function assignOperator(i){
operatorClicked=true;
operator=`${i}`;
operatorAss(operator);
}
const menuList=document.querySelectorAll(".menu");
for (let i=0;i<menuList.length;i++)
{
    menuList[i].addEventListener("click",function(event){
    assignOperator(i);
    });
    
}

//logic for operators
function add(a,b){
return Number(a)+Number(b);
}
function substract(a,b){
return a-b;
}function multiply(a,b){
return a*b;
}
function divide(a,b){
return a/b;
}
let result;
//operate function takes the operatir and gives it its function hte = should display result
switch (val){
        case '0':
            operator="=";
            display.textContent+="+";
            result=add(numberOne,numberTwo);
            break; 
        case '1':
            display.textContent+="-";break; 
        case '2':
            display.textContent+="*";break; 
        case '3':
            display.textContent+="/";break; 
        case '=':
            display.textContent=result;
}

function operatorAss(val){
        result=add(numberOne,numberTwo);
       
            // testing the = and it needs to calculate stuff actually
}
    

