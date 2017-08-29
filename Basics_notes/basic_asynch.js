//  Writing in asynchronous code


//A typical approach may look something like this:

var conn = getDbConnection(connectionString);
var stmt = conn.createStatement();
var results = stmt.executeQuery(SQL_Query);

for(var i=0; i<results.length; i++){
  //console.log(results[i]);
}

// In the psuedo-code above, each function executes and the following line
// builds upon the previous line.

// An asynchronous code ("non-blocking") approach would look something like this:

getDbConnection(connectionString, function(err, conn){
  conn.createStatement(function(err, stmt){
    var results = stmt.executeQuery(SQL_Query);
    results.on('row'), function(result){
      // console.log(result)
    });
  });
});

// This approach uses callbacks and an event emitter 


// Node conventions for callbacks

getstuff(inputParam, handleResults);
// *The callback is always the last parameter in async function call

// *Error is the first paramater to callback function to check for falsey values

var handleResults = function(error, results){
  // if error is undefined . . .
  // do something with the results
}

getstuff(inputParam, handleResults);


// For simple callbacks, anonymous functions are more commonly used

getstuff(inputParam, function(error, results){
   // if error is undefined
   // do something
});

// Pluralsight: Introduction to Node.js
