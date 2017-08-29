var maxTime = 1000;

// If input is an even number, double it
// If input is an odd number, throw an error
// (call takes a random amount of time, less than 1 sec)

var evenDoubler = function(v, callback){
	var waitTime = Math.floor(Math.random()*(maxTime+1));
	if (v%2){
		setTimeout(function(){
			callback(new Error("Odd Input"));
		}, waitTime);
	} else {
		setTimeout(function(){
			callback(null, v*2, waitTime);
		}, waitTime);
	}
};

var handleResults = function(err, results){
	if(err){
		console.log("Error:" + err.message);
	} else {
		console.log("The results are " + results);
	}
}

var count = 0;

for (var i=0; i<10; i++){
	console.log("Calling evenDoubler for value: "  + i);
	evenDoubler(i, function(err, results){
		if(err){
			console.log("Error: " + err.message);
		} else {
			console.log("The results are: " + results);
		}
		if (++count === 10){
			console.log("Done");
		}
	});
};

// evenDoubler(2, handleResults);

console.log("-----");


// Pluralsight: Introduction to Node.js