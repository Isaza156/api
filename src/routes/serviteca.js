const express = require('express');
const router = express.Router();
const _ = require('underscore'); 
const serviteca = require('../sample.json');

router.post('/', (req, res) => {
    const { Dia, Mes, Hora, Servicio, Cedula, Nombre, Telefono, Placa } = req.body;

    if (Dia && Mes && Hora && Servicio && Cedula && Nombre && Telefono && Placa) {
        if (Hora < 8 || Hora > 18) {
            res.send('Horario Incorrecto');
        } else {
            _.each(serviteca, (servi) => {         
                if (Dia == servi.Dia && Mes == servi.Mes && Hora == servi.Hora) {
                    res.send('No tenemos Horario o Fecha Disponible');
                } else {
                    const id = serviteca.length + 1;
                    const newServi = { ...req.body, id } // con los 3 puntos ... pasa todo el objeto req.body dentro de un nuevo objeto, asi podremos guardar       
                    serviteca.push(newServi.saved());                   
                    res.json(serviteca);
                }
            });
        }
    } else {
        res.send('Faltan Campos por llenar');
    }
});


router.get('/', (req, res) => {
    res.json(serviteca);
});

router.put('/:id', (req, res) => { // actualizar un dato
    const { id } = req.params;
    const { title, year } = req.body;  // obtener datos a actualizar
    if (title && year) {
        _.each(serviteca, (servi, i) => {
            if (servi.id == id) {
                servi.title = title;
                servi.year = year;
            }
        });
        res.json(serviteca);
    } else {
        res.send('error');
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; // guarda el id que se tiene por parametros
    _.each(serviteca, (servi, i) => { // each empieza a recorrer el arreglo
        if (servi.id == id) { // propiedad id es igual al id que recibe desde la ruta
            serviteca.splice(i, 1); // splice remueve con el indice que le demos (i) y el 1 es la cantidad que elimina
        }
    });
    res.send(serviteca);
});

module.exports = router;