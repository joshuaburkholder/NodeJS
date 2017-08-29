

//Christmas tree effect:

asyncFunction1(inputParam, function(err, results1){
	asyncFunction2(inputParam, function(err, results2){
		asyncFunction3(inputParam, function(err, results3){
			asyncFunction4(inputParam, function(err, results4){
				// fa la la la, la la la la
			});
		});
	});
});


// This problem makes code difficult to maintain.

// You can avoid wasseling through Node by wisely using:
// - Named functions
// - Modules
// - Event emitters
// - Streams





// Pluralsight: Introduction to Node.js