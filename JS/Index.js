$(document).ready(function () {
    /*$("#form-login").validate();*/
    $("#submit").click(function(){
        var str_user = $("#user").val().trim();
        if (str_user == 'admin123') {
            $("#mensaje1").fadeOut();
            /*Redirección a segunda página*/
            location.href = "Home.html";
            return false;
        }else {
            $("#mensaje1").fadeIn(3);
            return false;
        }
    });
});

$(document).ready(function () {
    /*$("#form-login").validate();*/
    $("#submit").click(function(){
        var str_email = $("#email").val().trim();
        if (str_email == 'admin@duoc.cl') {
            $("#mensaje2").fadeOut();
            /*Redirección a segunda página*/
            location.href = "Home.html";
            return false;
        }else {
            $("#mensaje2").fadeIn(3);
            return false;
        }
    });
});


























function enviar() {
    var str_user = document.getElementById("user").val().trim();
    var str_email = document.getElementById("email").val().trim();
    if (str_user == 'admin123' || str_email == 'admin@duoc.cl') {
        location.href = "Home.html";
    }
};

/* function enviar() {
    location.href = "Home.html";
}; */
