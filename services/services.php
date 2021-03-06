<?php
header('Content-Type: text/html; charset=UTF-8');
include "dataBase.php";

date_default_timezone_set('America/Mexico_City');
$fecha = date("Y-m-d");
$hora = date("H:i:s");

if (isset($_GET["service"]) || isset($_POST["service"])) {
    $mysqli = connect();
    $mysqli->query("set names 'utf8'");
    $service = $_GET["service"];
    $table = "";
    $people = "";
    $foodID = "";
    $comb = "";
    $price = "";
    $waiter = "";
    $order = "";

    isset($_GET["table"]) ? $table = $_GET["table"] : $table = "";
    isset($_GET["people"]) ? $people = $_GET["people"] : $people = "";
    isset($_GET["comb"]) ? $comb = $_GET["comb"] : $comb = "";
    isset($_GET["price"]) ? $price = $_GET["price"] : $price = "";
    isset($_GET["foodID"]) ? $foodID = $_GET["foodID"] : $foodID = "";
    isset($_GET["order"]) ? $order = $_GET["order"] : $order = "";
    isset($_GET["waiter"]) ? $waiter = $_GET["waiter"] : $waiter = "";


    switch ($service) {
        case "100" :
            //Get services from all food in the data base
            $query = "Select * From alimento";
            $result = $mysqli->query($query);
            $item = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $row["Nombre"];
                $elements = array(
                    "idAl" => $row["idAlimento"],
                    "name" => $row["Nombre"],
                    "cost" => $row["Costo"],
                    "idSubMenu" => $row["idSub"],
                );
                $items[] = $elements;
            }
            echo '' . json_encode($items) . '';
            break;
        case "101" :
            //Get service from all sub menus in the data base
            $query = "Select * From submenu";
            $result = $mysqli->query($query);
            $item = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $elements = array(
                    "idSub" => $row["idSub"],
                    "description" => $row["Descripcion"],
                    "idMenu" => $row["idMenu"],
                );
                $items[] = $elements;
            }
            echo '' . json_encode($items) . '';
            break;
        case "102" :
            //Get service from all menus in the data base
            $query = "Select * From menu";
            $result = $mysqli->query($query);
            $item = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $elements = array(
                    "idMenu" => $row["idMenu"],
                    "description" => $row["descripcion"],
                );
                $items[$row["idMenu"]] = $elements;
            }
            echo '' . json_encode($items) . '';
            break;
        case "103" :
            //Get Service to obtain the al elements from one order in the data base
            $query = "";
            $result = $mysqli->query($query);
            $elements;
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $elements = array(
                );
            }
            echo '' . json_encode($elements) . '';
            break;
        case "104" :
            //Get service from all tables tha are in use at the moment in the data base
            $query = "SELECT peine,mesa,mesero,idOrden FROM orden WHERE pagada=0 AND fecha='$fecha'";
            $result = $mysqli->query($query);
            $items = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $elements = array(
                    "idOrden" => $row["idOrden"],
                    "peine" => $row["peine"],
                    "mesa" => $row["mesa"],
                    "mesero" => $row["mesero"]
                );
                $items[] = $elements;
            }
            echo '' . json_encode($items) . '';
            break;
        case "109" :
            //Get Service to obtain the al waiters in the data base
            $query = "SELECT * FROM mesero";
            $result = $mysqli->query($query);
            $items = array(array(
                "name" =>  ""
            ));
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $elements = array(
                    "name" =>  $row["nombre"]
                );
                $items[] = $elements;
            }
            echo '' . json_encode($items) . '';
            break;
        case "901" :
            //Set service to insert a new order in the data base
            $query = "INSERT INTO  orden (`idOrden`,`Mesa`, `Peine`, `fecha`, `hora`,`mesero`, `NumPer`) VALUES ($order,$table, $comb,'$fecha','$hora' ,'$waiter','$people')";
            $newOrder;
            if (!$mysqli->query($query)) {
                $newOrder = array(
                    "value" => false,
                );
            } else {
                $newOrder = array(
                    "value" => true,
                    "idOrder" => $order
                );

            }
            echo '' . json_encode($newOrder) . '';
            break;
        case "999" :
            //Get service to obtain the waiter that attend the table if this is in use.
            $query = "SELECT COUNT(mesero) as exist ,mesero FROM orden WHERE pagada=0 AND mesa=$table AND peine=$comb AND fecha='$fecha'";
            $result = $mysqli->query($query);
            $exist;
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                if ($row["exist"] == 1) {
                    $exist = array(
                        "exit" => "true",
                        "waiter" => $row["mesero"]
                    );
                } else {
                    $exist = array(
                        "exist" => "false"
                    );
                }
            }
            echo '' . json_encode($exist) . '';
            break;
        case "998" :
            //Get service to obtain ne recently id in the data base of this day
            $query = "SELECT idOrden FROM `orden` WHERE fecha='$fecha' order by idOrden DESC LIMIT 1";
            $result = $mysqli->query($query);
            $nextOrder = array(
                "Number" => 1
            );
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $nextOrder = array(
                    "Number" => $row["idOrden"] + 1
                );
            }
            echo '' . json_encode($nextOrder) . '';
            break;
    }
} else {
    echo "Our apologize we do not have process you request";
}

