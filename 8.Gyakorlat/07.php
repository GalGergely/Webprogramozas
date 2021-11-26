<?php 
    $items = [
        [
            'id' => 23,
            'name' => 'Pendrive'
        ],
        [
            'id' => 24,
            'name' => 'SSD'
        ],
        [
            'id' => 25,
            'name' => 'HDD'
        ]
    ]
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>7 - feladat</title>
</head>
<body>
<?php foreach ($items as $item) : ?> 
        <p><?= $item['name']?></p>
    <?php endforeach ?>
</body>
</html>