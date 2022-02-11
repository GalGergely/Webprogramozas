<?php
include_once("matchStorage.php");
include_once("teamStorage.php");
$matchStorage = new MatchStorage();
$teamStorage = new TeamStorage();
$matches=$matchStorage->findAll();
$teams=$teamStorage->findAll();

function validate($input, &$data, &$errors)
{
    global $teams;
    $data['home']['name']=$input['home'];
    foreach ($teams as $team) {
        if ($team['name']==$input['home']) {
            $data['home']['id']=$team['id'];
        }
    }
    $data['away']['name']=$input['away'];
    foreach ($teams as $team) {
        if ($team['name']==$input['away']) {
            $data['away']['id']=$team['id'];
        }
    } 
    $currentdate = date('Y-m-d');
    if ($currentdate>$input['date']) {
        $data['home']['score']=$input['homeScore'];
        $data['away']['score']=$input['awayScore'];
    } else {
        $data['home']['score']='null';
        $data['away']['score']='null';
    }
    
    $data['date']=$input['date'];

    print_r($input['date']);

    
    return count($errors) === 0;
}
$errors = [];
$data = [];
if (count($_POST) > 0) {
    if (validate($_POST, $data, $errors)) {
        $matchStorage->add($data);
        header("Location:addMatch.php");
        exit();
    }
}
if (isset($_GET['id'])) {
    global $matchStorage;
    $matchStorage->delete($_GET['id']);
    header("Location:addMatch.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post">
        Otthon: <select name="home">
            <?php foreach($teams as $team) : ?>
                <option value="<?= $team['name'] ?>"><?= $team['name'] ?></option>
            <?php endforeach ?>
        </select>
        <br>    
        Idegenben: <select name="away">
            <?php foreach($teams as $team) : ?>
                <option value="<?= $team['name']?>"><?= $team['name'] ?></option>
            <?php endforeach ?>
        </select>
        <br>
        Végeredmény: <br>
        <input type="number" name="homeScore">:<input type="number" name="awayScore">
        <br>
        Dátum:
        <input type="date" name="date">
        <br>
        <button type="submit">Send</button>
    </form>
    Eddigi meccsek
    <ul>
    <?php foreach($matches as $match) : ?>
        <li>Otthon: <?= $match['home']['name'] ?>, Idegen: <?= $match['away']['name'] ?> Vegeredmeny: <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?>, Dátum:  <?= $match['date'] ?> <a href="addMatch.php?id=<?= $match['id'] ?>">Torles</a></li>
    <?php endforeach ?>
    </ul>
</body>
</html>