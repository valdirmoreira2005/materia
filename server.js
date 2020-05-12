const express = require('express');

const server = express();

server.use(express.json());

// materia(id, nome, professor, semestre)

const materia = [
    {id: 1, nome: 'LP3', professor: 'Henrique Dezani', semestre: '5º'},
    {id: 2, nome: 'Inglês 2', professor: 'Teucle', semestre:'2º'} 
]

server.get('/materia', function(request, response) {
    response.json(materia);
})

server.post('/materia', function(request, response) {
   
    const {id, nome, professor, semestre} = request.body;

    materia.push({id, nome, professor, semestre})
    response.status(204).send();
})

server.put('/materia/:id', function(request, response) {
    const id = request.params.id;
    const {nome, professor, semestre} = request.body;

   for(let i = 0; i < materia.length; i++){
        if(materia[i].id == id) {
            materia[i].nome = nome;
            materia[i].professor = professor;
            materia[i].semestre = semestre;
            break;
        }
    }

    return response.status(204).send();

})

server.delete('/materia/:id', function(request, response) {

    const id = request.params.id;

    for(let i = 0; i < materia.length; i++){
        if(materia[i].id == id) {
            materia.splice(i, 1)
            break;
        }
    }

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);