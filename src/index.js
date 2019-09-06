const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
// require ('./db')


// settings
app.set('port', process.env.PORT || 3000); // envia el puerto a app.get port, con process validamos puerto definido en sistema o la nube sino tome 3000.

app.set('json spaces', 2); // mas organizado a la hora de mostrarlo

// middlewares

app.use(morgan('dev')); // veo por consola lo que llega al servidor
app.use(cors());
app.use(express.json()); // recibe formato json y entenderlo
app.use(express.urlencoded({extended: false})); // tratamos de entender datos que llegan de formularios, datos sencillos, input de formularios.



// routes
app.use(require('./routes/index'));
app.use('/api/serviteca', require('./routes/serviteca'));

// starting the server
app.listen(app.get('port'), () => { // recibe el puerto de app.set
    console.log(`Server on port ☺️☺️ ${app.get('port')}`); // recibe puerto y envia mensaje de conexion
});