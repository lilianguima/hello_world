//hello world
//BSM's
//seus objs de apredinzagem da semana


import * as express from 'express';
import { request } from 'http';
const app = express ()

const port = 4000; 

app.get('/', (request,response) => {
    response.send('Hello World') 
});
app.get('/BSMs', (request, response) => {
    response.send('Habilidades: Trabalho em equipe, Atenção aos detalhes, Proatividade,Comunicação <br> Mentalidades: Responsabilidade pessoal, Persistência, Orientação ao Futuro, Mentalidade de Crescimento')
})
app.get('/BSMs/Objetivos', (request, response) => {
    response.send('Conseguir compreender Banco de dados e a Introdução à Back-end')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})