<?php
  $username = $_POST['username'];
  $password = $_POST['password'];
  $logins = json_decode(file_get_contents('logins.json'), true);
  header('Content-Type: application/json');
  if ($logins[$username]['pass'] == $password) {
    echo json_encode(array('user' => $logins[$username]));
  } else if($logins[$username] != null ){
    echo json_encode(array('error' => 'incorrect'));
    http_response_code(400);
  } else {
    echo json_encode(array('error' => 'user does not exist'));
    http_response_code(404);
  }
?>
