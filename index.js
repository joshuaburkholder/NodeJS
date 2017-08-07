var readline = require("readline"),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("-->");
rl.prompt();

var toDoList = [];

var commands = {
    list: function(){
        console.log(toDoList);
    },
    add: function(item){
        toDoList.push(item);
    },
    remove: function(item){
       console.log(item);
        var index = toDoList.indexOf(item);
        console.log(index);
        if(index != -1)
            toDoList.splice(index, 1);
     }
};

rl.on('line', function(line){
    var words = line.split(' ');
        command = words.shift();
        argStr = words.join(' ');

    commands[command](argStr); 

    rl.prompt();
});


// var index = array.indexOf(item);
// array.splice(index, 1);