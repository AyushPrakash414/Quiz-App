// Set the initial time for the countdown
let timeLeft = 10;
const timerElement = document.getElementById('timer');

// Function to handle the countdown
function startTimer() {
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // Check if the time has run out
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up! Please submit your answer.");
        }
    }, 1000);
}

// Start the timer when the page loads
startTimer();
