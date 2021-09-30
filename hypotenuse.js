var sidesInput = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#button-Hypotenuse");
var outputAns = document.querySelector("#output");

hypotenuseBtn.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse (){
    var sum = sumOfSquares(Number(sidesInput[0].value) ,Number(sidesInput[1].value));    
    var hypotenuse = Math.sqrt(sum);
    outputAns.innerText = "Length of Hypotenuse is " + hypotenuse;
}

function sumOfSquares(num1,num2){
    var sum = num1*num1 + num2*num2;
   return sum;
}
