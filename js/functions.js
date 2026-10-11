// Näytetään vastaukset, kun käyttäjä painaa painiketta
const button = document.getElementById("showAnswers");

button.addEventListener("click", function () {
  const answers = document.querySelectorAll(".answer");
  answers.forEach(function (answer) {
    answer.classList.add("visible");
  });
});
