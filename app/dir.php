<?php
ini_set('error_reporting', E_ALL);
error_reporting(E_ALL);

echo  __DIR__ ;

$dir    = '../';
$files1 = scandir($dir);

print_r($files1);

?>