const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalle.html')));
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));