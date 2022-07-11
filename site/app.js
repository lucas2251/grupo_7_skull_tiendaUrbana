const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))

app.getMaxListeners('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.getMaxListeners('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalle.html')));
app.getMaxListeners('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')));
app.getMaxListeners('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.getMaxListeners('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));