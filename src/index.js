
//	modulos
const express = require('express');

const app = express();

//	es para ajustarlo de windows que se una \ en ves 
//	de linux que usa / 
const path = require('path');

//	settings
app.set('port', process.env.PORT || 8080);

//el views es algo por defecto en express para selecionar
//the view engine y ejs es para usar logicar de3 programacion
// desde el html
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//	middlewares



//	routers
app.use(require('./routes/index'));


//	static files
app.use(express.static(path.join(__dirname,'public')));






//	listening the server
app.listen(app.get('port'), ()=> {
	console.log('iniciando servidor en el puerto', app.get('port'))
});