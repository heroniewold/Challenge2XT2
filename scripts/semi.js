
var startTime = 0;
var stopwatchHandle;

function updateStopwatch(){

  // get current time
	var currentTime = new Date();

  // more accurate time keeping
	var milliSeconds = currentTime.getTime() - startTime.getTime();
	document.getElementById('stopwatch').innerHTML = milliSeconds + ' milliseconds';

  // convert from miliseconds to sec.
	//var seconds = Math.round(milliSeconds/1000);
	//document.getElementById('stopwatch').innerHTML = seconds + ' seconds';
	
}

document.getElementById('start').onclick = function(){
	startTime = new Date();
	stopwatchHandle = setInterval(updateStopwatch, 1);
}

document.getElementById('stop').onclick = function(){
	clearInterval(stopwatchHandle);
}


