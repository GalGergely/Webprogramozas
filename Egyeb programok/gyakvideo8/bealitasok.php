<?php
$settings = [
    1 => [
        'name' => 'Setting 1',
        'options' => [
            'a' => false,
            'b' => true,
            'c' => false,
        ],
    ],
    2 => [
        'name' => 'Setting 2',
        'options' => [
            'd' => false,
            'e' => false,
            'f' => true,
        ],
    ],
]
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bealitasok</title>
</head>
<body>
    <?php foreach ($settings as $id => $setting) : ?>
        <h3><?= $setting['name'] ?></h3>
        <?php foreach ($setting['options'] as $option => $checked) : ?>
            <input type="radio" name="setting_<?= $id ?>" <?= $checked ? 'checked' : '' ?>><?= $option ?> <br>
        <?php endforeach ?>
    <?php endforeach ?>
</body>
</html>