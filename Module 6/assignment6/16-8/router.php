<?php
header('Content-Type: text/json;charset=utf-8');
$file = $_GET["file"];
$data = file_get_contents($file);
if($data)
    echo $data;
