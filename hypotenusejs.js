const base=document.querySelector("#base");
const height=document.querySelector("#height");
const check=document.querySelector("#check");
var output=document.querySelector("#output-box");
var hypotenuse;
check.addEventListener("click", function findHypotenuse()
{
       hypotenuse=(base.value*base.value+height.value*height.value);
      hypotenuse=Math.sqrt(hypotenuse); 
     //console.log(hypotenuse);
   output.innerText=hypotenuse;
});