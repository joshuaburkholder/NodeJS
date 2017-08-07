var readline = require("readline"),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("-->");
rl.prompt();

var toDoList = [];

rl.on('line', function(line){
    var words = line.split(' ');
    command = words.shift();
    argStr = words.join(' ');

    if(command === 'list'){
        console.log(toDoList);
    }
    if(command === 'add'){
        var item = words.join(' ');
        toDoList.push(item)
    }

    // toDoList.push(line);
    // console.log(toDoList);
    rl.prompt();
});

