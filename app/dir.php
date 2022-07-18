<?php
echo "diretorio------1";

ini_set('error_reporting', E_ALL);
error_reporting(E_ALL);

echo  __DIR__ ;

$dir    = '../../../';
$files1 = scandir($dir);

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

print_r(dirToArray($dir));

?>