var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-answer");
var outputScore = document.querySelector("#output");
 
var answer = ["true","yes","5","6","45","6","30"];

submitBtn.addEventListener('click',clickHandlerForm)

function clickHandlerForm(){
let score=0;
let i=0;
var formInput=new FormData(quizForm);
for(let value of formInput.values()){
    console.log(value);
if(value === answer[i]){
    score+=1;
}
i+=1;
}
outputScore.innerText = "your score is " + score;
}

