const db = require('./db')
const {Movie} = require("./models/models");


function timeout(el) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(el);
        }, 1000);
    });
    return promise;
}

async function qwerty() {
    try {
        for (let i = 0; i < db.length; i++) {
            const dbElement = db[i];
            dbElement.isNetflix = true
            dbElement.title = dbElement.title+'.'

            const el = await timeout(dbElement)

            if (el.isNetflix === true) {
                const newMovie = await Movie.create(el);
                console.log(newMovie)
            }

        }
        console.log('completed')

    } catch (e) {
        console.log(e)
    }

}


qwerty()