$(document).ready(function() {

    /****************************/
    /** Login Inputs Animation **/
    /****************************/
    var input = $(".login-input");

    input.on('blur', function () {
        //console.log("blur");
        if (this.value){
            $(this).parent('.login__form-group').addClass('focus');
        }
        else{
            $(this).parent('.login__form-group').removeClass('focus');
        }
    }).on('focus', function () {
        $(this).parent('.login__form-group').addClass('focus');
        $('.login__form-group').removeClass('shake');
    });


    /***************************************/
    /** Changing Login Background Images **/
    /***************************************/
    $(".setting-toggle").on("click", function() {
        $(".setting").toggleClass("closed")
    }), $(".body-bg").on("click", function() {
        var t = "./assets/images/login/" + $(this).attr("data-bg");
        $("body").css("background-image", "url(" + t + ")")
    });
});