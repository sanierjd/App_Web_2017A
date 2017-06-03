/**
 * Created by sanie on 3/6/2017.
 */

const fs = require('fs');

fs.readFile('texto.txt', 'utf8',
    function (err, data){
        if (err) throw err;
        console.log(data);
});

console.log("Termina");
