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
                url: `http://localhost:3000/usuario/`,
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
                url: `http://localhost:3000/usuarioo/`,
                data: JSON.stringify(
                    {
                        id_usuario: numero2
                    }
                ),
                contentType: 'application/json'

            }
        )
    }
)