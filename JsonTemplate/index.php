<?php
//read
include_once('contactstorage.php');
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
            <th>Name</th>
            <th>Phone</th>
            <th>Emails</th>
        </tr>
        <?php foreach ($contacts as $contact) : ?>
        <tr>
            <td><?= $contact['name'] ?></td>
            <td><?= $contact['phone'] ?></td>
            <td><?= implode(', ', $contact['email']) ?></td>
        </tr>
        <?php endforeach ?>
    </table>
</body>
</html>