
<?php

class User {

    private static $email = "admin@athlene.site";
    private static $pwd = "M@y3rZ.@thl3n3!9a";
    private static $host = "smtp.titan.email";

    public static function getPwd(){ return self::$pwd; }
    public static function getEmail(){ return self::$email; }
    public static function getHost(){ return self::$host; }

}