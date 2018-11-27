
<?php

$fp = fsockopen("udp://71.233.138.165", 7777, $errno, $errstr);

if (!$fp) {
    echo "ERROR: $errno - $errstr<br />\n";

} else {

    fwrite($fp, "\n");

    echo fread($fp, 26);

    fclose($fp);

}

?>

