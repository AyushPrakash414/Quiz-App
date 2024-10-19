
let timeLeft = 10;
const timerElement = document.getElementById('timer');


function startTimer() {
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

       
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up! Please submit your answer.");
        }
    }, 1000);
}

  function start()
  {
    const questionBar=document.querySelector("#questionb");
    const Option1=document.querySelector("#option1");
    const Option2=document.querySelector("#option2");
    const Option3=document.querySelector("#option3");
    const Option4=document.querySelector("#option4");
    const ayush=fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
    .then((value1) => {
        return value1.json();
      })
      .then((value2) => {
        questionBar.textContent = value2.results[0].question;
        Option1.innerText=value2.results[0].correct_answer;
        Option2.innerText=value2.results[0].incorrect_answers[0];
        Option3.innerText=value2.results[0].incorrect_answers[1];
        Option4.innerText=value2.results[0].incorrect_answers[2];
      })
      .catch((error) => {
        console.error("Error fetching the data: ", error);
      });
  }
  start();