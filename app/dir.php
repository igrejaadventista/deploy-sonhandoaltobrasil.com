<?php

echo "diretorio------1";

ini_set('error_reporting', E_ALL);
error_reporting(E_ALL);

echo  __DIR__ ."<br>";

$dir    = '../../';
$files1 = scandir($dir);
print_r($files1);

$dir2    = '../../';
$files2 = scandir($dir2);
print_r($files2);

$dir3    = '../../../';
$files3 = scandir($dir3);
print_r($files3);

 
/*
function dirToArray($dir) {
  
    $result = array();
 
    $cdir = scandir($dir);
    foreach ($cdir as $key => $value)
    {
       if (!in_array($value,array(".","..")))
       {
          if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
          {
             $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
          }
          else
          {
             $result[] = $value;
          }
       }
    }
   
    return $result;
 }

 dirToArray($dir);

print_r(dirToArray($dir)); */

?>