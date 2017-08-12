//alert("SHOW ME WHAT YOU GOT");
var myTemperature = document.getElementbyId("my-temperature");
var myPicture = document.getElementbyId("my-picture");
var temperature;

function checkWeather(){

	temperature = myTemperature.value;

	if(temperature == 60) {

			myPicture.src ="spring-field.jpg"

	} else {

		myPicture.src ="snowman-winter.jpg";

	}

}