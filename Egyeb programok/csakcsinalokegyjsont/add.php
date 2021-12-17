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
            if(strstr($name, " ") === false){
                $errors['name'] = "Két név kell!";
            } else {
                $data['name'] = $name;
            }
        }

        //TAJ szám ellenőrzés:
        if(!isset($input['taj'])){
            $errors['taj'] = "Hiányzik a TAJ szám!";
        } else if(trim($input['taj'] === '')){
            $errors['taj'] = "TAJ szám megadása kötlező!";
        } else if(!preg_match('/^[0-9]{3} [0-9]{3} [0-9]{3}$/', $input['taj'])){
            $errors['taj'] = "A TAJ szám rossz formátumban let megadva!";
        } else {
            $data['taj'] = $input['taj']; 
        }

        //Dátum ellenőrzés:
        if(!isset($input['date'])) {
            $errors['date'] = "Hiányzik az utolsó oltás dátuma!";
        } else if($input['date'] === ''){
            $errors['date'] = "Dátum megadása kötlező!";
        } else if(strtotime($input['date']) === false){
            $errors['date'] = "Rossz dátum formátum lett megadva!";
        } else {
            $date = strtotime($input['date']);
            $now = strtotime('now');
            if($now - $date < 4*30*24*60*60){
                $errors['date'] = "Nem telt el 4 hónap!";
            } else {
                $data['date'] = $input['date'];
            }
        }

        //Oltás típus ellenőrzés: //Selection
        if(!isset($input['type'])) {
            $errors['type'] = "Hiányzik az oltás típusa!";
        } else if($input['type'] === '-'){
            $errors['type'] = "Oltás típus megadása kötlező!";
        } else {
            $data['type'] = $input['type'];
        }

        //Checkbox:
        if(!isset($input['agree'])) {
            $errors['agree'] = "Hozzájárulás kötelező az űrlap elküldéséhez!";
        } else {
            $data['agree'] = true;
        }

        //Radio button:
        if(!isset($input['sex'])) {
            $errors['sex'] = "A nem megadása kötelező";
        } else {
            $data['sex'] = $input['sex'];
        }

        //Telefonszám
            if(!isset($input['phone'])){
                $errors['phone'] = "Hiányzik a telefon szám!";
            } else if(trim($input['phone'] === '')){
                $errors['phone'] = "telefon szám megadása kötlező!";
            } else if(!preg_match('/^[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{4}$/', $input['phone'])){
                $errors['phone'] = "A telefon szám rossz formátumban let megadva!";
            } else {
                $data['phone'] = $input['phone']; 
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
            $storage = new ExampleStorage();
            $storage->add($data);
            header('Location: add.php');
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
    <title>8. - Feladat</title>
</head>
<body>
    <?php if (isset($message)) : ?>
        <div><?= $message?></div>
    <?php endif ?>
    <h1>Új oltás</h1>
    <?php if (count($errors) > 0) : ?>
        <ul>
            <?php foreach ($errors as $error) : ?>
            <li><?= $error?></li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
    <form action="" method="get">
        Név: <br><input type="text" name="name" value="<?= $_GET['name'] ?? '' ?>">
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['name']?></p>
        <?php endif ?>
        <br>
        Email: <br>
            <input type="email" name="email" placeholder="asd123@yourmum.cum" value="<?= $_GET['email'] ?? '' ?>"><br>
        <?php if(isset($errors['email'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['email']?></p>
        <?php endif ?>
        Telefon:<br> <input type="text" name="phone" placeholder="06301234567" value="<?= $_GET['phone'] ?? '' ?>"><br>
        <?php if(isset($errors['phone'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['phone']?></p>
        <?php endif ?>
        Sex: <br>
            <input type="radio" name="sex" value="male"> Male <br>
            <input type="radio" name="sex" value="female"> Female <br>
        <?php if(isset($errors['sex'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['sex']?></p>
        <?php endif ?>
        <br>TAJ: <br><input type="text" name="taj" placeholder="123 458 798" value="<?= $_GET['taj'] ?? '' ?>">
        <?php if(isset($errors['taj'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['taj']?></p>
        <?php endif ?>
        <br>Utolsó oltás időpontja: <br><input type="date" name="date" value="<?= $_GET['date'] ?? '' ?>">
        <?php if(isset($errors['date'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['date']?></p>
        <?php endif ?>
        <br>Oltás típusa:<br><select name="type">
            <option>-</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'AstraZeneca')) ? 'selected' : ''?>>AstraZeneca</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'Pfizer')) ? 'selected' : ''?>>Pfizer</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'Moderna')) ? 'selected' : ''?>>Moderna</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'Szputnyik V')) ? 'selected' : ''?>>Szputnyik V</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'Jhonson&Jhonson')) ? 'selected' : ''?>>Jhonson&Jhonson</option>
            <option <?= (isset($_GET['type']) && ($_GET['type'] === 'Sinofarm')) ? 'selected' : ''?>>Sinofarm</option>
        </select>
        <?php if(isset($errors['type'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['type']?></p>
        <?php endif ?>
        <br>Hozzájárulok az adatok kezeléséhez: <input type="checkbox" name="agree" <?= isset($_GET['agree']) ? 'checked' : ''?>>
        <?php if(isset($errors['agree'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['agree']?></p>
        <?php endif ?>
        <br><button type="submit">Ellenőrzés</button>
    </form>
</body>
</html>