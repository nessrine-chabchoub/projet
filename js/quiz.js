var correctAnswers = ["15", "Etats-Unis","Natation","Non","10 heures","Foot-ball","3 heures","Non","80 minutes","Toutes les réponses correctes"];
function showAnswer(questionNumber) {
  var answer = correctAnswers[questionNumber - 1];
  document.getElementById("answer" + questionNumber).innerHTML = "La réponse est " + answer + ".";
  document.getElementById("answer" + questionNumber).style.display = "block";
}

function checkAnswers() {
    var score = 0;
    for (var i = 1; i <= 10; i++) {
      var radios = document.getElementsByName("question" + i);
      for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked && radios[j].value == correctAnswers[i - 1]) {
          score++;
          break;
        }
      }
    }
    document.getElementById("score").innerHTML = "Vous avez " + score + " bonnes réponses sur 10.";
  }