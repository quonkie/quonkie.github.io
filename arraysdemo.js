var myPicture = document.getElementById("my-picture");
var myDescription = document.getElementById("my-description");
var counter = 0;

var pictures;
pictures = [
		"http://placehold.it/800x600/ff0000/0000ff?text=Image 1",
		"http://placehold.it/800x600/f00f00/ff00ff?text=Image 2",
		"http://placehold.it/800x600/f0f00/000fff?text=Image 3",
		"http://placehold.it/800x600/ff00ff/00ff00?text=Image 4",
		"http://placehold.it/800x600/ff00ff/00ff00?text=Image 5"
		];

var descriptions;

descriptions = [
	"This is my first pic",
	"My second pic",
	"Third pic, Morty",
	"Fourth pic, get schwifty",
	"I'm Mr. Meeseeks. Look at me!"

]



//if you create varibles ourside function then you can create them and use them anywhere in yuor script

function changeImage(){
	counter++;
	//alert(counter);
	//myPicture.src = pictures[3];
	myPicture.src = pictures[counter];
	myDescription.innerHTML = descriptions[counter];

if(counter > 4){

		counter=0;
		myPicture.src= pictures[counter];
		myDescription.innerHTML = descriptions[counter];
}

}

