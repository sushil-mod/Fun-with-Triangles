var angles = document.querySelectorAll(".angles-of-triangle");
var checkBtn = document.querySelector("#check-triangle");
var outputAns = document.querySelector("#output");

checkBtn.addEventListener('click',clickHandlerTriangle);

function clickHandlerTriangle(){
   var sum = calculateSum(angles[0].value,angles[1].value,angles[2].value);
   if(sum===180){
       outputAns.innerText="this is a triangle";
   }else{
       outputAns.innerText="this not form a triangle";
   }

}
 
function calculateSum(angle1,angle2,angle3){
var sum=Number(angle1)+Number(angle2)+Number(angle3);
return sum;
}

