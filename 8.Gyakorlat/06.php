<?php 
    //bemenet
    $number = [2,4,5,6];
    foreach ($number as $key) {
        //echo($key);
    }
    $rec = [
        "elso" => "alma",
        "masodik" => "körte"
    ];
    foreach ($rec as $key => $value) {
       // echo($key . " - " . $value);
    }
    //(class) 
    $categories = [
        [
            "id" => 5,
            "name" => "Action"
        ],
        [
            "id" => 4,
            "name" => "Drama"
        ],
        [
            "id" => 3,
            "name" => "Crime"
        ],
        [
            "id" => 2,
            "name" => "Horror"
        ],
        [
            "id" => 1,
            "name" => "Sci-Fi"
        ],
        [
            "id" => 0,
            "name" => "Thriller"
        ]
    ];

    //feldolgozás

    //kiírás


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>6-os feladat</title>
</head>
<body>
    <form action="">
        <select name="category">
            <?php foreach ($categories as $cat) : ?>
                <option value= <?= $cat['id']?> > <?= $cat['name']?> </option>
            <?php endforeach ?>
        </select>
        <button type="submit">Send</button>
    </form>    
</body>
</html>