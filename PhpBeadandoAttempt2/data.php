<?php
$teams = [
    'dortmund' => [
        'id' => 'dortmund',
        'name' => 'Borussia Dortmund',
        'city' => 'Dortmund'
    ],
    'bayern' => [
        'id' => 'bayern',
        'name' => 'FC Bayern München',
        'city' => 'München'
    ],
    'barcelona' => [
        'id' => 'barcelona',
        'name' => 'FC Barcelona',
        'city' => 'Barcelona'
    ],
    'real' => [
        'id' => 'real',
        'name' => 'Real Madrid CF',
        'city' => 'Madrid'
    ]
];
$matches = [
    '1' => [
        'id' => '1',
        'home' => [
            'id' => 'dortmund',
            'score' => 'null'
        ],
        'away' => [
            'id' => 'bayern',
            'score' => 'null'
        ],
        'date' => '2021-11-11'
    ],
    '2' => [
        'id' => '2',
        'home' => [
            'id' => 'bayern',
            'score' => 'null'
        ],
        'away' => [
            'id' => 'dortmund',
            'score' => 'null'
        ],
        'date' => '2021-11-10'
    ],
    '3' => [
        'id' => '3',
        'home' => [
            'id' => 'barcelona',
            'score' => '1'
        ],
        'away' => [
            'id' => 'real',
            'score' => '3'
        ],
        'date' => '2021-11-09'
    ],
    '4' => [
        'id' => '4',
        'home' => [
            'id' => 'real',
            'score' => '2'
        ],
        'away' => [
            'id' => 'barcelona',
            'score' => '1'
        ],
        'date' => '2021-11-08'
    ],
    '5' => [
        'id' => '5',
        'home' => [
            'id' => 'dortmund',
            'score' => '2'
        ],
        'away' => [
            'id' => 'real',
            'score' => '1'
        ],
        'date' => '2021-11-07'
    ],
    '6' => [
        'id' => '6',
        'home' => [
            'id' => 'bayern',
            'score' => '2'
        ],
        'away' => [
            'id' => 'barcelona',
            'score' => '1'
        ],
        'date' => '2021-11-06'
    ],
    '7' => [
        'id' => '7',
        'home' => [
            'id' => 'dortmund',
            'score' => '1'
        ],
        'away' => [
            'id' => 'barcelona',
            'score' => '2'
        ],
        'date' => '2021-11-05'
    ],
    '8' => [
        'id' => '8',
        'home' => [
            'id' => 'barcelona',
            'score' => '3'
        ],
        'away' => [
            'id' => 'dortmund',
            'score' => '2'
        ],
        'date' => '2021-11-06'
    ],
    '9' => [
        'id' => '9',
        'home' => [
            'id' => 'barcelona',
            'score' => '3'
        ],
        'away' => [
            'id' => 'dortmund',
            'score' => '4'
        ],
        'date' => '2021-11-06'
    ]
    ,
    '10' => [
        'id' => '10',
        'home' => [
            'id' => 'barcelona',
            'score' => '3'
        ],
        'away' => [
            'id' => 'dortmund',
            'score' => '3'
        ],
        'date' => '2021-11-06'
    ]
];
$users = [
    'userid1' => [
        'id' => 'userid1',
        'username' => 'user1',
        'email' => 'email1'
    ],
    'userid2' => [
        'id' => 'userid2',
        'username' => 'user2',
        'email' => 'email1'
    ]
];
$comments = [
    'commentid1' => [
        'author' => 'bence',
        'text' => 'Hajrá fiúk!',
        'teamid' => 'barcelona',
    ],
    'commentid2' => [
        'author' => 'gergo',
        'text' => 'Jó volt a legutóbbi meccs!',
        'teamid' => 'dortmund',
    ],
];
?>