<?php
$data = file_get_contents("summary.json");
header('Content-Type: text/json;charset=utf-8');
echo $data;