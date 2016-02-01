<?php
    include "dataBase.php";
    $con = connect();
    $query = "Select * From alimento";
    $result = mysqli_query($con,$query);
    $item = array();
    while($row = mysqli_fetch_array($result)){
        $elements = array(
        "ID" => $row["idAlimento"],
        "name" => $row["Nombre"],
        "cost" => $row["Costo"],
        "subMenu" => $row["idSub"],
        );
        $items[$row["idAlimento"]] = $elements;
    }
    echo ''.json_encode($items).'';
?>