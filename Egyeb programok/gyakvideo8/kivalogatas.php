<?php
declare(strict_types=1);

function filter(array $x, callable $fn) : array {
    $result = [];
    foreach ($x as $e) {
        if($fn($e)) {
            $result[] = $e;
        }
    }
    return $result;
}

$numbers = [1,-4, 6,-3,2,-7,-15];
$negative = filter($numbers, function($e) {
    return $e <0;
});
//print_r($negative);

$limit = -5;
$negative = array_filter($numbers,function($e) use ($limit){
    return $e < $limit;
});
//print_r($negative);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter</title>
</head>
<body>
    <ul>
        <?php foreach ($negative as $number) : ?>
            <li><?= $number ?></li>
        <?php endforeach ?>
    </ul>
</body>
</html>