<?php
    function connect(){
        $mysqli = new mysqli("localhost", "root", "", "orden");

        /* check connection */
        if (mysqli_connect_errno()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }

     /*   $con=mysqli_connect("localhost","root","","orden");
    // Check connection
    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }*/
      return $mysqli;
    }
?>