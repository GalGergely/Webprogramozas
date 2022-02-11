<?php 
include "data.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listaoldal</title>
</head>
<body>
    <h1>Cím</h1>
    <p>rövid ismertetés</p>
    <p>A résztvevő csapatok listája</p>
    <ul>
        <?php foreach($teams as $team) : ?>
            <li> <a href="csapatreszletek.php?id=<?= $team['id'] ?>"> <?= $team['name'] ?> </a> </li>
        <?php endforeach ?>
    </ul>
    <p>5 legutobbi meccs</p>
    <ul>
        <?php $counter=0 ?>
        <?php foreach($matches as $match) : ?>
            <?php $counter++ ?>
            <li> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
            <?php if($match['home']['score']=='null') : ?>
               not yet palyed </li>
            <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
            <?php endif ?>
            <?php if($counter == 5) : ?>
               <?php break; ?>
            <?php endif ?>
        <?php endforeach ?>
    </ul>
</body>
</html>