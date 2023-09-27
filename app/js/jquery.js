$(function(){
    
    $("#btnEnviaAlteracao").submit(function( event ) {
        event.preventDefault();
   
        // Obtém alguns valores dos elementos da página:
        var $form = $( this ),
      term = $form.find( "input[name='s']" ).val(),
      url = $form.attr( "action" );
   
    // Envia os dados usando post
    var posting = $.post( url, { s: term } );
   
    // Coloca os resultados em uma div
    posting.done(function( data ) {
      var content = $( data ).find( "#content" );
      $( "#result" ).empty().append( content );
    });
  });
});

$(document).ready(function(){
    // console.log("jquery ok");

    $("form#formAdd").submit(function(e){
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            url: "api/insere.html",
            type: "POST",
            data: formData,
            success: function(data){
                alert(data);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });

    $("#btnEnviaAlteracao").on("click", function(){
        console.log("btn clicado");

        var indice = $("#indice").val();
        var nova_situacao = $("#nova_situacao").val();
        var nova_data = $("#nova_data").val();
        var nova_consulta = $("#nova_consulta").val();
        var novo_historico = $("#novo_historico").val();

        $("#alert").html("");

        $.ajax({
            url: "./api/altera.php",
            type: "POST",
            data: {indice: indice, situacao: nova_situacao, dtAssinatura: nova_data, consulta: nova_consulta, historico: novo_historico},
            success: function(result){
                $("form").trigger("reset");
                $("#alert").addClass("alert-success");
                $("#alert").fadeIn().html(result);
                setTimeout(function(){
                    $("#alert").fadeOut("slow");
                }, 3000);
            }
        });
    });
});