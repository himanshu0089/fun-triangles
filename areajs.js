const base=document.querySelector("#base");
const height=document.querySelector("#height");
const check=document.querySelector("#check");
var output=document.querySelector("#output-box");
var area;
check.addEventListener("click", function findarea()
{
      var base1=Number(base.value);
      var height1=Number (height.value);
       area=(base1*height1)/2; 
       console.log(area);
    output.innerText=area;
});