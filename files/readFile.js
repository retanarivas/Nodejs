const fs = require('fs');
fs.readFile('./files/text.txt', function(err, data) {
    if(data) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
})