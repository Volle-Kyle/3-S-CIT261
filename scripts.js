function getFullYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
}

function getDaysLeftInMonth() {
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var totalDays;
    switch (month) {
        case 2:
            totalDays = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            totalDays = 30;
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            totalDays = 31;
            break;
    }
    var daysLeft = totalDays - day;
    document.getElementById("displayCountdown").innerHTML = "Days left this month: " + daysLeft;
    document.getElementById("displayCountdown").innerHTML = "Days left this month: " + daysLeft;
}

function ajaxCall() {
    var entryRequest1 = new XMLHttpRequest();
    var url = "families.txt";
    entryRequest1.open("POST", url);

    entryRequest1.onreadystatechange = function() {
        if (entryRequest1.readyState === 4 && entryRequest1.status === 200) {
            var exampleFamilies = JSON.parse(entryRequest1.responseText);
            familiesLocalStorage(exampleFamilies);
        }
    };
    entryRequest1.send();
    
    var entryRequest2 = new XMLHttpRequest();
    var url = "jones.txt";
    entryRequest2.open("POST", url);

    entryRequest2.onreadystatechange = function() {
        if (entryRequest2.readyState === 4 && entryRequest2.status === 200) {
            var exampleJones = JSON.parse(entryRequest2.responseText);
            jonesLocalStorage(exampleJones);
        }
    };
    entryRequest2.send();
    
    var entryRequest3 = new XMLHttpRequest();
    var url = "appointments.txt";
    entryRequest3.open("POST", url);

    entryRequest3.onreadystatechange = function() {
        if (entryRequest3.readyState === 4 && entryRequest3.status === 200) {
            var exampleAppointments = JSON.parse(entryRequest3.responseText);
            appointmentsLocalStorage(exampleAppointments);
        }
    };
    entryRequest3.send();   
    
    displayLander();
}

function familiesLocalStorage(exampleFamilies) {
    var compatibleFamilies = JSON.stringify(exampleFamilies);
    localStorage.setItem('families', compatibleFamilies);
}

function jonesLocalStorage(exampleJones) {
    var compatibleJones = JSON.stringify(exampleJones);
    localStorage.setItem('jones', compatibleJones);
}

function appointmentsLocalStorage(exampleAppointments) {
    var compatibleAppointments = JSON.stringify(exampleAppointments);
    localStorage.setItem('appointments', compatibleAppointments);
}

/*
function populateLocalStorage() {
      
// Incomplete code that will (hopefully) pull family names from stored object (above) rather than defined array:
    var select = document.getElementById("selectFamily");
    var families = ["Jones", "Smith"];
        for(var i = 0; i < families.length; i++) {
            var opt = families[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
    }
}
*/

function landerFamilies() {
    var families = JSON.parse(localStorage.getItem('families'));
    var output = "<h2>Families</h2>";
    for (var i = 0; i < families.families.length; i++) {
        output += "<div class='button'><a onclick='displayFamily()'>" + families.families[i].familyName + " &rightarrow; </a></div>";
    }
    document.getElementById("lander-families").innerHTML = output;
}

function landerAppointments() {
    var appointments = JSON.parse(localStorage.getItem('appointments'));
    var output = "<h2>Appointments</h2>";
    for (var i = 0; i < appointments.appointments.length; i++) {
        output += "<div class='button-appt'>" + appointments.appointments[i].family + "<br/>"
                + appointments.appointments[i].date + " | " + appointments.appointments[i].time + "</div>";
    }
    document.getElementById("lander-appointments").innerHTML = output;
}

function addFamily() {
    var families = JSON.parse(localStorage.getItem('families'));
    var newEntry = families.families.length;
    families.families[newEntry].familyName = document.getElementById("familyName").value;
    var compatibleFamilies = JSON.stringify(families);
    localStorage.setItem('families', families);
    addFamilyToLander();
}

function familyInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<h2>Jones Family</h2>";
    for (var i = 0; i < jones.members.length; i++) {
        output += "<div class='button'><a onclick='displayMember()'>" + jones.members[i].name + " &rightarrow; </a></div>";
    }
    output += "<div class='button-appt' onclick='displayAddMember()'>New Family Member +</div><br/>"
            + "<center><input type='button' style='width: 200px' onclick='familyToLander()' class='button' value='Back'/></center>";
    document.getElementById("family-info").innerHTML = output;
}

function addMember() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var newEntry = jones.members.length;
    jones.members[newEntry].name = document.getElementById("memberName").value;
    jones.members[newEntry].position = document.getElementById("position").value;
    jones.members[newEntry].birthday = document.getElementById("birthday").value;
    jones.members[newEntry].notes = document.getElementById("notes").value;
    var compatibleJones = JSON.stringify(jones);
    localStorage.setItem('jones', jones);
    addMemberToFamily();
}

function memberInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<table class='center'><tr><td><p class='fancy-font'>Name:</p></td><td>" + jones.members[0].name + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Role:</p></td><td>" + jones.members[0].position + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Birthday:</p></td><td>" + jones.members[0].birthday + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Notes:</p></td><td>" + jones.members[0].notes + "</td></tr></table>"
               + "<tr><center><input type='button' style='width: 200px' onclick='memberToFamily()' class='button' value='Back'/><center>";
    document.getElementById('member-info').innerHTML = output;
}

function saveUserInfo(){

    function saveFamily(){
        var theFamily = document.getElementById('selectFamily');
        localStorage.setItem('selectFamily',selectFamily.value);
    }
    function saveDate(){
       var theDate = document.getElementById('selectDate');
       localStorage.setItem('selectDate',selectDate.value);
    }
    function saveTime(){
        var theTime = document.getElementById('myTime');
        localStorage.setItem('selectTime',selectTime.value);
    }
    saveFamily();
    saveDate();
    saveTime();
}

// Toggle visibily of hidden divs:

function displayLander() {
    landerFamilies();
    landerAppointments();
    document.getElementsByClassName('display').class = "hide";
    document.getElementById('lander').class = "display";
}

function displayFamily() {
    familyInfo();
    var family = document.getElementById('family-info');
    var lander = document.getElementById('lander');
    family.style.display = 'block';
    lander.style.display = 'none';
}

function familyToLander() {
    landerFamilies();
    landerAppointments();
    var family = document.getElementById('family-info');
    var lander = document.getElementById('lander');
    family.style.display = 'none';
    lander.style.display = 'block';
}

function displayAddFamily() {
    var addFam = document.getElementById('add-family');
    var lander = document.getElementById('lander');
    addFam.style.display = 'block';
    lander.style.display = 'none';
}

function addFamilyToLander() {
    landerFamilies();
    landerAppointments();
    var addFam = document.getElementById('add-family');
    var lander = document.getElementById('lander');
    addFam.style.display = 'none';
    lander.style.display = 'block';
}

function displayAppointments() {
    var appointment = document.getElementById('appointment');
    var lander = document.getElementById('lander');
    appointment.style.display = 'block';
    lander.style.display = 'none';
}

function appointmentsToLander() {
    landerFamilies();
    landerAppointments();
    var appointment = document.getElementById('appointment');
    var lander = document.getElementById('lander');
    appointment.style.display = 'none';
    lander.style.display = 'block';
}

function displayMember() {
    memberInfo();
    var member = document.getElementById('member-info');
    var family = document.getElementById('family-info');
    member.style.display = 'block';
    family.style.display = 'none';
}

function memberToFamily() {
    familyInfo;
    var member = document.getElementById('member-info');
    var family = document.getElementById('family-info');
    member.style.display = 'none';
    family.style.display = 'block';
}

function displayAddMember() {
    var addMem = document.getElementById('add-member');
    var family = document.getElementById('family-info');
    addMem.style.display = 'block';
    family.style.display = 'none';
}

function addMemberToFamily() {
    familyInfo;
    var addMem = document.getElementById('add-member');
    var family = document.getElementById('family-info');
    addMem.style.display = 'none';
    family.style.display = 'block';
}