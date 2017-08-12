

//document.getElementById("mad-lib-story").innerHTML = document.getElementById("person-input").value;

function makeMadLib(){

	var person = document.getElementById("person-input").value;

	var verb = document.getElementById("verb-input").value;

	var adjective = document.getElementById("adjective-input").value;

	var noun = document.getElementById("noun-input").value;

    var person2 = document.getElementById("person-input2").value;

	var verb2 = document.getElementById("verb-input2").value;

	var adjective2 = document.getElementById("adjective-input2").value;

	var noun2 = document.getElementById("noun-input2").value;

	var person3 = document.getElementById("person-input3").value;

	var verb3 = document.getElementById("verb-input3").value;

	var adjective3 = document.getElementById("adjective-input3").value;

	var noun3 = document.getElementById("noun-input3").value;
	

	document.getElementById("mad-lib-story1").innerHTML = person + " " + verb + " a " + adjective + " " + noun + " for the evil Queen and Jack.";

	document.getElementById("mad-lib-story2").innerHTML = person2 + " " + verb2 + " a " + adjective2 + " " + noun2 + " before totally losing her mind.";

	document.getElementById("mad-lib-story3").innerHTML = person3 + ", the most beautiful princess in all the land, " + verb3 + " a " + adjective3 + " " + noun3 + " and then sold the castle for a killing!";


	document.getElementById("person-input").value = "";
	document.getElementById("verb-input").value = "";
	document.getElementById("adjective-input").value = "";
	document.getElementById("noun-input").value = "";
	document.getElementById("person-input2").value = "";
	document.getElementById("verb-input2").value = "";
	document.getElementById("adjective-input2").value = "";
	document.getElementById("noun-input2").value = "";
	document.getElementById("person-input3").value = "";
	document.getElementById("verb-input3").value = "";
	document.getElementById("adjective-input3").value = "";
	document.getElementById("noun-input3").value = "";
}

