<?php
include_once('storage.php');
include_once('commentStrorage.php');
include_once('userstorage.php');
include_once('teamStorage.php');
include_once('auth.php');
include_once('matchStorage.php');


function redirect($page) {
  header("Location: ${page}");
  exit();
}

session_start();
$auth = new Auth(new UserStorage());
$teamStorage = new TeamStorage();
$matchStorage = new MatchStorage();
$matches= $matchStorage->findAll();
$teams2=$teamStorage->findAll();
$buttonallowed="";
$mianeved="null";
$logoutbutton="hidden";
if (!$auth->is_authenticated()) {
  $logoutbutton="hidden";
  $buttonallowed="";
} else {
  $szemetlada=$auth->authenticated_user()['roles'];
  $mianeved=$auth->authenticated_user()['name'];
  $logoutbutton="";
  $buttonallowed="hidden";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mystyle.css">
  <title>Contact manager</title>
</head>
<body>
  <header>
  <button onclick="location.href='login.php'" <?= $buttonallowed ?>>bejelentkezes</button>
  <button onclick="location.href='register.php'" <?= $buttonallowed ?>>regisztráció</button> 
  <button onclick="location.href='logout.php'" <?= $logoutbutton ?>>kijelentkezés</button> 
  <br>
  <?php if($mianeved!="null") : ?>
      <p class="headnemtom">Szia <?= $mianeved ?>! <br>
       Rang: <?= $szemetlada ?></p>
    <?php endif ?><br>
  <h1>Bundes Liga követő</h1>
  </header>
    <p>Ez egy remek és komoly oldal, amellyel a bundes liga meccseket követheti figyelemmel, aki akarja, meg aki nem!</p>
    
    <div><h2>A résztvevő csapatok listája</h2></div>
    <div>
    <ul>
        <?php foreach($teams2 as $team) : ?>
            <li> <a href="csapatreszletek.php?id=<?= $team['id'] ?>"> <?= $team['name'] ?> </a> </li>
        <?php endforeach ?>
    </ul>
    </div>
    <div><h2>5 legutobbi meccs</h2> <br></div>
    <div>
    <ul>
      <?php if(!isset($_GET['list'])) : ?>
        <?php $counter=0 ?>
        <?php foreach($matches as $match) : ?>
            <?php $counter++ ?>
            <li> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
            <?php if($match['home']['score']=='null') : ?>
               not yet palyed </li>
            <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
            <?php endif ?>
            <?php if($counter == 5) : ?>
               <?php break; ?>
            <?php endif ?>
        <?php endforeach ?>
        <a href="index.php?list=all">Mindet listázd</a>
      <?php else : ?>
        <?php foreach($matches as $match) : ?>
            <li> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
            <?php if($match['home']['score']=='null') : ?>
               not yet palyed
            <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> 
            <?php endif ?>
            <?php if( $szemetlada =='admin') : ?>
              <a href="editMatch.php?id=<?= $match['id'] ?>">Változtatás</a> </li>
            <?php endif ?>
        <?php endforeach ?>
        <br>
        <a href="index.php">Bezárás</a>
      <?php endif ?>
    </ul>
    </div>
    <?php if(isset($auth->authenticated_user()['roles'])) : ?>
      <?php if($szemetlada=$auth->authenticated_user()['roles']=="admin") : ?>
        <div>
          <h2>Admin funkciók: </h2>
        </div>
        <div>
        <a href="addMatch.php">Meccs hozzáadása</a> <br>
        </div>
        <div><a href="addTeam.php">Csapat hozzáadása</a></div>
        
      <?php endif ?>
    <?php endif ?>
    
</body>
</html>