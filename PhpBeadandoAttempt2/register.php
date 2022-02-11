<?php
include('storage.php');
include('auth.php');
include('userstorage.php');

// functions
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

  //jelszo
  if (!isset($input['password'])) {
    $errors['password'] = "Hiányzik a jelszó!";
  } else if (trim($input['password'] === '')) {
    $errors['password'] = "Jelszó megadása kötlező!";
  } else if($input['password']!==$input['password2']) {
    $errors['password'] = "Nem egyezik meg a két jelszó";
  } else {
    $password = trim($input['password']);

    $data['password'] = $password;
  }
  //Email
  if (!isset($input['email'])) {
    $errors['email'] = "Hiányzik a email cím!";
  } else if (trim($input['email'] === '')) {
    $errors['email'] = "email cím megadása kötlező!";
  } else if (!preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $input['email'])) {
    $errors['email'] = "Az email cím rossz formátumban let megadva!";
  } else {
    $data['email'] = $input['email'];
  }
  print_r($data);
  return count($errors) === 0;
}
function redirect($page)
{
  header("Location: ${page}");
  exit();
}

// main
$user_storage = new UserStorage();
$auth = new Auth($user_storage);
$errors = [];
$data = [];
if (count($_POST) > 0) {
  if (validate($_POST, $data, $errors)) {
    if ($auth->user_exists($data['name'])) {
      $errors['global'] = "User already exists";
    } else {
      $auth->register($data);
      redirect('login.php');
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
  <title>Regisztáció</title>
</head>

<body>
  <header>
    <button  onclick="window.location.href = 'index.php';">Főoldal</button>
  <h1>Regisztáció</h1>
  </header>
  <?php if (isset($errors['global'])) : ?>
    <p><span class="error"><?= $errors['global'] ?></span></p>
  <?php endif; ?>
  <form action="" method="post">
    <div>
      <label for="name">Felhasználónév: </label><br>
      <input type="text" name="name" id="name" value="<?= $_POST['name'] ?? "" ?>">
      <span></span>
      <?php if (isset($errors['name'])) : ?>
        <span class="error"><?= $errors['name'] ?></span>
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
      <label for="password2">Jelszó újra: </label><br>
      <input type="password" name="password2" id="password2" value="<?= $_POST['password2'] ?? "" ?>">
      <?php if (isset($errors['password2'])) : ?>
        <span class="error"><?= $errors['password2'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <label for="email">Email: </label><br>
      <input type="text" name="email" id="email" value="<?= $_POST['email'] ?? "" ?>">
      <?php if (isset($errors['email'])) : ?>
        <span class="error"><?= $errors['email'] ?></span>
      <?php endif; ?>
    </div>
    <div>
      <button type="submit">Regisztálok</button>
    </div>
  </form>
  <script src="register.js"></script>
</body>

</html>