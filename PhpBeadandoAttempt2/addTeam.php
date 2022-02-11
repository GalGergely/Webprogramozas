<?php
include_once("teamStorage.php");
$teamStorage = new TeamStorage();
$teams = $teamStorage->findAll();

function validate($input, &$data, &$errors)
{

    //Név ellenőrzés:
    if (!isset($input['name'])) {
        $errors['name'] = "Hiányzik a név!";
    } else if (trim($input['name'] === '')) {
        $errors['name'] = "Név megadása kötlező!";
    } else {
        $data['name'] = $input['name'];
    }

    //Varos ellenőrzés:
    if (!isset($input['city'])) {
        $errors['city'] = "Hiányzik a város!";
    } else if (trim($input['city'] === '')) {
        $errors['city'] = "Város megadása kötlező!";
    } else {
        $data['city'] = $input['city'];
    }
    return count($errors) === 0;
}
$errors = [];
$data = [];
if (count($_POST) > 0) {
    if (validate($_POST, $data, $errors)) {
        $teamStorage->add($data);
        header("Location:addTeam.php");
        exit();
    }
}
if (isset($_GET['id'])) {
    global $teamStorage;
    $teamStorage->delete($_GET['id']);
    header("Location:addTeam.php");
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
        Csapat neve: <input type="text" name="name">
        <?php if (isset($errors['name'])) : ?>
        <span class="error"><?= $errors['name'] ?></span>
        <?php endif; ?>
        <br>
        Város: <input type="text" name="city">
        <?php if (isset($errors['city'])) : ?>
        <span class="error"><?= $errors['city'] ?></span>
      <?php endif; ?>
      <br>
        <button type="submit">Send</button>
    </form>
    <br>
    Eddigi Csapatok:
    <ul>
        <?php foreach ($teams as $team) : ?>
            <li> Név: <?= $team['name'] ?>, város: <?= $team['city'] ?> <a href="addTeam.php?id=<?= $team['id'] ?>">Torles</a> </li>
        <?php endforeach ?>
    </ul>
</body>

</html>