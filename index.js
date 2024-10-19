
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


startTimer();
