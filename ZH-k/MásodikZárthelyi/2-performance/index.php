<?php

$errors=[];
$num=$_GET['num_children'] ?? '';
$name=$_GET['children_names'] ?? '';
$music=$_GET['music_url'] ?? '';
$performance=$_GET['performance_type'] ?? '';
$ready=$_GET['ready'] ?? '';
$bool=true;
$name=explode(',',$name);

if($num==='')
{
    $errors["num"]="Number of children must be specified";
    $bool=false;
}
else if(!filter_var($num,FILTER_VALIDATE_INT))
{
    $errors['num']='Number of children must be a number';
    $bool=false;
}
else if(intval($num)<1)
{
    $errors['num']='Number of children must be positive';
    $bool=false;
}

if($name==[])
{
    $errors['name']='Names of children must be specified';
    $bool=false;
}
else if(count($errors)!=0)
{
    $errors['name']="Please correct the number of children";
    $bool=false;
}
else if(count($name)!=$num)
{
    $errors['name']='Number of names must equal the number of children';
    $bool=false;
}

if($music==='')
{
    $errors['music']='Music url must be specified';
    $bool=false;
}
else if(!filter_var($music,FILTER_VALIDATE_URL))
{
    $errors['music']='Music url must be a valid url';
    $bool=false;
}

if($performance==='')
{
    $errors['performance']='Performance type must be specified';
    $bool=false;
}
if($performance=='song' || $performance=='poem')
{
}
else
{
    $errors['performance']='Performance type must either be song or poem';
    $bool=false;
}
if(!isset($ready))
{
    $errors['ready']='Someone is not ready';
    $bool=false;
}
if($bool)
{
    print('<div class="merry">🎄 MERRY CHRISTMAS AND HAPPY NEW YEAR! 🎄</div>');
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Performance</title>
</head>
<body>
    <h1>Performance</h1>
    <form action="index.php" method="get" novalidate>
        <label for="i1">Number of children:</label> <input type="text" name="num_children" value='<?=$num?>' id="i1"> <div style="color:red; display:inline;"><?=$errors['num'] ?? "" ?></div> <br>
        <label for="i2">Children's names:</label> <input type="text" name="children_names" value='<?=implode(',',$name)?>' id="i2"> <div style="color:red; display:inline;"><?=$errors['name'] ?? "" ?></div>  <br>
        <label for="i3">URL of music to be played:</label> <input type="text" name="music_url" value='<?=$music?>' id="i3"> <div style="color:red; display:inline;"><?=$errors['music'] ?? "" ?></div> <br>
        <label for="i4">Performance type:</label> <input type="text" name="performance_type" value='<?=$performance?>' id="i4"> <div style="color:red; display:inline;"><?=$errors['performance'] ?? "" ?></div> <br>
        <input type="checkbox" name="ready" id="i5" value='<?=$ready?>'><label for="i5">Everyone is ready</label> <br>
        <button type="submit">Submit</button>
    </form>

    <h2>Test cases</h2>
        <a href="index.php?num_children=&children_names=&music_url=&performance_type=">num_children=&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=n&children_names=&music_url=&performance_type=">num_children=n&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=6.7&children_names=&music_url=&performance_type=">num_children=6.7&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=0&children_names=&music_url=&performance_type=">num_children=0&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara&music_url=&performance_type=">num_children=3&children_names=Adam%2CBarbara&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=5c3ezwen&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=5c3ezwen&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=good">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=good</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song&ready=on">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song&ready=on</a><br>
</body>
</html>
