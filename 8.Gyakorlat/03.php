<?php
declare(strict_types = 1);
function fakt(int $number): int {
    $f = 1;
    for ($i = 2; $i < $number; $i++) { 
        $f *= $i;
    }
    return $f;
    }

echo fakt(2) . "<br>";
echo fakt(3) . "<br>";
echo fakt(4) . "<br>";
echo fakt(5) . "<br>";
   
?>
