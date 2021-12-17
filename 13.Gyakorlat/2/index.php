<?php

$text = 'Excellent!';
$from = 30; // 0-100
$to = 70; // 0-100
$border = true; // false
$gradient = 'linear'; // 'radial'
$colours = ['#ff00aa', '#347596', '#123456'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback text generator</title>
  <style>
  div {
    height: 200px;
    text-align: center;
    color: gold;
    text-shadow: 0 0 10px white;
    font-size: 50px;
    padding-top: 30px;
  }
  </style>
</head>
<body>
  <h1>Feedback text generator</h1>
  <form action="" method="get" novalidate>
    Text: <input type="text" name="text" value=""> <br>
    From: <input type="text" name="from" value="">% <br>
    To: <input type="text" name="to" value="">% <br>
    Border: <input type="checkbox" name="border" value="yes"> <br>
    Gradient: <input type="radio" name="gradient" value="radial"> circle
              <input type="radio" name="gradient" value="linear"> linear <br>
    Colours:
    <select name="colours[]" size="8" multiple>
      <option value="#AA3939" style="background-color: #AA3939">Color 1</option>
      <option value="#801515" style="background-color: #801515">Color 2</option>
      <option value="#AA6C39" style="background-color: #AA6C39">Color 3</option>
      <option value="#804515" style="background-color: #804515">Color 4</option>
      <option value="#226666" style="background-color: #226666">Color 5</option>
      <option value="#0D4D4D" style="background-color: #0D4D4D">Color 6</option>
      <option value="#2D882D" style="background-color: #2D882D">Color 7</option>
      <option value="#116611" style="background-color: #116611">Color 8</option>
    </select><br>
    <small>Use Ctrl to select multiple colours</small> <br>
    <button type="submit">Generate</button>
  </form>

  <h2>Feedback text</h2>
  <div style="
    margin-left: <?= $from ?>%;
    
    margin-right: calc(100% - <?= $to ?>%);
    
    <?php
    for($i = 0, $offset = 0; $i < count($colours); $i++, $offset += 100/(count($colours)-1)) {
      $colours[$i] = $colours[$i] . " " . $offset . "%";
    }
    ?>
    <?php if ($gradient === 'linear') : ?>
    background: linear-gradient(90deg, <?= implode(", ", $colours) ?>);
    <?php endif ?>
    
    <?php if ($gradient === 'radial') : ?>
    background: radial-gradient(circle, <?= implode(", ", $colours) ?>);
    <?php endif ?>
    
    <?php if ($border) : ?>
    border: 20px solid gold;
    <?php endif ?>
  ">
    <?= $text ?>
  </div>

  <h2>Examples for testing</h2>
  <p>
    <a href="?text=Great%21&from=20&to=60&border=yes&gradient=noplease&colours%5B%5D=%23AA3939&colours%5B%5D=%23AA6C39&colours%5B%5D=%23804515&colours%5B%5D=%230D4D4D&colours%5B%5D=%232D882D&colours%5B%5D=%23116611">Wrong gradient</a> <br>
  </p>
</body>
</html>