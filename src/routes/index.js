const { Router } = require('express'); // nuevas rutas para el servidor
const router = Router();

router.get('/',(req, res) => {
    const data = {
       "BIENVENIDO": "SERVITECA JONATHAN",
       "SERVICIOS": "1. CAMBIO DE ACEITE -- 2. CAMBIO DE FRENOS -- 3. SINCRONIZACIÓN",
       "PRECIO": "1. 5000 -- 2. 10000 -- 3. 20000",
       "HORARIO": "LUNES A VIERNES DE 8AM A 18PM (6PM), FRANJAS DE 1 HORA ( 11AM, 12PM, 13PM...)", 
    }
    res.json(data);
});
module.exports = router;