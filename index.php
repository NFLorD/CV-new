<?php

if(empty($_GET['lang'])){
    $_GET['lang'] = "fr";
}



require "templates/index.phtml";
?>