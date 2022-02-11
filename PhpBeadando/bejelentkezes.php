<?php
include_once("exaplestorage.php");
    //phpinfo(); - Kiírja a verziókat!
    function validate($input, &$data, &$errors, &$storage) : bool {
        
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
        } else if(trim($input['password'] === '')) {
            $errors['password'] = "Jelszó megadása kötlező!";
        } else {
            $password = trim($input['password']);
            $data['password']=$password;

            $cpystorage=$storage->findAll();
            $registrated=false;

            foreach ($cpystorage as $iamnotcreative) {
                if($iamnotcreative['name']==$data['name']) {
                    $registrated=true;
                    if($iamnotcreative['password']==$data['password']) {

                    } else {
                        $errors['idk'] = "A jelszo nem megfelelo";
                    }
                }
            }
            if($registrated==false) {
                $errors['idk'] = "Nincs ilyen felhasznalo";
            }
        }

        return count($errors) === 0;
    }

    $data = [];
    $errors = [];
    $storage = new FootballStorage();

    if(count($_GET) > 0){
        if(validate($_GET, $data, $errors, $storage)){
            $message = "Minden adat rendben van, {$data['name']}!";
            print_r($data);
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
    <title>Bejelentkezés</title>
</head>
<body>
    <h1>Bejelentkezés</h1>
    <form action="" method="get">
        <?php if(isset($errors['idk'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['idk']?></p>
        <?php endif ?>
        Felhasználó név: <br><input type="text" name="name" value="<?= $_GET['name'] ?? '' ?>"><br>
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['name']?></p>
        <?php endif ?>
        jelszó: <br><input type="text" name="password" value="<?= $_GET['password'] ?? '' ?>">
        <?php if(isset($errors['name'])) :?>
            <p style="color: red; padding: 0px; margin: 0px;"><?= $errors['password']?></p>
        <?php endif ?>
        <br><button type="submit">Bejelentkezés</button>
    </form>
</body>
</html>