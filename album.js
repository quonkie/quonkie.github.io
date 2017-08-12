alert("did this work?");
var counter = 0;
var myVideo = document.getElementById("myVideo");

//myVideo.play();

var songsOnPage = [
		"media/portland.m4a",
		"media/helix.m4a",
		"media/one-dance.m4a"
	];

var songsOnOgg = [
		"media/portland.ogv",
		"media/helix.ogg",
		"media/one-dance.ogg"
	];	
..
var myPictureArray = [
		"img/more-life.jpeg",
		"img/flume-skin.jpg",
		"img/one-dance.jpg"
	];

var descriptions;
descriptions = [
		"Artist: Drake (ft. Quavo and Travis Scott) - Song: Portland",
		"Artist: Flume - Song: Helix",
		"Artist: Drake - Song: One Dance"

	];

function nextSong(){
	counter++;
	console.log(counter);
	myPicture.src = myPictureArray[counter];
	document.getElementById("audio-m4a").src = songsOnPage[counter];
	document.getElementById("audio-ogv").src = songsOnOgg[counter];
	document.getElementById("descriptions").innerHTML = descriptions[counter];
	document.getElementById("myPicture").src = myPictureArray[counter];
	myVideo.load();
	if(counter >2){
		counter = 0;
		myPicture.src = myPictureArray[counter];
		document.getElementById("audio-m4a").src = songsOnPage[counter];
		document.getElementById("audio-ogv").src = songsOnOgg[counter];
		document.getElementById("descriptions").innerHTML = descriptions[counter];
		document.getElementById("myPicture").src = myPictureArray[counter];
	// 	myPicture.src = myPictureArray[counter];
	// 	document.getElementById("counter-check").innerHTML = counter;
	// 	myDescription.innerHTML = descriptions[counter];
	}	
}

function previousSong(){
	counter--;
	console.log(counter);
	myPicture.src = myPictureArray[counter];
	document.getElementById("audio-m4a").src = songsOnPage[counter];
	document.getElementById("audio-ogv").src = songsOnOgg[counter];
	document.getElementById("descriptions").innerHTML = descriptions[counter];
	document.getElementById("myPicture").src = myPictureArray[counter];
	myVideo.load();
	if(counter <0){
		counter = 2;
		myPicture.src = myPictureArray[counter];
		document.getElementById("audio-m4a").src = songsOnPage[counter];
		document.getElementById("audio-ogv").src = songsOnOgg[counter];
		document.getElementById("descriptions").innerHTML = descriptions[counter];
		document.getElementById("myPicture").src = myPictureArray[counter];
	}
}

function playVideo(){
	myVideo.play();
}

function pauseVideo(){
	myVideo.pause();
}

var videoIsPlaying = false;
function playPauseVideo(){
	if(videoIsPlaying == false){
		myVideo.play();
		document.getElementById("playPause").innerHTML = "Video is playing";
		videoIsPlaying = true;
	}else{
		myVideo.pause();
		document.getElementById("playPause").innerHTML = "Video is paused";
		videoIsPlaying = false;
	}
}

function muteVideo(){
	if(myVideo.muted == false){
		myVideo.muted = true;
	}else{
		myVideo.muted = false;
	}
}

var videoVolume = document.getElementById("videoVolume");
//videoVolume.value = 25;
function volumeVideo(){
	myVideo.muted = false;  //Muting and volume are 2 different functions
	console.log("Volume Slider Value: "+videoVolume.value); //Console log sends data to the browser so you can look at it
	myVideo.volume = videoVolume.value / videoVolume.max; //On a scale from 0 to 1 (0.75)
	console.log("Actual video volume: "+videoVolume.value / videoVolume.max);
}

var videoSeeking = document.getElementById("videoSeeking");
function seekVideo(){
	//console.log(myVideo.currentTime);
	//console.log(myVideo.seekable.end(0));
	//myVideo.currentTime = 60;
	myVideo.currentTime = (videoSeeking.value / videoSeeking.max) * myVideo.seekable.end(0);