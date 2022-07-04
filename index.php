<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Home Page - Student Tutorial Booking System</title>
<link rel="stylesheet" type="text/css" href="styles/style.css"/>
</head>

<body>

    <nav>
        <ul>
            <li><a href="index.php" class="active" id='home'>Home</a></li>
            <li><a href="booking.php">Booking</a></li>
            <li><a href="link goes here">Placeholder</a></li>
            <li><a id='login'>Login</a></li>
          </ul>
    </nav>

    <main>
       
    </main>

<!-- The Modal -->
<div id="modal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <header class="modal-header"> 
            <span class="close modal-button topright" title="close modal" id="close-modal">&times;</span>
            <h2 id="modal-title">User Login</h2>
          </header>
    
    
    <div>
    <form action="login.php" method="post">

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn" id='cancel-btn'>Cancel</button>
    <span class="psw">Forgot password? <a href="#">click here</a></span>
  </div>
</form> 
    </div>
  
    <footer class="modal-footer">
      </footer>

  </div>
</div>

    <script type="text/javascript" src="scripts/main.js"></script>
</body>

</html>