<?php
  $file = 'logins.json';

  $username = $_POST['username'];
  $password = $_POST['password'];
  $logins = json_decode(file_get_contents($file), true);
  if ($logins[$username] == null) {
    $logins[$username] = array("pass" => $password, "fav" => array());
    file_put_contents($file, json_encode($logins, true));
    echo json_encode(array('user' => $logins[$username]));;
  } else {
    echo json_encode(array('error' => 'user already exists'));;
    http_response_code(400);
  }
?>
