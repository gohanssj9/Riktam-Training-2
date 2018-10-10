function doFirst(){
	var barSize = 600;
	var myMovie = document.getElementById('seconds');
	playButton = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');	

	playButton.addEventListener('click', playPause, false);
	bar.addEventListener('click', clickBar, false);
}

 function playPause(){
 	if(!myMovie.paused && !myMovie.ended){
 		myMovie.pause();
 		playButton.innerHTML = 'Play';
 		window.clearInterval(updateBar);
 	}
 	else{
 		myMovie.play();
 		playButton.innerHTML = 'Pause';
 		updateBar = setInterval(update, 500);
 	}
 }

 function clickBar(){
 	
 }