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
    var output = "<h3>Families</h3>";
    for (var i = 0; i < families.families.length; i++) {
        output += "<div class='button'><a onclick='displayFamily()'>" + families.families[i].familyName + " &rightarrow; </a></div>";
    }
    document.getElementById("lander-families").innerHTML = output;
}

function landerAppointments() {
    var appointments = JSON.parse(localStorage.getItem('appointments'));
    var output = "<h3>Appointments</h3>";
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

function displayFamily() {
    familyInfo();
    document.getElementsByClassName('display').class = "hide";
    document.getElementById('family-info').class = "display";
}

function familyInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<h3>Jones Family</h3>";
    for (var i = 0; i < jones.members.length; i++) {
        output += "<div class='button'><a onclick='displayMember()'>" + jones.members[i].name + " &rightarrow; </a></div>";
    }
    output += "<br/><input type='button' onclick='displayLander()' value='Back'/>";
    document.getElementById("family-display").innerHTML = output;
}

function displayAddMember() {
    document.getElementsByClassName('display').class = "hide";
    document.getElementById('family-info').class = "display";
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

function displayMember() {
    memberInfo();
    document.getElementsByClassName('display').class = "hide";
    document.getElementById('member-info').class = "display";
}

function memberInfo() {
    var jones = JSON.parse(localStorage.getItem('jones'));
    var output = "<table><tr><td>Name:</td><td>" + jones.members[0].name + "</td></tr>"
               + "<tr><td>Position In Family:</td><td>" + jones.members[0].position + "</td></tr>"
               + "<tr><td>Birthday:</td><td>" + jones.members[0].birthday + "</td></tr>"
               + "<tr><td>Notes:</td><td>" + jones.members[0].notes + "</td></tr>"
               + "<tr><td><input type='button' onclick='displayFamily()' value='Back'/></td></table>";
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
};