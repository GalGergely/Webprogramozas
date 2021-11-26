<?php
include_once('contactStorage.php');
    print_r($_GET);
    print_r($_POST);

    // functions
    function validate($post, &$data, &$errors) {
        $data = $post;
        if(!isset($post['name'])){
            $errors['name'] = "Name is not set!";
        } else if(trim($post['name']) === ''){
            $errors['name'] = "Name is required!";
        } else {
            $data['name'] = $post['name'];
        }

        $errors['test'] = true;

        return count($errors) === 0;
    }
    // main
    $data = [];
    $errors = [];
    if (count($_POST) > 0) {
        if (validate($_POST, $data, $errors)) {
            print_r($data);
            $contactStorage = new ContactStorage();
            $contactStorage->add($data);
            header('Location: index.php'); // POST -> GET
            exit();
        } else {
            print_r($errors);
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
    <style>
        form span{
            color: red;
            font-size: smaller;
        }
    </style>
</head>
<body>
    <form action="" method="post" novalidate>
        Name: <br><input type="text" name="name" required value=<?= $_POST['name'] ?? '' ?>><br>
        <?php 
            if(isset($errors['name'])) : ?>
            <span><?= $errors['name']?></span><br>
        <?php endif ?>
        Email: <br><input type="email" name="email[]"><br>
               <input type="email" name="email[]"><br>
        Telefon:<br> <input type="text" name="phone"><br>
        Address: <br><input type="text" name="address"><br>
        Notes: <br><textarea name="note" cols="30" rows="10"></textarea><br>
        Sex: <br><input type="radio" name="sex" value="male"> Male
             <input type="radio" name="sex" value="female"> Female <br>
        <button>Save contact</button>
    </form>
</body>
</html>