//alert("SHOW ME WHAT YOU GOT");

var myAudio = document.getElementById("myAudio");
var myPicture = document.getElementById("my-picture");
var myDescription = document.getElementById ("my-description");

//function playAudio(){
	//myAudio.play();

//}

//function pauseAudio(){

	//myAudio.pause();
//}

var audioIsPlaying = false;
function playPause(){
	if(audioIsPlaying == false){
		myAudio.play();
		document.getElementById("playPause").innerHTML = "Video is Playing";
		audioIsPlaying = true;
	}else{

		myAudio.pause();
		document.getElementById("playPause").innerHTML = "Video is Paused";
		audioIsPlaying = false;
	}
}



function muteAudio(){

	if(myAudio.muted == false){
		myAudio.muted = true;
	}else{
		myAudio.muted = false;
	}
}

var audioVolume = document.getElementById("audioVolume");
//videoVolume.value = 25;
function volumeAudio(){
	myAudio.muted = false;
	console.log("Volume Slider Value: "+audioVolume.value);
	myAudio.volume = audioVolume.value/audioVolume.max;
	console.log("Actual Video Volume: "+audioVolume.value / audioVolume.max);
}

var audioSeek = document.getElementById("audioSeeking");
function seekAudio (){

	//console.log(myVideo.currentTime);
	//console.log(myVideo.seekable.end(0))
	myAudio.currentTime = (audioSeek.value / audioSeek.max)* myAudio.seekable.end(0);
	console.log("")

}


var audios;
audios = [
	"media/610.mp3",
	"media/dodie2.mp3",
	"media/you.mp3"

];

var pictures;
pictures = [
	
	"610WhiteT.jpg",
	"intertwined.jpg",
	"dodieyellow.jpg"
	

];

var descriptions;

descriptions = [

	" 6/10 - Dodie Clark",
	"Would You Be So Kind - Dodie Clark ",
	"You - Dodie Clark"
	

]

var counter = 0;

function changeImage(){


	counter++;
	//alert(counter);
	myAudio.src= audios[counter];
	myPicture.src= pictures[counter];
	myDescription.innerHTML = descriptions[counter];
	//myLink.href = links[counter];
	

if(counter > 2){

		counter = 0;
		myAudio.src= audios[counter];
		myPicture.src= pictures[counter];
		myDescription.innerHTML = descriptions[counter];
		//myLink.href = links[counter];
		

	

}

}

function changeImage2(){

counter--;
	//alert(counter);
	myPicture.src= pictures[counter];
	myAudio.src= audios[counter];
	myDescription.innerHTML = descriptions[counter];
	//myLink.href = links[counter];
	

if(counter < 0){

		counter = 2;
		myPicture.src= pictures[counter];
		myAudio.src= audios[counter];
		myDescription.innerHTML = descriptions[counter];
		//myLink.href = links[counter];
		

	

}



}