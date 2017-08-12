var myPicture = document.getElementById("my-picture");
var myDescription = document.getElementById("my-description");
var myLink = document.getElementById("link")
var counter = 0;

var pictures;
pictures = [
		"YAYLouise.jpg",
		"RockOn.jpg",
		"PrettyCow.jpg",
		"FoodFight.png",
		"SINGING.jpg"
		];

var descriptions;

descriptions = [
	"How I feel when I get my Web code to work",
	"Making this Array Assignment to work makes me feel like a rock star.",
	"Some people have dogs or cats...but hey, who says you can't have a pet cow",
	"Food fight!",
	"SINGING! LOTS OF SINGING! (Poor Bob...)"

]

var links;

links =[

	"https://www.buzzfeed.com/laurenmcewen349/louise-belcher-of-bobs-burgers-is-the-funniest-n61m",
	"https://www.youtube.com/watch?v=QcdPxVfG2Oo",
	"http://www.wikihow.com/Have-a-Pet-Cow",
	"https://www.pinterest.com/sarahgisi3/sarah-anderson-sarahs-scribbles/",
	"http://owlturd.com/"

]



//if you create varibles ourside function then you can create them and use them anywhere in yuor script

function changeImage(){
	counter++;
	//alert(counter);
	//myPicture.src = pictures[3];
	myPicture.src = pictures[counter];
	myDescription.innerHTML = descriptions[counter];
	myLink.href = links[counter];

if(counter > 4){

		counter=0;
		myPicture.src= pictures[counter];
		myDescription.innerHTML = descriptions[counter];
		myLink.href = links[counter];
}

}

function changeImage2(){
	counter--;
	//alert(counter);
	//myPicture.src = pictures[3];
	myPicture.src = pictures[counter];
	myDescription.innerHTML = descriptions[counter];
	myLink.href = links[counter];

if(counter < 0){

		counter=4;
		myPicture.src= pictures[counter];
		myDescription.innerHTML = descriptions[counter];
		myLink.href = links[counter];
}

}

