<?php 
    //Generálj egy véletlen hexadecimális színkódot! Használd ehhez a random_int, dechex, str_pad függvényeket (ld. referencia)!
    //Ha mindegyik generált érték nagyobb, mint 128, akkor állítsd be háttérszínként, különben a háttérszín értéke legyen #cccccc! 
    //Az oldalra írjuk ki a generált színt szövegként, és azt is írjuk ki, hogy használtuk-e a háttérszín beállításához vagy alapértelmezett háttérszín van-e!
    // random_int(min, max) - Gives a random int between min and max.
    // dechex(int) -  Gets an int and converts it to hexdecimal number
    // str_pad(string, length, pad_string) - string: alap sztring, length: hosszúság, pad_string: mivel töltse ki a szabd helyeket
    function is_all_bigger_than_128($array) : bool
    {
        $ret = true;
        foreach ($array as $num) {
            if($num < 128){
                $ret = false;
            }
        }
        return $ret;    
    }

    $color_code = "cccccc";
    $random_nums = [];
    for ($i = 0; $i < 3; $i++) { 
        array_push($random_nums, random_int(0, 255));
    }
    if(is_all_bigger_than_128($random_nums)){
        print_r($random_nums);
    }else{
        print_r($color_code);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10-es feladat</title>
</head>
<body>
    
</body>
</html>
