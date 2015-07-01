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
<script type="text/javascript">

function saveUserInfo(){

    function saveFamily(){
        var theFamily = document.getElementById('myFamily');
        localStorage.setItem('myFamily',myFamily.value);
    }
    function saveDate(){
       var theDate = document.getElementById('myDate');
       localStorage.setItem('myDate',myDate.value);
    }
    function saveTime(){
        var theTime = document.getElementById('myTime');
        localStorage.setItem('myTime',myTime.value);
    }
    saveFamily();
    saveDate();
    saveTime();

}
// This function merely displays the information that is currently stored by the browser.
// Exploring the options in how to save separate appointments / make corrections to appointments / remove appointment stored, etc.
function displayUserInfo(){
    document.getElementById("showAppointment").innerHTML = ("The name of the family is: " + localStorage.getItem('myFamily') + "<br>The date of the appointment is: "
            + localStorage.getItem('myDate') + "<br>The time of the appointment is: " + localStorage.getItem('myTime') );
}
</script>

<h3>Family</h3><input type='text' id='myFamily'><br>

<h3>Date</h3><input type="date" id="myDate"><br>

<h3>Time</h3><input type="time" id='myTime'><br><br>

<input type='button' onclick ='saveUserInfo()' value='Save Appointment'/>
<input type='button' onclick ='displayUserInfo()' value='Display Appointment'/>
<p id ="showAppointment"></p>

<h3>Countdown</h3>

<script type="text/javascript" src="countdown.js"></script>
<div id="countdown"></div>

    </body>
</html>
