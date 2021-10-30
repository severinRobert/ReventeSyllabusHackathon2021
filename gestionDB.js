let fs = require("fs");

function lireOffre() {
        fs.readFile('OffreDB.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
            return JSON.parse(data);
        });
}
function ecrireOffre(data) {
    data = JSON.stringify(data)
    fs.writeFile('OffreDB.txt', data, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Ecriture sans erreurs");
    });
}
