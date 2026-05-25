let score = 0;
let current = 0;
let answered = false;

const questions = [
  {
    text: "A filiação ao RGPS ocorre automaticamente com atividade remunerada.",
    answer: "C"
  },
  {
    text: "O segurado facultativo exerce atividade remunerada.",
    answer: "E"
  },
  {
    text: "A Constituição Federal é a norma suprema do Brasil.",
    answer: "C"
  }
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("questionBox").innerHTML = `
    <p>${q.text}</p>
  `;

  answered = false;
}

function answer(userAnswer) {
  if (answered) return;

  const q = questions[current];
  answered = true;

  if (userAnswer === q.answer) {
    score++;
    alert("✔ Correto!");
  } else {
    alert("❌ Errado!");
  }

  document.getElementById("score").innerText = score;

  setTimeout(nextQuestion, 800);
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
