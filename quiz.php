<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Quiz Time</title>
  <link rel="stylesheet" href="styles/style.css" />

</head>

<body>

  <div class="container">

    <div id="spinnerLoader"></div>
    <div id="quiz" class="hidden">
      <div class="quiz__info">
        <div id="quiz__info__item">
          <p id="progressInfo" class="quiz__info__progress-info">
            Question
          </p>
          <div id="progressBar">
            <div id="progress"></div>
          </div>
        </div>
        <div id="quiz__info__item">
         
          <p class="quiz__info__score-text">
            Score
          </p>
          <h1 class="quiz__info__main-text" id="score">
            0
          </h1>
        </div>
      </div>
      <h2 id="question"></h2>
      <div class="question__container">
        <div class="option__container">
          <p class="option__container__letter">A</p>
          <p class="option__container__text" data-id="1"></p>
        </div>
        <div class="option__container">
          <p class="option__container__letter">B</p>
          <p class="option__container__text" data-id="2"></p>
        </div>
        <div class="option__container">
          <p class="option__container__letter">C</p>
          <p class="option__container__text" data-id="3"></p>
        </div>
        <div class="option__container">
          <p class="option__container__letter">D</p>
          <p class="option__container__text" data-id="4"></p>
        </div>
      </div>
    </div>
  </div>


  <script src="scripts/quiz.js"></script>
</body>

</html>