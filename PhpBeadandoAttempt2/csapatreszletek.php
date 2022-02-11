<?php 
include_once('storage.php');
include_once('userstorage.php');
include_once('commentStrorage.php');
include_once('teamStorage.php');
include_once('matchStorage.php');
include_once('auth.php');

session_start();
$tmp="";
$auth = new Auth(new UserStorage());
$teamStorage=new TeamStorage();
$teams=$teamStorage->findAll();
$matchStorage=new MatchStorage();
$matches=$matchStorage->findAll();
$commentavailable="";
if (!$auth->is_authenticated()) {
    $commentavailable="disabled";
} else {
   $tmp=$auth->authenticated_user()['roles'];
}
$commentStorage = new CommentStorage();
$comments2=$commentStorage->findAll();
function validate($input, &$data, &$errors)
{

  //Név ellenőrzés:
  if (!isset($input['text'])) {
    $errors['text'] = "Hiányzik a szoveg!";
  } else if (trim($input['text'] === '')) {
    $errors['text'] = "Láttál már ures kommentet?!";
  } else {
    $data['text'] = $input['text'];
  }

  return count($errors) === 0;
}

$errors = [];
$data = [];

if (count($_POST) > 0) {
    if (validate($_POST, $data, $errors)) {
        $data['team']=$_GET['id'];
        $data['author']=$auth->authenticated_user()['name'];
        $asd=$_GET['id'];
        $commentStorage = new CommentStorage();
        $commentStorage->add($data);
        header("Location:csapatreszletek.php?id=${asd}");
    } else {
      print_r($errors);
    }
  }
if (isset($_GET['commentForDelete'])) {
    global $commentStorage;
    $commentStorage->delete($_GET['commentForDelete']);
    $asd=$_GET['id'];
    header("Location:csapatreszletek.php?id=${asd}");
    exit();
}
function del($commentID) {
global $commentStorage;
$commentStorage->delete($commentID);
$asd=$_GET['id'];
header("Location:csapatreszletek.php?id=${asd}");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Csapatok</title>
    <link rel="stylesheet" href="mystyle.css">
</head>
<body>
    <header>
    <button onclick="location.href='index.php'">Vissza</button>
    <h1><?=$teams[$_GET['id']]['name']?></h1>
    </header>
    <p>meccsei:</p>
    <div>
    <ul>
    <?php foreach($matches as $match) : ?>
        <?php if($match['home']['id']==$_GET['id']) : ?>
            <?php if((int)$match['home']['score'] > (int)$match['away']['score']) : ?>
                <li style="background-color:green;"> 
                <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php elseif((int)$match['home']['score'] < (int)$match['away']['score']) : ?>
                <li style="background-color:red;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php elseif($match['home']['score']=='null') : ?>
                <li style="background-color:white;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>

            <?php else : ?>
                <li style="background-color:yellow;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
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
                <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php elseif((int)$match['away']['score'] < (int)$match['home']['score']) : ?>
                <li style="background-color:red;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?>
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php elseif($match['away']['score']=='null') : ?>
                <li style="background-color:white;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['away']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php else : ?>
                <li style="background-color:yellow;"> <?= $match['home']['name'] ?> vs <?= $match['away']['name'] ?> , <?= $match['date'] ?> ,
                <?php if($match['home']['score']=='null') : ?>
                   not yet palyed </li>
                <?php else : ?> 
                <?= $match['home']['score'] ?>:<?= $match['away']['score'] ?> </li>
                <?php endif ?>
                
            <?php endif ?>
        <?php endif ?>
    <?php endforeach ?>
    </ul>
    </div>
    <br><br>
    <div>
    <form action="" method="post" novalidate>
    <input type="text" name="text" <?= $commentavailable ?> placeholder="ide ird a kommented">
    <button type="submit">kihányom az internetre</button>
    <br>
    <?php if(isset($errors['text'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['text']?></p> 
    <?php endif ?>
</form>
    </div>
<?php foreach($comments2 as $comment) : ?>
        <?php if($comment['team']==$_GET['id']) : ?>
            <p><?= $comment['author'] ?> : <?= $comment['text'] ?> 
            <?php if($tmp=="admin") : ?>
               <a href="csapatreszletek.php?id=<?= $_GET['id'] ?>&commentForDelete=<?=$comment['id']?>">Torles</a> <br>
            <?php endif ?>
            </p>
        <?php endif ?>
    <?php endforeach ?>
    
</html>