let interval;
let timeInSeconds;

function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  document.getElementById("timer").innerText = formattedTime;
}

function startTimer() {
  const minutesInput = parseInt(document.getElementById("timeInput").value, 10);

  if (isNaN(minutesInput) || minutesInput <= 0) {
    alert("Please enter a valid positive number for the timer in minutes.");
    return;
  }

  timeInSeconds = minutesInput * 60;

  interval = setInterval(function () {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
      document.body.style.backgroundColor = "#e74c3c";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  document.body.style.backgroundColor = "#3498db";
  document.getElementById("timer").innerText = "00:00";
}
