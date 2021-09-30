const quizform=document.querySelector(".quiz-form");
const check=document.querySelector("#check");
const output=document.querySelector("#output");
const correctAnswers=["90","right angled"];

function calculateScore()
{
       let score=0;
     let index=0;
       const formResult=new FormData(quizform);
       for(let value of formResult.values())
      {
               if(value==correctAnswers[index])
      {
             score++;

       }
       index++;
     }
     output.innerText="Your Score for today quiz is " +score;
         
}
check.addEventListener("click", calculateScore);