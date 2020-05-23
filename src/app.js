const express = require('express');
const app = express();
const path = require('path');

//Configuración de la aplicación
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index'));

/*//Static
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public/'))
app.use(express.static(path.join(__dirname, 'public')));*/

module.exports = app;
