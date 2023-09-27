$(document).ready(function(){
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
});


$(document).ready(function(){
    $("form#formAlt").submit(function(e){
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            url: "api/altera.html",
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
});