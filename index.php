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
        <option value="1">Example Family 1</option>
        <option value="2">Example Family 2</option>
        <option value="3">Example Family 3</option>
    </select>
    <hr>
    
<h3>Date</h3>

    <input type="date" name="date"/>
    <hr>
    
<h3>Time</h3>

    <input type="time" name="time">
    <br><br>
    <button onclick="store()" type="button">Save Appointment</button>
</form>
        <hr>

<h3>Countdown</h3>

<script type="text/javascript" src="countdown.js"></script>
<div id="countdown"></div>

    </body>
</html>
