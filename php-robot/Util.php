<?php


class Util{


    static function writeLog($action, $string)
    {
        echo 'writeLog';
        $string = date('Y-m-d H:i:s') . " $action " . PHP_EOL . $string . PHP_EOL;
        if (!file_exists(__DIR__ . '/runtime/logs/')) {
            mkdir(__DIR__ . '/runtime/logs/', 0777, true);
        }
        file_put_contents(__DIR__ . '/runtime/logs/' . date('Y-m-d') . '.log', $string, FILE_APPEND);
    }
}