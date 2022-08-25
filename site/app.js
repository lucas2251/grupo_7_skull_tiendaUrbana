const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
const methodOverride = require("method-override");

app.use(express.static(path.resolve(__dirname,'public')));

/*metodos http*/
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/* Requerir las rutas */
let indexRouter = require('./routes/index')
let productosRouter = require('./routes/productos')
let usuariosRouter = require('./routes/usuarios')
let administradorRouter = require('./routes/administrador')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.json()); //estes
app.use(express.static(path.resolve(__dirname,'public')))
/*trabajar con put y delete*/
app.use(methodOverride("_method"));

/* Rutas */
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/administrador',administradorRouter);
app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));