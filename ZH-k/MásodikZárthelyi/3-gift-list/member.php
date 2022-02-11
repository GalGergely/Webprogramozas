<?php
include_once('contactstorage.php');
include_once('ideastorage.php');
$data = [];
$errors = [];
function validate($post, &$data, &$errors) {
  $data = $post;
  // ...
  return count($errors) === 0;
}
if (count($_POST) > 0) {    
  if (validate($_POST, $data, $errors)) {
      // Beolvasás: $data
      // ...
      print_r($data);
      // Feldolgozás
      $ideaStorage = new ideastorage();
      $ideaStorage->add($data);
      header('Location: index.php');
      exit();
  }
}

$ideaStorage2 = new ideastorage();

$family = $ideaStorage2->findAll();

$id = $_GET["id"];
$ideas=[];
foreach ($family as $key => $value) {
  if ($value['member']==$id) {
    array_push($ideas, $value['idea']);
  }
}

function returnName($id) {
  if($id==1){
    return "My dear father";
  }
  if($id==2){
    return "My dear mother";
  }
  if($id==3){
    return "Loved grandpa";
  }
  if($id==4){
    return "Heartful grandma";
  }
  if($id==5){
    return "My cute sister";
  }
  if($id==6){
    return "Protective brother";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gift list</title>
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <h1>Ideas for <?= returnName($id) ?></h1>
  <a href="index.php">Back to main page</a>
  <form action="" method="post">
    <fieldset>
      <legend>New idea</legend>
      Idea: <input type="text" name="idea" required> <br>
      <input name="member" value="<?= $id ?>" hidden>
      <button name="status" type="submit" value="new">Add new idea</button>
    </fieldset>
  </form>
  <ul>
    <?php foreach ($ideas as $idea) : ?>
      <li class="<?= $string ?>">
        <?= $idea ?>
        <form action="" method="post">
          <input type="hidden" name="idea-id" value="idea1-id">
          <button type="submit" name="function-ok">Got it!</button>
          <button type="submit" name="function-discard">Discard it!</button>
        </form>
      </li>
    <?php endforeach ?>
  </ul>
</body>

</html>