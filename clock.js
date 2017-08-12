var clockHour = document.getElementbyId("hour");
var clockMinute = document.getElementbyId("minute");
var clockSecond = document.getElementbyId("second");
var clockMeridiem = document.getElementbyId("meridiem");

var clockDay = document.getElementbyId("weekday");
var clockMonth = document.getElementbyId("month");
var clockDate = document.getElementbyId("date");
var clockYear = document.getElementbyId("year");

var jsClock = document.getElementbyId("clock");

function changeTime(){
	
	var today = new Date();

	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	



	clockHour.innerHTML

}

changeTime();
setInterval(changeTime, 1000);