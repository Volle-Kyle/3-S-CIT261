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

function populateLocalStorage() {
    var exampleFamilies = {
        "families":[
            {"familyName":"Jones"},
            {"familyName":"Smith"}
        ]};
    var compatibleFamilies = JSON.stringify(exampleFamilies);
    localStorage.setItem('families', compatibleFamilies);
        
    var exampleJones = {
        "members":[
            {
            "name":"John Jones",
            "position":"Father",
            "birthday":"March 15th",
            "notes":"Works construction, busy most days but free most evenings."
            },
            {
            "name":"Julie Jones",
            "position":"Mother",
            "birthday":"June 29th",
            "notes":"Stays at home, works with young women, so Wednesdays are busy."
            },
            {
            "name":"Jeremy Jones",
            "position":"Son",
            "birthday":"August 9th",
            "notes":"Graduating high school this year, favorite candy bar is Snickers."
            },
            {
            "name":"January Jones",
            "position":"Daughter",
            "birthday":"Unknown",
            "notes":"Likes to dance."
            }
        ]};
    var compatibleJones = JSON.stringify(exampleJones);
    localStorage.setItem('jones', compatibleJones);
    
    var exampleAppointments = {
        "appointments":[
            {
            "family":"Jones",
            "date":"7/8/15",
            "time":"7:00pm"
            },
            {
            "family":"Smith",
            "date":"7/14/15",
            "time":"6:15pm"
            }
        ]};
    var compatibleAppointments = JSON.stringify(exampleAppointments);
    localStorage.setItem('appointments', compatibleAppointments);
    
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

function displayLander() {
    landerFamilies();
    landerAppointments();
    
    document.getElementsByClassName('display').class = "hide";
    document.getElementById('lander').class = "display";
}

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
    displayLander();
}

function familyInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<h2>Jones Family</h2>";
    for (var i = 0; i < jones.members.length; i++) {
        output += "<div class='button'><a onclick='memberInfo()'>" + jones.members[i].name + " &rightarrow; </a></div>";
    }
    output += "<br/><center><input type='button' style='width: 200px' onclick='displayFamily()' class='button' value='Back'/></center>";
    document.getElementById("family-display").innerHTML = output;
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
    displayFamily();
}

function memberInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<table class='center'><tr><td><p class='fancy-font'>Name:</p></td><td>" + jones.members[0].name + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Position In Family:</p></td><td>" + jones.members[0].position + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Birthday:</p></td><td>" + jones.members[0].birthday + "</td></tr>"
               + "<tr><td><p class='fancy-font'>Notes:</p></td><td>" + jones.members[0].notes + "</td></tr></table>"
               + "<tr><center><input type='button' style='width: 200px' onclick='displayFamily()' class='button' value='Back'/><center>";
    document.getElementById("family-display").innerHTML = output;
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
function displayAddFamily() {
    var div = document.getElementById('add-family');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function displayAppointments() {
    var div = document.getElementById('appointment');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function displayFamily() {
    familyInfo();
    var div = document.getElementById('family-info');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function displayAddMember() {
    var div = document.getElementById('add-member');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function displayMember() {
    var div = document.getElementById('member-info');
    if (div.style.display !== 'none') {
        div.style.display = 'none';

    }
    else {
        div.style.display = 'block';
    }
};