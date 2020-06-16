

const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool ({
    user: 'klfugwlwgznkcf',
    password: '27805267b01b7d65f94ee64854d1828ecf1e7fe9fad6b6af7934bdf761eae8fa',
    host: 'ec2-34-193-117-204.compute-1.amazonaws.com',
    database:'demmrqbq2ldigc',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

const server = express();

server.use(cors());

server.use(express.json());

// materia(id, nome, professor, semestre)

// GET
server.get('/materia', async function(request, response) {
   result = await pool.query('SELECT * FROM materia');

   return response.json(result.rows);
})

server.get('/materia/search', async function(request, response) {
    const nome = request.query.nome;
    const sql = `SELECT * FROM materia WHERE nome ILIKE $1`;
    const result = await pool.query(sql, ["%" +  nome + "%"]);
    return response.json(result.rows);
})

server.get('/materia/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM materia WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})
 
//POST
server.post('/materia', async function(request, response) {
    const nome = request.body.nome;
    const professor = request.body.professor;
    const semestre = request.body.semestre;
    const sql= `INSERT INTO materia (nome, professor, semestre) VALUES ($1, $2, $3)`;
    await pool.query(sql, [nome, professor, semestre]);
    return response.status(204).send();
})

//DELETE
server.delete('/materia/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `DELETE FROM materia WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})


//UPDATE
server.put('/materia/:id', async function(request, response) {
    const id = request.params.id;
    const { nome, professor, semestre } = request.body;
    const sql = `UPDATE materia SET nome = $1, professor = $2, semestre = $3 WHERE id = $4`;
    await pool.query(sql, [nome, professor, semestre, id]);
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);