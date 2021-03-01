<?php
$data = readfile("summary.json");
header('Content-Type: application/json');
echo json_encode($data);