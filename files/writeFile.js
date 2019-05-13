const fs = require('fs');

fs.writeFile('./text.txt', 'line one', function(err) {
    if(err) {
        console.log(err);
    }
    console.log('archivo creado')
})