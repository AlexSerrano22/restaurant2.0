<?php
    header('Content-Type: text/html; charset=UTF-8');
    include "dataBase.php";

    date_default_timezone_set('America/Mexico_City');
    $fecha = date("Y-m-d");
    $hora = date("H:i:s");

if( isset($_GET["service"] ) || isset($_POST["service"] ) ){
        $mysqli = connect();
        $mysqli->query("set names 'utf8'");
        $service = $_GET["service"];
        $table="";
        $people="";
        $foodID="";
        $comb="";
        $price="";
        $waiter="";

        isset($_GET["table"] ) ? $table = $_GET["table"] : $table="";
        isset($_GET["people"] ) ? $people = $_GET["people"] : $people="";
        isset($_GET["comb"] ) ? $comb = $_GET["comb"] : $comb="";
        isset($_GET["price"] ) ? $price = $_GET["price"] : $price="";
        isset($_GET["foodID"] ) ? $foodID = $_GET["foodID"] : $foodID="";



        switch ($service){
            case "100" :
                $query = "Select * From alimento";
                $result = $mysqli->query($query);
                $item = array();
                while($row = $result->fetch_array(MYSQLI_ASSOC)){
                    $row["Nombre"];
                    $elements = array(
                    "idAl" => $row["idAlimento"],
                    "name" => $row["Nombre"],
                    "cost" => $row["Costo"],
                    "idSubMenu" => $row["idSub"],
                    );
                    $items[] = $elements;
                }
                echo ''.json_encode($items).'';
            break;
            case "101" :
                            $query = "Select * From submenu";
                            $result = $mysqli->query($query);
                            $item = array();
                            while($row = $result->fetch_array(MYSQLI_ASSOC)){
                                $elements = array(
                                "idSub" => $row["idSub"],
                                "description" => $row["Descripcion"],
                                "idMenu" => $row["idMenu"],
                                );
                                $items[] = $elements;
                            }
                            echo ''.json_encode($items).'';
             break;
            case "102" :
                            $query = "Select * From menu";
                            $result = $mysqli->query($query);
                            $item = array();
                            while($row = $result->fetch_array(MYSQLI_ASSOC)){
                                $elements = array(
                                "idMenu" => $row["idMenu"],
                                "description" => $row["descripcion"],
                                );
                                $items[$row["idMenu"]] = $elements;
                            }
                            echo ''.json_encode($items).'';
             break;
            case "103" :
                $query = "Select * From menu";
                $result = $mysqli->query($query);
                $item = array();
                while($row = $result->fetch_array(MYSQLI_ASSOC)){
                    $elements = array(
                        "idMenu" => $row["idMenu"],
                        "description" => $row["descripcion"],
                    );
                    $items[$row["idMenu"]] = $elements;
                }
                echo ''.json_encode($items).'';
                break;
            case "104" :
                $query = "SELECT peine,mesa,mesero,idOrden FROM orden WHERE pagada=0 AND fecha='$fecha'";
                $result = $mysqli->query($query);
                $items = array();
                while($row = $result->fetch_array(MYSQLI_ASSOC)){
                    $elements = array(
                        "idOrden" => $row["idOrden"],
                        "peine" => $row["peine"],
                        "mesa" => $row["mesa"],
                        "mesero" => $row["mesero"]
                    );
                    $items[] = $elements;
                }
                echo ''.json_encode($items).'';
                break;
            case "901" :
                //TODO: add idOrder sequence because it's a same number every day
                $query = "INSERT INTO  orden (`Mesa`, `Peine`, `fecha`, `hora`,`mesero`, `NumPer`) VALUES ($table, $comb,'$fecha','$hora' ,'$waiter','$people')";
                $newOrder;
                if (!$mysqli->query($query)){
                    $newOrder = array(
                        "value" => false,
                    );
                }else {
                        $newOrder = array(
                            "value" => true,
                            "idOrder" => $mysqli->insert_id
                        );

                }
                echo '' . json_encode($newOrder) . '';
                break;
            case "999" :
                $query = "SELECT COUNT(mesero) as exist ,mesero FROM orden WHERE pagada=0 AND mesa=$table AND peine=$comb AND fecha='$fecha'";
                $result = $mysqli->query($query);
                $exist;
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
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
        }
    }else{
        echo "Our apologize we do not have process you request";
    }

