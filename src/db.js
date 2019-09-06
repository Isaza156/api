const mongoose = require('mongoose');

const URL = {
    mongoAtlas: 'mongodb+srv://serviteca156:jancker3217@cluster0-urj0g.mongodb.net/test?retryWrites=true&w=majority',
    mongoLocal: "mongodb://localhost/servi"
}

mongoose.connect(URL.mongoAtlas, {
     useNewUrlParser: true
})

.then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));