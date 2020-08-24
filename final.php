<?php require_once 'db.php';
error_reporting( error_reporting() & ~E_NOTICE );
if($_SERVER['REQUEST_METHOD'] === 'POST') :
  $scoreJSON = $_POST['currentScore'];
  $decodedScoreJSON = json_decode($scoreJSON, true);

  $sql = "INSERT INTO high_score (player, score)
          VALUES ( :player, :score ) ";

  $stmt = $db->prepare($sql);

  $player = htmlspecialchars_decode($_POST['player']);
  $score = htmlspecialchars($_POST['score']);
 
 
  $stmt->bindParam(':player' , $player );
  $stmt->bindParam(':score' , $score );
  
  $stmt->execute();

  header('Location:highscores.php');
endif;
?>

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
    <div id="end" class="wrapper">
      <h3 id="endMessage">Nice work you got a total score of:</h3>
      <h1 id="scoreText"></h1>
      <form name="saveHighscore" action="#" method="POST" enctype="multipart/form-data" onsubmit="return validateForm()" >
        <input type="text" name="player" id="playerName" placeholder="username" required />

<p id="errorMessage"></p>
    
        <input type="hidden" id="score" name="score" value="<script>currentScore<script>">
        <button type="submit" class="btn" onclick="setValue()">
          Save
        </button>
     
      </form>
      <a class="btn" href="quiz.php">Play Again</a>
      <a class="btn" href="index.php">Go Home</a>
    </div>
  </div>
  <script src="scripts/final.js"></script>

</body>

</html>