const express = require('express');
const morgan = require('morgan');
const app = express();
const actores = require('./routes/actores.js');
require('dotenv').config();

app.use(morgan('dev'));

//Routes
app.use('/api', actores);

app.get('/', (req, res) => {
    res.send("<h1>API Academia</h1>");
})

app.get('/estudiante', (req, res) => {
    let estudiantes = [];
    estudiantes.push({nombre: 'pepito', apellido: 'perez', edad: 20})
    res.json(estudiantes);
})

app.set('port',process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}!!`)
});