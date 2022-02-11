<?php
include_once('matchStorage.php');
include_once('teamStorage.php');
$teamStorage = new TeamStorage();
$matchStorage = new MatchStorage();
$teams = $teamStorage->findAll();
$matches = $matchStorage->findAll();
foreach ($matches as $match) {
    if ($match['id'] == $_GET['id']) {
        $currentMatch = $match;
    }
}

function validate($input, &$data, &$errors)
{
    global $teams;
    global $currentMatch;
    //teamname ellenőrzés:
    if (!isset($input['home'])) {
      $errors['home'] = "Hiányzik a név!";
    } else if (trim($input['home'] === '')) {
      $errors['home'] = "Név megadása kötlező!";
    } else {
        $data['home']['name'] = $input['home'];
    }

    foreach ($teams as $team) {
        if ($team['name']==$input['home']) {
            $data['home']['id']=$team['id'];
        }
    }
    //awayname ellenőrzés:
    if (!isset($input['away'])) {
        $errors['away'] = "Hiányzik a név!";
      } else if (trim($input['home'] === '')) {
        $errors['away'] = "Név megadása kötlező!";
      } else {
          $data['away']['name'] = $input['away'];
      }

    foreach ($teams as $team) {
        if ($team['name']==$input['away']) {
            $data['away']['id']=$team['id'];
        }
    }
    if (!isset($input['date'])) {
        $errors['date'] = "Hiányzik a dátum!";
      } else if (trim($input['date'] === '')) {
        $errors['date'] = "Dátum megadása kötlező!";
      } else {
        $currentdate = date('Y-m-d');
        if ($currentdate>$input['date']) {
            if ($input['homeScore']=='') {
                $errors['homeScore'] = "Eredmeny megadása kötlező!";
            }
            else {
                $data['home']['score']=$input['homeScore'];
            }
            if ($input['awayScore']=='') {
                $errors['awayScore'] = "Eredmeny megadása kötlező!";
            }
            else {
                $data['away']['score']=$input['awayScore'];
            }
        } else {
            $data['home']['score']='null';
            $data['away']['score']='null';
        }
        
        $data['date']=$input['date'];
      }
    $data['id']=$currentMatch['id'];
    return count($errors) === 0;
}
$errors = [];
$data = [];
if (count($_POST) > 0) {
    if (validate($_POST, $data, $errors)) {
        $matchStorage->update($currentMatch['id'],$data);
        header("Location:index.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
</head>

<body>
    Home:
    <form action="" method="post" novalidate>
        <select name="home">
            <?php foreach ($teams as $team) : ?>
                <?php if ($currentMatch['home']['name'] == $team['name']) : ?>
                    <option value="<?= $team['name'] ?>" selected><?= $team['name'] ?></option>
                <?php else : ?>
                    <option value="<?= $team['name'] ?>"><?= $team['name'] ?></option>
                <?php endif ?>
            <?php endforeach ?>
        </select>
        <br>
        Away:
        <select name="away">
            <?php foreach ($teams as $team) : ?>
                <?php if ($currentMatch['away']['name'] == $team['name']) : ?>
                    <option value="<?= $team['name'] ?>" selected><?= $team['name'] ?></option>
                <?php else : ?>
                    <option value="<?= $team['name'] ?>"><?= $team['name'] ?></option>
                <?php endif ?>
            <?php endforeach ?>
        </select>
        <br>
        Végeredmény: <br>
        <input type="number" name="homeScore" value="<?= $currentMatch['home']['score'] ?>">:<input type="number" name="awayScore" value="<?= $currentMatch['away']['score'] ?>">
        <?php if (isset($errors['homeScore'])) : ?>
        <span class="error"><?= $errors['homeScore'] ?></span>
        <?php endif; ?>
        <?php if (isset($errors['awayScore'])) : ?>
        <span class="error"><?= $errors['awayScore'] ?></span>
        <?php endif; ?>
        <br>
        Dátum:
        <input type="date" name="date" value="<?= $currentMatch['date'] ?>">
        <?php if (isset($errors['date'])) : ?>
        <span class="error"><?= $errors['date'] ?></span>
        <?php endif; ?>
        <br>
        <button type="submit">Változtatás</button>
    </form>
</body>

</html>