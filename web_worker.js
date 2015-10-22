

if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker('temperatura.js');
  //myWorker.importScripts('temperatura.js');
  function  
	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]); //sending message as array to the worker
	  console.log('Message posted to worker');
	};

	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}else{
  document.getElementById("result").innerHTML = "Lo sentimos! Web Worker No son soporatod.";
}
