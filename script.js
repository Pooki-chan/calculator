let operator;
let numberOne;
let numberTwo;
let operatorClicked=false;
let input;
// give numbers to them and display and add an event listener to all boxex who are indexed here
const cont = document.querySelector("#container");
for (let i = 0; i < 10; i++) {
    const num = document.createElement("div");
    num.classList.add("int");
    num.textContent = `${i}`;
    cont.appendChild(num);


    num.addEventListener("click",function (){
    const display= document.querySelector(".box");
    display.textContent+=`${i}`;

    // these divs dont exist so does their index
    input=display.textContent;
    // separates numbers
    if(operatorClicked=false){
    numberOne=input;
    }
    else{
    numberTwo=input;
    }
    });
  

}
//on operator button click we assign it a number and then pass onto operate function

function assignOperator(i){
operatorClicked=true;
    operator=`${i}`;
    operate(operator,numberOne,numberTwo);
}


const menuList=document.querySelectorAll(".menu");

for (let i=0;i<menuList.length;i++)
{
    menuList[i].addEventListener("click",function(event){
    assignOperator(i);
    });
    
}




    
const display= document.querySelector(".box");
//logic for operators
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

//operate function takes the operatir and gives it its function hte = should display result
function operate(operator,numberOne,numberTwo){
    switch (operator){
        case '1':
            display.textContent+="+";
            add(numberOne,numberTwo);break; 
        case '2':
            substract(numberOne,numberTwo);break;
        case '3':
            multiply(numberOne,numberTwo);break;
        case '4':
            divide(numberOne,numberTwo);break;
        case '5':
            display.textContent=`test`;
            console.log("test"); 
            
            // testing the = and it needs to calculate stuff actually
    }
}
    