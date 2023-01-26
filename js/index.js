const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const pg = require("pg")
const app = express()

app.use(cors())
app.use(bodyParser.json())

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'webapplication',
    password: 'admin',
    port: 5432,
})

client.connect()

//Verificar pendências de um usuário
app.get("/usuario/:id", (req, res) => {
    client.query({
        text: `SELECT nome_usuario, id_usuario, tipo_ocorrencia FROM usuario, ocorrencia WHERE ocorrencia.id_ocorrencia = $1`,
        values: [req.params.id]
    })
        .then((ret) => {
            res.json({
                sucesso: true,
                resultado: ret.rows[0]
            })
        })
});

//Verificar nome do usuário + idade do usuário e o livro que o usuário possui

app.get("/usuario5/:id", (req, res) => {
    client.query({
        text: `SELECT usuario.nome_usuario, usuario.idade, livro.nome_livro FROM usuario, livro WHERE usuario.id_usuario = $1`,
        values: [req.params.id]
    })
        .then((ret) => {
            res.json({
                sucesso: true,
                resultado: ret.rows[0]
            })
        })
});


//Criar um usuário
app.post('/usuario2', function (req, res) {
    client.query(
        {
            text:
                'INSERT INTO usuario (nome_usuario, idade, cpf, email) VALUES ($1, $2, $3, $4)',
            values:
                [req.body.nome_usuario, req.body.idade,
                req.body.cpf, req.body.email]
        }
    )
        .then(
            function (ret) {
                res.json(
                    {
                        dadosEnviados: req.body
                    }
                )
            }
        );
});

//Deletar um usuário existente
app.post('/usuario3', function (req, res) {
    client.query(
        {
            text:
                'DELETE FROM usuario WHERE id_usuario = $1',
            values:
                [req.body.id_usuario]
        }
    )
        .then(
            function (ret) {
                res.json(
                    {
                        dadosEnviados: req.body
                    }
                )
            }
        );
});

//Verifica a quantidade de livros que cada usuário pegou

app.post('/usuario4', function (req, res) {
    client.query(
        {
            text:
                'update usuario set nome_usuario = $2, idade = $3, cpf = $4, email = $5 where id_usuario = $1',
            values:
                [req.body.id_usuario, req.body.nome_usuario, req.body.idade, req.body.cpf, req.body.email]
        }
    )
        .then(
            function (ret) {
                res.json(
                    {
                        dadosEnviados: req.body
                    }
                )
            }
        );
});

app.listen(
    3000
);