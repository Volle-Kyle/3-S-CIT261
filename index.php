<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        
        <!-- This is just a very rough sketch of some of the key features of our appointment scheduler -->
<h1>Schedule Appointment</h1>

<h3>Family</h3>

<form method="post">
    <select name="selectFamily">
        <!-- These options will be pulled from information input by user on "families page" -->
        <!-- Possibly to be made as a text input... as it doesn't need much other than the actual name -->
        <option value="1">Example Family 1</option>
        <option value="2">Example Family 2</option>
        <option value="3">Example Family 3</option>
    </select>
    <hr>
        
        <!-- Both date and time functions incompatible with Firefox browsers - Sorry! Use virtually any other brower. -->
<h3>Date</h3>

    <input type="date" name="date"/>
    <hr>
    
<h3>Time</h3>

    <input type="time" name="time">
    <br><br>
</form>
<button onclick="store()" type="button">Save Appointment</button>
        <hr>

<h3>Countdown</h3>

<script type="text/javascript" src="countdown.js"></script>
<div id="countdown"></div>

    </body>
</html>
