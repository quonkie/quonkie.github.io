var twelveHour = true;

var clockHour = document.getElementById("hour");
var clockMinute = document.getElementById("minute");
var clockSecond = document.getElementById("second");
var clockMeridiem = document.getElementById("meridiem");

//alert('first four');

var clockDay = document.getElementById("weekday");
var clockMonth = document.getElementById("month");
var clockDate = document.getElementById("date");
var clockYear = document.getElementById("year");
var bodyprop = document.getElementById("bodystuff");
var jsClock = document.getElementById("clock");

var backclr = true;

//alert('After Variables');

//changeTime();

function changeTime(){
	
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	
	var day = today.getDay();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getFullYear();
	var bodyprop = document.getElementById("bodystuff");
    bodyprop.style.background = "powderblue";

    if(backclr == true){
    	bodyprop.style.background = "powderblue";
    }else{
    	bodyprop.style.background = "seagreen";
    }


	var daysOfTheWeek = [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	];

	var monthsOfTheYear = [
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];


	if(minute < 10){
		minute = "0"+minute;
	}

	if(second <10){
		second = "0"+second;
	}

	if(twelveHour ==true){

		clockMeridiem.style.display = "inline-block";

		if(hour>11){
			clockMeridiem.innerHTML= "pm";
		}else{
			clockMeridiem.innerHTML = "am";
		}
	}else{
		clockMeridiem.style.display = "none";

	}

	if(twelveHour==true){
		if(hour>12){
			hour=hour-12;
		}
	}

	var red = hour*11.08695652173913;
	red = Math.round(red);

	var green = minute*4.32203389830508;
	green=Math.floor(green);

	var blue = second*4.32203389830508;
	blue = Math.floor(blue);


	if(twelveHour == true){
		if(hour > 12){
			hour = hour - 12;
		}
	}

//single = sign assigns value. A double = sign shows equivalency

	//jsClock.style.color = "rgb(" + hour + "," + minute + "," + second +")";
	//jsClock.style.color = "rgb(" + 255 + "," + 0 + "," + 0 +")";
	//jsClock.style.color = "rgb(" + hour x 11.08695652173913 + "," + minute + "," + second +")";

	jsClock.style.color = "rgb(" + red + "," + green + "," + blue +")";
	//jsClock.style.fontSize = second + "px";
	//document.body.backgroundImage = "url(" + myPictureArray[minute] + ")";

	clockHour.innerHTML = hour;
	clockMinute.innerHTML = minute;
	clockSecond.innerHTML = second;

	clockDay.innerHTML = daysOfTheWeek[day];
	clockMonth.innerHTML = monthsOfTheYear[month];
	clockDate.innerHTML = date;
	clockYear.innerHTML = year;
	backclr = !backclr; 

}


changeTime();
setInterval(changeTime, 1000);

function switchTo12(){
	twelveHour = true;
}

function switchTo24(){
	twelveHour = false; 
}





