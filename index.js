let timeLeft = 10;
const timerElement = document.getElementById('timer');
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function startTimer() {
    timeLeft = 10;  
    timerElement.textContent = timeLeft;  
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up! Please submit your answer.");
            
        }

    }, 1000);
}
function checkAnswer(selectedAnswer,correctAnswer) {
  if (selectedAnswer === correctAnswer) {
      alert("Correct!");
  } else {
      alert("Incorrect. The correct answer was: " + correctAnswer);
  }
}

function start() {
    const questionBar = document.querySelector("#questionb");
    const Option1 = document.querySelector("#option1");
    const Option2 = document.querySelector("#option2");
    const Option3 = document.querySelector("#option3");
    const Option4 = document.querySelector("#option4");

    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
        .then((response) => response.json())
        .then((data) => {
            const questionData = data.results[getRandomNumber()];

            
            questionBar.textContent = questionData.question;

           
            const answers = [
                questionData.correct_answer,
                ...questionData.incorrect_answers,
            ];

            
            answers.sort(() => Math.random() - 0.5);

            
            Option1.innerText = answers[0];
            Option2.innerText = answers[1];
            Option3.innerText = answers[2];
            Option4.innerText = answers[3];

            Option1.onclick = () => {
              checkAnswer(Option1.innerText, questionData.correct_answer);
              start();  // Load a new question
          };
          Option2.onclick = () => {
              checkAnswer(Option2.innerText, questionData.correct_answer);
              start();  // Load a new question
          };
          Option3.onclick = () => {
              checkAnswer(Option3.innerText, questionData.correct_answer);
              start();  // Load a new question
          };
          Option4.onclick = () => {
              checkAnswer(Option4.innerText, questionData.correct_answer);
              start();  // Load a new question
          };

            
        })
        .catch((error) => {
            console.error("Error fetching the data: ", error);
        });
}


start();
