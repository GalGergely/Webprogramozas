<?php
include('storage.php');
include('auth.php');
include('userstorage.php');

// functions
function validate($post, &$data, &$errors) {
  // username, password not empty
  // ...
  $data = $post;

  return count($errors) === 0;
}
function redirect($page) {
  header("Location: ${page}");
  exit();
}

// main
session_start();
$user_storage = new UserStorage();
$auth = new Auth($user_storage);
$data = [];
$errors = [];
if (count($_POST) > 0) {
  if (validate($_POST, $data, $errors)) {
    $auth_user = $auth->authenticate($data['username'], $data['password']);
    if (!$auth_user) {
      $errors['global'] = "Login error";
    } else {
      $auth->login($auth_user);
      redirect('index.php');
    }
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mystyle.css">
  <title>Belépés</title>
</head>
<body>
<header>
    <button  onclick="window.location.href = 'index.php';">Főoldal</button>
  <h1>Belépés</h1>
  </header>
<br>
  <?php if (isset($errors['global'])) : ?>
    <p><span class="error"><?= $errors['global'] ?></span></p>
  <?php endif; ?>
  <form action="" method="post">
    <div>
      <label for="username">Felhasználónév: </label><br>
      <input type="text" name="username" id="username" value="<?= $_POST['username'] ?? "" ?>">
      <?php if (isset($errors['username'])) : ?>
        <span class="error"><?= $errors['username'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <label for="password">Jelszó: </label><br>
      <input type="password" name="password" id="password">
      <?php if (isset($errors['password'])) : ?>
        <span class="error"><?= $errors['password'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <button type="submit">Belépek</button>
    </div>
  </form>
</body>
</html>