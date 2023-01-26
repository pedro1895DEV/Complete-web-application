$("#botao").click(() => {
    let numero = $('#id-usuario').val();
    $.ajax({
        type :'GET',
        url : `http://localhost:3000/usuario/${numero}`,
        success : function (res){
            $('#nome').html(res.resultado.nome_usuario)
            $('#ocorrencia').html(res.resultado.tipo_ocorrencia)              
        }
    })
})