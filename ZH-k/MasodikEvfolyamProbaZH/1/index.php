<?php
$activities = [
    1 => [
        "name" => "alvás",
        "difficulty" => 0.05
    ],
    2 => [
        "name" => "bányászás",
        "difficulty" => 0.6
    ],
    3 => [
        "name" => "család",
        "difficulty" => 0.4
    ],
    4 => [
        "name" => "programozás",
        "difficulty" => 0.95
    ],
    5 => [
        "name" => "zsákmányolás",
        "difficulty" => 0.7
    ],
    6 => [
        "name" => "vadászat",
        "difficulty" => 0.6
    ],
    7 => [
        "name" => "játék",
        "difficulty" => 0.0
    ],
    8 => [
        "name" => "főzés",
        "difficulty" => 0.6
    ]
];
$goblins = [
    "WEB'LIN" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 5
        ],
        [
            "startHour" => 4,
            "activityKey" => 4
        ],
        [
            "startHour" => 5,
            "activityKey" => 4
        ],
        [
            "startHour" => 7,
            "activityKey" => 1
        ]
    ],
    "HUN'TER" => [
        [
            "startHour" => 0,
            "activityKey" => 1
        ],
        [
            "startHour" => 1,
            "activityKey" => 6
        ],
        [
            "startHour" => 3,
            "activityKey" => 3
        ],
        [
            "startHour" => 4,
            "activityKey" => 3
        ],
        [
            "startHour" => 5,
            "activityKey" => 6
        ],
        [
            "startHour" => 7,
            "activityKey" => 6
        ]
    ],
    "MOT'HER" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 6
        ],
        [
            "startHour" => 4,
            "activityKey" => 8
        ],
        [
            "startHour" => 5,
            "activityKey" => 8
        ],
        [
            "startHour" => 7,
            "activityKey" => 3
        ]
    ],
    "GOB'KID" => [
        [
            "startHour" => 0,
            "activityKey" => 7
        ],
        [
            "startHour" => 1,
            "activityKey" => 7
        ],
        [
            "startHour" => 3,
            "activityKey" => 7
        ],
        [
            "startHour" => 4,
            "activityKey" => 7
        ],
        [
            "startHour" => 5,
            "activityKey" => 7
        ],
        [
            "startHour" => 7,
            "activityKey" => 7
        ]
    ]
];

function swapActicityKeyToActivityName($number)
{
    global $activities;
    foreach ($activities as $Activitynumber => $activity) {
        if ($Activitynumber == $number) {
            return ($activity['name']);
        }
    }
}
function isGoblinActivAtThisHour($hour){
    global $goblins;
    $result = [];
    $foundAtThatHour=false;
    foreach ($goblins as $name => $goblin) {
        foreach ($goblin as $value) {
            if ($value['startHour']==$hour) {
                $foundAtThatHour=true;
                array_push($result,swapActicityKeyToActivityName($value['activityKey']));
            }
        }
        if($foundAtThatHour==false) {
            array_push($result,"");
        }
        $foundAtThatHour=false;
    }
    return $result;
}
function whatDifficultyIsShit($szar) {
    global $activities;
    foreach ($activities as $key => $activity) {
        if($activity["name"]==$szar) {
            return $activity["difficulty"];
        }
    }
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1. feladat</title>
    <style>
        table,
        td,
        th {
            border: 1px black solid;
            border-collapse: collapse;
        }

        td {
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>1. feladat</h1>
    <h2>Időbeosztás</h2>
    <table>
        <tr>
            <th> Time </th>
            <?php foreach ($goblins as $name => $goblin) : ?>
                <th> <?= $name ?> </th>
            <?php endforeach ?>
            <?php for ($i = 0; $i < 8; $i++) : ?>
                </tr>
                    <td><?= $i ?></td>
                    <?php $szarok=isGoblinActivAtThisHour($i)?>
                    <?php foreach($szarok as $szar) : ?>
                        <?php if($szar=="") : ?>
                            <td style="background-color:white;"> <?= $szar ?> </td>
                        <?php elseif(whatDifficultyIsShit($szar) > 0.8) : ?>
                            <td style="background-color:red;"> <?= $szar ?> </td>
                        <?php elseif(whatDifficultyIsShit($szar) < 0.5) : ?>
                            <td style="background-color:lightgreen;"> <?= $szar ?> </td>
                        <?php else : ?>
                            <td style="background-color:orange;"> <?= $szar ?> </td>
                        <?php endif ?>
                    <?php endforeach ?>
                </tr>
            <?php endfor ?>
    </table>
</body> 

</html>