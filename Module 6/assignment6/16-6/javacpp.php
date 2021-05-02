<?php
// The file test.xml contains an XML document with a root element
// and at least an element /[root]/title.
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Content-type: text/xml');
if (file_exists('javacpp.xml')) {
    $xml = file_get_contents('javacpp.xml');
 
    echo $xml;
} else {
    exit('Failed to open test.xml.');
}
?>