//variables
const spinnerLoader = document.getElementById("spinnerLoader");
const question = document.getElementById("question");
const options = Array.from(
  document.getElementsByClassName("option__container__text")
);
const currentScore = document.getElementById("score");
const progressInfo = document.getElementById("progressInfo");
const progress = document.getElementById("progress");
const quiz = document.getElementById("quiz");
let activeQuestion = {};
let receivedAnswers = false;
let score = 0;
let questionCounter = 0;
let questionsAvailableArr = [];
let questionsArr = [];

fetch(
  "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple"
)
  .then(respons => {
    return respons.json();
  })
  .then(fetchedQuestions => {
    questionsArr = fetchedQuestions.results.map(fetchedQuestion => {
      const reformedQuestion = {
        question: fetchedQuestion.question
      };

      const answerOptions = [...fetchedQuestion.incorrect_answers];
      reformedQuestion.answer = Math.floor(Math.random() * 3) + 1;
      answerOptions.splice(
        reformedQuestion.answer - 1,
        0,
        fetchedQuestion.correct_answer
      );

      answerOptions.forEach((choice, index) => {
        reformedQuestion["choice" + (index + 1)] = choice;
      });

      return reformedQuestion;
    });

    quizStart();
  })
  .catch(error => {
    console.error(error);
  });

const correctScorePoints = 10;
const numberOfQuestions = 15;

quizStart = () => {
  questionCounter = 0;
  score = 0;
  questionsAvailableArr = [...questionsArr];
  fetchNewQuestion();
  quiz.classList.remove("hidden");
  spinnerLoader.classList.add("hidden");
};

fetchNewQuestion = () => {
  if (
    questionsAvailableArr.length === 0 ||
    questionCounter >= numberOfQuestions
  ) {
    localStorage.setItem("currentScore", score);

    return window.location.assign("final.php");
  }
  questionCounter++;
  progressInfo.innerText = `Question ${questionCounter}/${numberOfQuestions}`;

  progress.style.width = `${(questionCounter / numberOfQuestions) * 100}%`;

  const RandomQuestion = Math.floor(
    Math.random() * questionsAvailableArr.length
  );
  activeQuestion = questionsAvailableArr[RandomQuestion];
  question.innerHTML = activeQuestion.question;

  options.forEach(option => {
    const id = option.dataset["id"];
    option.innerHTML = activeQuestion["choice" + id];
  });

  questionsAvailableArr.splice(RandomQuestion, 1);
  receivedAnswers = true;
};

options.forEach(option => {
  option.addEventListener("click", e => {
    if (!receivedAnswers) return;

    receivedAnswers = false;
    const chosenOption = e.target;
    const chosenAnswer = chosenOption.dataset["id"];

    const addClass =
      chosenAnswer == activeQuestion.answer ? "correct" : "incorrect";

    if (addClass === "correct") {
      addScore(correctScorePoints);
    }

    chosenOption.parentElement.classList.add(addClass);

    setTimeout(() => {
      chosenOption.parentElement.classList.remove(addClass);
      fetchNewQuestion();
    }, 1000);
  });
});

addScore = number => {
  score += number;
  currentScore.innerText = score;
};
