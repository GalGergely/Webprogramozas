<?php 
include_once('contactstorage.php');
// functions
// main
$data = [];
$errors = [];
$contactStorage = new ContactStorage();
if(count($_GET)!=0) {
  $contactStorage->delete($_GET['id']);
}
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
      $contactStorage = new ContactStorage();
      $contactStorage->add($data);
      header('Location: index.php');
      exit();
  }
}
$contacts = $contactStorage->findAll();

function getTheNotes($contacts) {
  $tmp=[];
  foreach ($contacts as $contact) {
    $tmp=$contact;
  }
  return $tmp;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3. feladat</title>
</head>
<body>
  <h1>3. feladat</h1>

  <h2>Űrlap</h2>
  <form action="" method="post">
        Kincs neve: <input type="text" name="nev"> <br>
        Kincs értéke: <input type="number" name="ertek"> <br>
        Kincs színe: <select name="color">
            <option value="piros">piros</option>
            <option value="narancs">narancs</option>
            <option value="sárga">sárga</option>
            <option value="zöld">zöld</option>
            <option value="kék">kék</option>
            <option value="lila">lila</option>
        </select> <br>
        <input type="radio" name="megtarte" value="true">megtart
        <input type="radio" name="megtarte" value="false">eladomanyoz
        <br>
        <button type="submit">Mentes</button>
    </form>

  <h2>Kincslista</h2>
      <table>
        <tr>
            <?php foreach (getTheNotes($contacts) as $name => $value) : ?>
                <th><?= $name ?></th>
            <?php endforeach ?>
        </tr>
        <?php foreach ($contacts as $id => $contact) : ?>
        <tr>
            <?php foreach ($contact as $name) : ?>
                <td><?= $name ?></td>
            <?php endforeach ?>
            <td><a href="index.php?id=<?= $id ?>">Torol</a></td>
        </tr>
        <?php endforeach ?>
    </table>
</body>
</html>