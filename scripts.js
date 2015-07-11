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
}

function populateLocalStorage() {
    var exampleFamilies = [
            {
            "family0":"Jones",
            "family1":"Smith"
            }
        ];
    var compatibleFamilies = JSON.stringify(exampleFamilies);
    localStorage.setItem('families', compatibleFamilies);
        
    var exampleJones = {
        "John Jones":
            {
            "position":"Father",
            "birthday":"March 15th",
            "notes":"Works construction, busy most days but free most evenings."
            },
        "Julie Jones":
            {
            "position":"Mother",
            "birthday":"June 29th",
            "notes":"Stays at home, works with young women, so Wednesdays are busy."
            },
        "Jeremy Jones":
            {
            "position":"Son",
            "birthday":"August 9th",
            "notes":"Graduating high school this year, favorite candy bar is Snickers."
            },
        "January Jones":
            {
            "position":"Daughter",
            "birthday":"Unknown",
            "notes":"Likes to dance."
            }
        };
    var compatibleJones = JSON.stringify(exampleJones);
    localStorage.setItem('jones', compatibleJones);
    
    var exampleAppointments = {
        "appointment0":
            {
            "family":"Jones",
            "date":"8th July, 2015",
            "time":"7:00pm"
            },
        "appointment1":
            {
            "family":"Smith",
            "date":"7/14/15",
            "time":"6pm"
            }
        };
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

function landerFamilies() {
    var families = JSON.parse(localStorage.getItem('families'));
    var output = "";
    for (var i = 0; i < families.length; i++) {
        output += "<div class='button-fam'><a onclick='displayFamily(" + i + ")'>" + families[i].familyName + " &rightarrow; </a></div>";
    }
    document.getElementById("lander-families").innerHTML = output;
}
function addFamily() {
    var families = JSON.parse(localStorage.getItem('families'));
    var newEntry = families.length;
    families[newEntry].familyName = document.getElementById("familyName").value;
    var compatibleFamilies = JSON.stringify(families);
    localStorage.setItem('families', families);
    landerFamilies();
}
function displayAddFamily(){

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