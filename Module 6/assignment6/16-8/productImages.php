<?php
$data = file_get_contents("productImages.json");
header('Content-Type: text/json;charset=utf-8');
echo $data;