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

//Criar um usuário
app.post('/usuario', function (req, res) {
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
app.post('/usuarioo', function (req, res) {
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

app.listen(
    3000
);