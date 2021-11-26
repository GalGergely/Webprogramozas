<?php
    //Egy hallgatói nyilvántartásban minden hallgatóról tároljuk a nevét, a neptun azonosítóját, a születési évét és nemét. 
    //A kiszámításos feladatok számításait külön függvényekben oldjuk meg!
    $student_datas = [
        [
            'name' => 'Széplaki Bence',
            'neptun_code' => 'STM3ML',
            'date_of_birth' => '06/14/2000',
            'sex' => 'male'
        ],
        [
            'name' => 'Kiss Béla',
            'neptun_code' => '123210',
            'date_of_birth' => '07/25/1999',
            'sex' => 'male'
        ],
        [
            'name' => 'Nagy Judit',
            'neptun_code' => 'ASDDSA',
            'date_of_birth' => '12/01/1970',
            'sex' => 'female'
        ],
        [
            'name' => 'Nagy Anna',
            'neptun_code' => 'QWAS47',
            'date_of_birth' => '11/01/1970',
            'sex' => 'female'
        ]
    ];
    //b Írjuk ki a legidősebb hallgatót!
    function minSearchDateOfBirth($student_datas)
    {
        $min = strtotime($student_datas[0]['date_of_birth']);
        $index = 0;
        for ($i = 1; $i < count($student_datas); $i++) { 
            $time = strtotime($student_datas[$i]['date_of_birth']);
            if($time < $min){
                $min = $time;
                $index = $i;
            }
        }
        return $student_datas[$index];
    }
    print_r("A legidőssebb hallgató: <br>");
    print_r(minSearchDateOfBirth($student_datas));

    //c Döntsük el a nyilvántartás alapján, van-e lány a hallgatók között!
    function isThereAnyFemales($student_datas)
    {
        $ret = false; 
        foreach ($student_datas as $student) {
            if($student['sex'] == 'female'){
                $ret = true;
            }
        }
        return $ret;
    }
    print_r("<br>Van lány a nyilvántartásban?<br>");
    if(isThereAnyFemales($student_datas)){
        print_r("Igen.");
    } else {
        print_r("Nem");
    }
    
    //d
    function countStudents($student_datas, $type) {
        $sum = 0;
        foreach ($student_datas as $student) {
            if($student['sex'] == $type){
                $sum++;
            }
        }
        return $sum;
    }

    $number_of_boys = countStudents($student_datas, 'male');
    $number_of_girls = countStudents($student_datas, 'female');
    print_r('<br>Fiúk száma: ');
    for ($i = 0; $i < $number_of_boys; $i++) { 
        print_r('□');
    }
    print_r('<br>Lányok száma: ');
    for ($i = 0; $i < $number_of_girls; $i++) { 
        print_r('□');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>9 - Feladat</title>
</head>
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Neptun code</th>
            <th>Date of birth</th>
            <th>Sex</th>
        </tr>
        <?php //a. Táblázat formájában jelenítsük meg a hallgatói nyilvántartást! 
              foreach ($student_datas as $student) : ?>
            <tr>
                <td><?= $student['name']?></td>
                <td><?= $student['neptun_code']?></td>
                <td><?= $student['date_of_birth']?></td>
                <td><?= $student['sex']?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>