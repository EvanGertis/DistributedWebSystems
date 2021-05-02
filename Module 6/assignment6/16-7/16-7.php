<?php

// The file test.xml contains an XML document with a root element
// and at least an element /[root]/title.
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Content-type: text/xml');
$file = "16-7.xml";
if (file_exists($file)) {
    $xml = file_get_contents($file);
    echo $xml;
} else {
    exit('Failed to open test.xml.');
}
?>