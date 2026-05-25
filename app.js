let score = 0;
let current = 0;
let canAnswer = true;

const questions = [
  {
    subject: "Portugues",
    text: "A interpretação de texto depende apenas do sentido literal.",
    answer: "E",
    explanation: "Interpretação depende de contexto e inferência, não só sentido literal."
  },
  {
    subject: "Previdenciario",
    text: "A filiação ao RGPS ocorre automaticamente com atividade remunerada.",
    answer: "C",
    explanation: "Sim, a filiação ocorre automaticamente quando há atividade remunerada."
  },
  {
    subject: "Informatica",
    text: "O Windows é um sistema operacional.",
    answer: "C",
    explanation: "O Windows é um sistema operacional da Microsoft."
  }
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("questionBox").innerHTML = `
    <h4>${q.subject}</h4>
    <p>${q.text}</p>
  `;

  canAnswer = true;
}

function answer(userAnswer) {
  if (!canAnswer) return;
  canAnswer = false;

  const q = questions[current];

  let msg = "";

  if (userAnswer === q.answer) {
    score++;
    msg = "✔ Correto!\n\n" + q.explanation;
  } else {
    msg = "❌ Errado!\n\nResposta correta: " + q.answer + "\n\n" + q.explanation;
  }

  alert(msg);

  document.getElementById("score").innerText = score;

  setTimeout(nextQuestion, 700);
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    alert(
      "Fim do simulado!\n\nVocê acertou " +
      score +
      " de " +
      questions.length
    );

    current = 0;
    score = 0;
  }

  loadQuestion();
}

loadQuestion();
