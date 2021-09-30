var sidesInput = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#button-Hypotenuse");
var outputAns = document.querySelector("#output");

hypotenuseBtn.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse (){
    console.log("here");
    sumOfSquares(4,5);

}

function sumOfSquares(num1,num2){
    var sum = num1*num1 + num2*num2;
    console.log("here sos");
    console.log(sum);
}
