<?php 
include "data.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$_GET['id']?></title>
</head>
<body>
    <h1><?=$teams[$_GET['id']]['name']?></h1>
    <p>meccsei:</p>
    <?php foreach($matches as $match) : ?>
        <?php if($match['home']['id']==$_GET['id']) : ?>

            <?php if((int)$match['home']['score'] > (int)$match['away']['score']) : ?>
                <li style="background-color:green;"> 
                <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php elseif((int)$match['home']['score'] < (int)$match['away']['score']) : ?>
                <li style="background-color:red;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php elseif($match['home']['score']=='null') : ?>
                <li style="background-color:white;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php else : ?>
                <li style="background-color:yellow;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php endif ?>
        <?php endif ?>



        <?php if($match['away']['id']==$_GET['id']) : ?>
            <?php if((int)$match['away']['score'] > (int)$match['home']['score']) : ?>
                <li style="background-color:green;"> 
                <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php elseif((int)$match['away']['score'] < (int)$match['home']['score']) : ?>
                <li style="background-color:red;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php elseif($match['away']['score']=='null') : ?>
                <li style="background-color:white;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php else : ?>
                <li style="background-color:yellow;"> <?= $match['home']['id'] ?> vs <?= $match['away']['id'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php endif ?>
        <?php endif ?>
    <?php endforeach ?>
</body>
</html>