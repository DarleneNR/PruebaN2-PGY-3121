/* $(document).ready(function () {
    $("#form-login").validate();
}); */

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
