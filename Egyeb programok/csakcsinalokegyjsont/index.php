<?php
//read
include_once("exaplestorage.php");
$contactStorage = new ExampleStorage();

//read
$contacts = $contactStorage->findAll();
?>  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Menager</title>
</head>
<body>
<a href="add.php">Add contact!</a>
    <h1>Contacts</h1>
    <table>
        <tr>
        <?php foreach ($contacts as $contact) : ?>
        <tr>
            <?php foreach ($contact as $name => $value) : ?>
                <th><?= $name ?></th>
            <?php endforeach ?>
        </tr>
        <?php endforeach ?>
        </tr>
        <?php foreach ($contacts as $contact) : ?>
        <tr>
            <?php foreach ($contact as $name) : ?>
                <td><?= $name ?></td>
            <?php endforeach ?>
        </tr>
        <?php endforeach ?>
    </table>
</body>
</html>