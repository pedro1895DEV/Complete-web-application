//Verificar pendências de um usuário
$("#botao").click(() => {
    let numero = $('#id-usuario').val();
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/usuario/${numero}`,
        success: function (res) {
            $('#nome').html(res.resultado.nome_usuario)
            $('#ocorrencia').html(res.resultado.tipo_ocorrencia)
        }
    })
});

//Criar um usuário
$('#botao2').click(
    () => {
        let nome1 = $('#nome').val();
        let idade1 = $('#idade').val();
        let cpf1 = $('#cpf').val();
        let email1 = $('#email').val();
        $.ajax(
            {
                type: 'POST',
                url: `http://localhost:3000/usuario2/`,
                data: JSON.stringify(
                    {
                        nome_usuario: nome1,
                        idade: idade1,
                        cpf: cpf1,
                        email: email1
                    }
                ),
                contentType: "application/json",
                dataType: 'json'
            }
        )
    }
);

//Deletar um usuário existente

$('#botao3').click(
    () => {
        let numero2 = $('#digitado').val();

        $.ajax(
            {
                type: 'POST',
                url: `http://localhost:3000/usuario3/`,
                data: JSON.stringify(
                    {
                        id_usuario: numero2
                    }
                ),
                contentType: 'application/json'

            }
        )
    }
);

//Atualizar dados de um usuário

$('#botao4').click(
    () => {
        let id = $('#id_usuario').val();
        let nome = $('#nome_usuario').val();
        let idade1 = $('#idade').val();
        let cpf = $('#cpf').val();
        let email = $('#email').val();

        $.ajax(
            {
                type: 'POST',
                url: `http://localhost:3000/usuario4/`,
                data: JSON.stringify(
                    {
                        id_usuario: id,
                        nome_usuario: nome,
                        idade: idade1,
                        cpf: cpf,
                        email: email
                    }
                ),
                contentType: 'application/json'
            }
        )
    }
);

//Verificar pendências através do nome do usuário

$("#botao5").click(() => {
    let numero = $('#nome-usuario').val();
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/usuario5/${numero}`,
        success: function (res) {
            $('#nome').html(res.resultado.nome_usuario);
            $('#idade').html(res.resultado.idade);
            $('#livro').html(res.resultado.nome_livro);
        }
    })
});