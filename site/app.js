const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const session = require("express-session")

const app = express();
const port = 3030;

/*implementamos locals dentro de nuestra aplicasion*/
const usuarioIngresar = require("./middlewares/userLoginCheck")

app.use(express.static(path.resolve(__dirname,'public')));

/*metodos http*/
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/* Requerir las rutas */
const indexRouter = require('./routes/index')
const productosRouter = require('./routes/productos')
const usuariosRouter = require('./routes/usuarios')
const administradorRouter = require('./routes/administrador')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname,'public')))
app.use(session({secret:"Grupo 7 SKULL"}))
app.use(usuarioIngresar)
app.use(cookieParser());
/*trabajar con put y delete*/
app.use(methodOverride("_method"));

/* Trabajar con put y delete */
app.use(methodOverride('_method'))

/* Rutas */
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/administrador',administradorRouter);
app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));