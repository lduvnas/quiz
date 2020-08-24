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
    <div id="highScores" class="highscore__container">
      <h1 id="finalScore">High Scores</h1>
      <?php

require_once 'db.php';
$stmt = $db->prepare("SELECT * FROM high_score ORDER BY score DESC LIMIT 5");
$stmt->execute();

echo "<table id='highScoreList'> <tbody>";

while($row = $stmt->fetch(PDO::FETCH_ASSOC)) :
  $id    = htmlspecialchars($row['id']);
  $player = htmlspecialchars($row['player']);
  $score = htmlspecialchars($row['score']);


  ?>

<tr class="high-score">
<td><?php echo $player; ?></td> 
<td><?php echo $score; ?> points</td>
</tr>

  <?php
endwhile;

echo "</tbody></table>";?>
      <a class="btn" href="index.php">Go Home</a>
    </div>
  </div>
  <script src="scripts/highscores.js"></script>

</body>

</html>

