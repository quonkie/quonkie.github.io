var myVideo = document.getElementById("myVideo");

//myVideo.play();

function playVideo(){
	//alert("SHOW ME WHAT YOU GOT");
	myVideo.play();
}

function pauseVideo(){
	myVideo.pause(); 
}

var videoIsPlaying = false;
function playPauseVideo(){
	if(videoIsPlaying == false){
		myVideo.play();
		document.getElementById("playPause").innerHTML =
		videoIsPlaying = true;
	}else{
		myVideo.pause();
		document.getElementById("playPause").innerHTML = "Video is paused";
		videoIsPlaying=false;
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
	console.log("Volume Slider Value: "+videoVolume.value);
	//myVideo.volume = .25;
	myVideo.volume = videoVolume.value/ videoVolume.max;
	console.log("Actual vdeo volume: "+videoVolume.value / videoVolume.max)
}


var videoSeeking = document.getElementById("videoSeeking");
function seekVideo(){
	//console.log(myVideo.currentTime);
	//console.log(myVideo.seekable,end(0))
	//myVideo.currentTime =60;
	myVideo.currentTime = (videoSeeking.value / videoSeeking.max) * myVideo.seekable.end(0);
}


