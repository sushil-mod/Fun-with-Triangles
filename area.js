var sideInput = document.querySelectorAll(".sides-of-triangle");
var areaBtn = document.querySelector("#calulate-area");
var outputArea = document.querySelector("#output");

areaBtn.addEventListener('click',calculateArea)

function calculateArea(){
    if()
    var area = (1/2)*Number(sideInput[0].value)*Number(sideInput[1].value);
    outputArea.innerText = "Area of a triangle is " + area ;
}