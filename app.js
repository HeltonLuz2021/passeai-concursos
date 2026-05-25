let score = 0;
let current = 0;

const questions = [
  {
    text: "A filiação ao RGPS ocorre automaticamente com atividade remunerada.",
    answer: "C"
  },
  {
    text: "O segurado facultativo não exerce atividade remunerada.",
    answer: "E"
  },
  {
    text: "A Constituição Federal é a norma suprema do Brasil.",
    answer: "C"
  },
  {
    text: "A interpretação de texto depende apenas do sentido literal das palavras.",
    answer: "E"
  }
];

function loadQuestion() {
  document.getElementById("questionBox").innerText =
    questions[current].text;
}

function answer(userAnswer) {
  if (userAnswer === questions[current].answer) {
    score++;
  }

  document.getElementById("score").innerText = score;
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    alert("Fim do simulado! Pontuação: " + score);
    current = 0;
    score = 0;
  }

  loadQuestion();
}

loadQuestion();
