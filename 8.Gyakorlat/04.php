<?php
//Írd ki a "Hello világ!" szöveget 10-szer folyamatosan növekedő méretben!


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4-es feladat</title>
</head>
<body>
    <?php for ($i= 1; $i <= 10; $i++) : ?> 
        <p <?= "style = \"font-size: " . $i*10 . "px\""?>>Hello World!</p>
    <?php endfor ?>
</body>
</html>
