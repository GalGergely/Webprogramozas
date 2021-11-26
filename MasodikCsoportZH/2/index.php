<?php
$errors=[];
if(!isset($_GET['text'])) {
    $errors['text'] = "Hiányzik a string!";
} else if(!isset($_GET['length'])) {
    $errors['text'] = "Hiányzik a hosszusag!";
}else if($_GET['length']<0) {
    $errors['text'] = "Ervenytelen a hosszusag!";
}else if(!preg_match('/[0-9]{1}/',$_GET['length'])) {
    $errors["length"] = "Ne szamot irj";
}else if(strlen($_GET['text'])>$_GET['length']) {
    $newText=substr($_GET['text'],0,-(strlen($_GET['text'])-$_GET['length']));
    $newText.="...";
    print_r($newText);
} else{
    print_r($_GET['text']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.Feladat</title>
</head>
<body>
<?php foreach ($errors as $error) : ?>
        <li><?= $error ?></li>
<?php endforeach ?>
</body>
</html>