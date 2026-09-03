let operator;
let numberOne;
let numberTwo;
let index;
let operatorClicked=false;
let showString=" ";
let temp=" ";
// give numbers to them and display and add an event listener to all boxex who are indexed here
const cont = document.querySelector("#container");
for (let i = 0; i < 10; i++) {
    const num = document.createElement("div");
    num.classList.add("int");
    num.textContent = `${i}`;
    cont.appendChild(num);
    num.addEventListener("click",function (){
    const display= document.querySelector(".box");
    display.textContent+=`${i}`;// tius is a one line tast if forgto the namesss
    });
}
function clicked(){buttonClicked=true;}
// buttonValuo updater
function buttonsWork(){
let menus =Document.querySelectorAll(".menu");
for (let i=0;i<menus.lenght;i++)
{
    menus[i].addEventListener("click",function(){
        switch(menus[i]){
        case '0':
            operator="+"
              case '1':
                operator="-";
                  case '2':
                    operator="*";
                      case '3':
                        operator="/";
        }
    operatorClicked=true;
    })
}
// we need to access the elements and buttons somehow without all of them activating yk
}
//update velues on screen 
// stores indexes in a variable and adds them to an array
//then the array may be displayed
//everythime one clicks on the button the index should be added but only on the clicked button not the entire array like the lo
//should just go throught them not loop the code bruh 
// we have a loop that gives them their numbers lets say now we need smt that collects them 
//
    
//logic 
function add(a,b){
return a+b;
}
function substract(a,b){
return a-b;
}function multiply(a,b){
return a*b;
}
function divide(a,b){
return a/b;
}


//operate
function operate(operator,numberOne,numberTwo){
    switch (operator){
        case '+':
            add(numberOne,numberTwo);
        case '-':
            substract(numberOne,numberTwo);
        case '*':
            multiply(numberOne,numberTwo);
        case '/':
            divide(numberOne,numberTwo);
    }
}