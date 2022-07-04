<?php
session_start();
if(!$_REQUEST) {
header('refresh:5 url=index.php');
echo '<p>It looks like you may have got to this page accidentally if you are trying to login please do so via the homepage which we will redirect you to now.</p>';
} else {
    $_SESSION['user'] = $_REQUEST['uname'];
    var_dump($_SESSION);
}
?>