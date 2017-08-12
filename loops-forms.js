


var myForm = document.getElementById('myForm');
var formResults = document.getElementById("formResults");


function checkForm(){

		formResults.innerHTML = "";

		for (var i = 0; i < myForm.length; i++){
			formResults.innerHTML += myForm.elements[i].value + "<br>";
		}
}



var gallerySize = document.getElementById("gallerySize");
var myGallery = document.getElementById("myGallery");

function buildGallery(){
	myGallery.innerHTML = "";

	for (var i = 0; i < gallerySize.value; i++){
		myGallery.innerHTML += "<figure> <img src=/mypicture" + i +".jpg'></figure";
	}

}