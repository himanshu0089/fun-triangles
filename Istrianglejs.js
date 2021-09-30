var angle1=document.querySelector("#angle1");
var angle2=document.querySelector("#angle2");
var angle3=document.querySelector("#angle3");
const check=document.querySelector("#check");
var output=document.querySelector("#output-box");

var sum=0;
function sumofTriangle()
{
         var a=Number(angle1.value);
      var b=Number(angle2.value);
      var c=Number(angle3.value);
   sum=a+b+c;
      IsTriangle(sum);
      //console.log(sum);
}
function IsTriangle(sum)
{
      if(sum==180)
  {
       output.innerText=("The Angles given will make the Triangle");

  }
  else
  {
             output.innerText=("The Angles given will not make the Triangle");
  }
}
check.addEventListener("click", sumofTriangle);
