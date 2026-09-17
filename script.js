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
// display and value management
function updateDisplay(value){
display.textContent+=value;
// separate stuff
if (operatorClicked==true){
    numberTwo+=value;
}
else
{
    numberOne+=value;
}
}

//operator menu
const menuList=document.querySelectorAll(".menu");
for (let i=0;i<menuList.length;i++)
{
    menuList[i].addEventListener("click",function(event){
    assignOperator(i);
    });
    
}

function assignOperator(i){
operatorClicked=true;//this is crutial
operator=`${i}`;/// this gives them index
operatorAss(operator);
}

let temp;
function operatorAss(val){
       switch (val){
        case '0':
            display.textContent+="+";
            temp="+";
            break; 
        case '1':
            display.textContent+="-";
            temp="-";
            break; 
        case '2':
            display.textContent+="*";
            temp="*";
            break; 
        case '3':
            display.textContent+="/";
            temp="/";
            break; 
        case '4':
           actionMain(numberOne,numberTwo,temp);
           display.textContent=result;
        break;
           
}
}
function actionMain(valueOne,valueTwo,opt){
    switch(opt){
        case '+':
            result=add(valueOne,valueTwo);
        break;
        case '-':
            result=substract(valueOne,valueTwo);
        break;
        case '*':
            result=multiply(valueOne,valueTwo);
        break;
        case '/':
            result=divide(valueOne,valueTwo);
        break;
    }
    console.log(result);
    numberOne=result;
    numberTwo=" ";
    }

//logic for finction
function add(a,b){
return Number(a)+Number(b);
}
function substract(a,b){
return Number(a)-Number(b);
}
function multiply(a,b){
return Number(a)*Number(b);
}
function divide(a,b){
return Number(a)/Number(b);
}
let result;



