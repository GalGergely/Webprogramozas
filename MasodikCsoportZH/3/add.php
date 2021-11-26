<?php 
include_once('contactstorage.php');
// functions
function validate($post, &$data, &$errors) {
    $data = $post;
    $tmp = $data["country_code"] . $data["phone_number"];
        $data["phone_number"] = $tmp;
    // ...
    return count($errors) === 0;
}
// main
$data = [];
$errors = [];
if (count($_POST) > 0) {    
    if (validate($_POST, $data, $errors)) {
        // Beolvasás: $data
        // ...
        print_r($data);
        // Feldolgozás
        $contactStorage = new ContactStorage();
        $contactStorage->add($data);
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
    <title>Contact manager</title>
</head>
<body>
    <a href="index.php">Contacts!</a>
    <h1>Add new contact</h1>
    <form action="" method="post">
        Full name: <input type="text" name="fullname"> <br>
        Phone:
        <select name="country_code">
            <option value="+43">Austria</option>
            <option value="+36">Hungary</option>
        </select>
        <input type="text" name="phone_number">
        <br>
        <button type="submit">Save information</button>
    </form>
</body>
</html>