const livereload = require("livereload");
const liveReloadServer = livereload.createServer();


const connectLivereload = require("connect-livereload");
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.resolve(__dirname,'public')));

liveReloadServer.watch(path.join(__dirname,'public'));

app.use(connectLivereload());


/* Requerir las rutas */
let indexRouter = require('./routes/index')
//let administradorRouter = require('./routes/administrador')
let productosRouter = require('./routes/productos')
let usuariosRouter = require('./routes/usuarios')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.json()); //estes
app.use(express.static(path.resolve(__dirname,'public')))

/* Rutas */
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
//app.use('/administrador',administradorRouter);

liveReloadServer.server.once("connection",() => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 100);
});

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));