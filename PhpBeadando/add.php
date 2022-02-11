<?php
include_once("exaplestorage.php");
    //phpinfo(); - Kiírja a verziókat!
    function validate($input, &$data, &$errors) : bool {
        
        //Név ellenőrzés:
        if(!isset($input['name'])) {
            $errors['name'] = "Hiányzik a név!";
        } else if(trim($input['name'] === '')) {
            $errors['name'] = "Név megadása kötlező!";
        } else {
            $name = trim($input['name']);
            $data['name'] = $name;
        }

        //jelszo ellenőrzés:
        if(!isset($input['password'])) {
            $errors['password'] = "Hiányzik a jelszó!";
        } else if(!isset($input['password2'])) {
            $errors['password2'] = "Hiányzik a jelszó megisétlése!";
        } else if(trim($input['password'] === '')) {
            $errors['password'] = "Jelszó megadása kötlező!";
        } else if(trim($input['password2'] === '')) {
            $errors['password2'] = "Jelszó ismétlés megadása kötlező!";
        } else {
            if($input['password']!=$input['password2']) {
                $errors['password2'] = "Jelszavak nem egyeznek";
            }
            else{
                $name = trim($input['password']);
                $data['password'] = $name;
            }
        }

        //Email
        if(!isset($input['email'])){
            $errors['email'] = "Hiányzik a email cím!";
        } else if(trim($input['email'] === '')){
            $errors['email'] = "email cím megadása kötlező!";
        } else if(!preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $input['email'])){
            $errors['email'] = "Az email cím rossz formátumban let megadva!";
        } else {
            $data['email'] = $input['email']; 
        }

        return count($errors) === 0;
    }

    $data = [];
    $errors = [];

    if(count($_GET) > 0){
        if(validate($_GET, $data, $errors)){
            $message = "Minden adat rendben van, {$data['name']}!";
            print_r($data);
            // Feldolgozás
            $storage = new FootballStorage();
            $storage->add($data);
            header('Location: bejelentkezes.php');
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
    <title>Regisztracio</title>
</head>
<body>
    <?php if (isset($message)) : ?>
        <div><?= $message?></div>
    <?php endif ?>
    <h1>Regisztráció</h1>
    <?php if (count($errors) > 0) : ?>
        <ul>
            <?php foreach ($errors as $error) : ?>
            <li><?= $error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
    <form action="" method="get">
        Felhasználó név: <br><input type="text" name="name" value="<?= $_GET['name'] ?? '' ?>">
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['name']?></p>
        <?php endif ?>
        <br>
        Email: <br>
            <input type="email" name="email" placeholder="asd123@yourmum.cum" value="<?= $_GET['email'] ?? '' ?>"><br>
        <?php if(isset($errors['email'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['email']?></p>
        <?php endif ?>
        jelszó: <br><input type="text" name="password" value="<?= $_GET['password'] ?? '' ?>">
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['password']?></p>
        <?php endif ?>
        <br>
        jelszó ismét: <br><input type="text" name="password2" value="<?= $_GET['password2'] ?? '' ?>">
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['password2']?></p>
        <?php endif ?>
        <br>
        <br>
        <br><button type="submit">Regisztráció</button>
    </form>
</body>
</html>