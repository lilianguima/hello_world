"use strict";
//hello world
//BSM's
//seus objs de apredinzagem da semana
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 4000;
app.get('/', function (request, response) {
    response.send('Hello World');
});
app.get('/BSMs', function (request, response) {
    response.send('Habilidades: Trabalho em equipe, Atenção aos detalhes, Proatividade,Comunicação <br> Mentalidades: Responsabilidade pessoal, Persistência, Orientação ao Futuro, Mentalidade de Crescimento');
});
app.get('/BSMs/Objetivos', function (request, response) {
    response.send('Conseguir compreender Banco de dados e a Introdução à Back-end');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port));
});
