<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Booking - Student Tutorial Booking System</title>
<link rel="stylesheet" type="text/css" href="styles/style.css"/>
</head>

<body>

    <nav>
        <ul>
            <li><a href="index.php" id='home'>Home</a></li>
            <li><a href="booking.php" class="active">Booking</a></li>
            <li><a href="link goes here">Placeholder</a></li>
            <li><a href="link goes here">Login</a></li>
          </ul>
    </nav>

    <main>
        <span id="calendar-view" class="button-container">Calendar view: <button onclick="setView(event)" id="month">Month</button><button onclick="setView(event)" id="week">Day</button></span>
        <br/>
    <table class="calendar" id="calendar">
        <thead id="calendar-header">
        <tr>
            <th id="previous">&larr;</th>
            <th colspan="5" id="calendar-title" class="calendar-head"></th>
            <th id="next">&rarr;</th>
        </tr>
        <tr id="calendar-columns">
            <!--populated by buildCalendar function in calendar_functions.js-->
        </tr>
        </thead>
        <tbody id="calendar-body">
            <!--populated by buildCalendar function in calendar_functions.js-->
        </tbody>
    </table>
    </main>

<!-- The Modal -->
<div id="modal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <header class="modal-header"> 
            <span class="close modal-button topright" title="close modal" id="close-modal">&times;</span>
            <h2 id="modal-title">Modal Header</h2>
          </header>
    
    
    <div>
      <p>Placeholder Text</p>
    </div>
  
    <footer class="modal-footer">
      </footer>

  </div>
</div>

    <script type="text/javascript" src="scripts/calendar_functions.js"></script>
</body>

</html>