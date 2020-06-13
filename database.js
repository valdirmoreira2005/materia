// yarn add pg

const Pool = require('pg').Pool;

//1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

// materia(id, nome, professor, semestre)

const pool = new Pool ({  
    user: 'klfugwlwgznkcf',
    password: '27805267b01b7d65f94ee64854d1828ecf1e7fe9fad6b6af7934bdf761eae8fa',
    host: 'ec2-34-193-117-204.compute-1.amazonaws.com',
    database:'demmrqbq2ldigc',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

//const sql = `
//    CREATE TABLE IF NOT EXISTS materia
//    (
//        id serial primary key,
//        nome varchar (200),
//        professor varchar (200),
//        semestre int
//    )
//
//`;


// pool.query(sql, function(error, result) {
//   if(error)
//         throw error
//        
//   console.log ('Tabela criada com sucesso!');    
//
//});

//INSERT

//const sql_insert = `
//       INSERT INTO materia (nome, professor, semestre) VALUES ('LP3','Henrique Dezani',5)
//`;
//
//pool.query(sql_insert, function(error, result) {
//   if(error)
//        throw error;
//
//   console.log(result.rowCount);
//})

//SELECT

// const sql_select = `SELECT * FROM materia`;
//
// pool.query(sql_select, function(error, result) {
//    if(error)
//         throw error;
//
//     console.log(result.rows);
// })