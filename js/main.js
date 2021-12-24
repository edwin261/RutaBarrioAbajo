var INMUEBLE_Img = false;
var JUEGOS_Img = false;
var COCINA_Img = false;
var FIESTA_Img = false;
var DANZA_Img = false;
var MEMORIA_Img = false;
var isplayed = 0;

        $(document).ready(function(){
            $("#myModal").modal('show');
        });

$("document").ready(function() {
    //image INMUEBLE
    $("#img_INMUEBLE").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/INMUEBLE.png');
    });
    //image INMUEBLE hover
    $("#img_INMUEBLE").mouseleave(function() {
        if (INMUEBLE_Img != true) {
            $(this).attr('src', 'img/buttons/White/INMUEBLE.png');
        }
    });

    //image JUEGOS
    $("#img_JUEGOS").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/JUEGOS.png');
    });
    //image JUEGOS hover
    $("#img_JUEGOS").mouseleave(function() {
        if (JUEGOS_Img != true) {
            $(this).attr('src', 'img/buttons/White/JUEGOS.png');
        }
    });

    //image COCINA
    $("#img_COCINA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/COCINA.png');
    });
    //image COCINA hover    
    $("#img_COCINA").mouseleave(function() {
        if (COCINA_Img != true) {
            $(this).attr('src', 'img/buttons/White/COCINA.png');
        }
    });

    //image FIESTA
    $("#img_FIESTA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/FIESTA.png');
    });
    //image FIESTA hover    
    $("#img_FIESTA").mouseleave(function() {
        if (FIESTA_Img != true) {
            $(this).attr('src', 'img/buttons/White/FIESTA.png');
        }
    });

    //image DANZA
    $("#img_DANZA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/DANZA.png');
    });
    //image DANZA hover    
    $("#img_DANZA").mouseleave(function() {
        if (DANZA_Img != true) {
            $(this).attr('src', 'img/buttons/White/DANZA.png');
        }
    });

    //image MEMORIA
    $("#img_MEMORIA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/MEMORIA.png');
    });
    //image MEMORIA hover    
    $("#img_MEMORIA").mouseleave(function() {
        if (MEMORIA_Img != true) {
            $(this).attr('src', 'img/buttons/White/MEMORIA.png');
        }
    });

    $("#divModal").css("visibility", "visible");
});

function Click_Image_Button_Option(image_id) {
    HideTextDescripcion();
    Default_Image_Button_Option();
    Default_Variables_Value();
    $("#img_" + image_id).attr('src', 'img/buttons/Green/' + image_id + '.png');
    $("#selloImage").css("visibility", "visible");
    $("#ContainerDesctipcion").css("visibility", "visible");
    $("#ContainerDesctipcion").css('height', '79%');
    $("#ContainerDesctipcion").css('padding-top', '41%');

    switch (image_id) {
        case "INMUEBLE":
            INMUEBLE_Img = true;
            ChangeSelloImage('SELLO_INMUEBLE');
            ChangeDescripcion('BIENES INMUEBLE');
            $("#InmuebleDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1pT0kqFOedkh5Vwqe1C0vI-2GimS_qrIM");
            break;
        case "JUEGOS":
            JUEGOS_Img = true;
            ChangeSelloImage('SELLO_JUEGOS');
            ChangeDescripcion('JUEGOS TRADICIONALES');
            $("#JuegosDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1i5wd_PMHSgfnC2ccYrldntWwCTwTo57n");
            break;
        case "COCINA":
            COCINA_Img = true;
            ChangeSelloImage('SELLO_COCINA');
            ChangeDescripcion('COCINAS TRADICIONALES');
            $("#CocinasDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1fD8_3NsIaDzixI5PGYMRykt87FlezlfF");
            break;
        case "FIESTA":
            FIESTA_Img = true;
            ChangeSelloImage('SELLO_FIESTA');
            ChangeDescripcion('FIESTAS Y CELEBRACIONES');
            $("#FiestasDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1VsXkHCT8e_tBaLiRa9qGIOX15Uh0kq9N");
            break;
        case "DANZA":
            DANZA_Img = true;
            ChangeSelloImage('SELLO_DANZA');
            ChangeDescripcion('DANZA Y MÚSICA');
            $("#DanzaDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1tgwqUwKIql9398axwFjPpLQJDOPZJKFE");
            break;
        case "MEMORIA":
            MEMORIA_Img = true;
            ChangeSelloImage('SELLO_MEMORIA');
            ChangeDescripcion('ESPACIO DE MEMORIA');
            $("#MemoriaDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1_B8XQrLu6dvkjODviHr8tZXB-r44Vp1O");
            break;
    }
    $("#menuOptions").fadeOut(200);
    show_menu = true;
}

function Default_Image_Button_Option() {
    $("#img_INMUEBLE").attr('src', 'img/buttons/White/INMUEBLE.png');
    $("#img_JUEGOS").attr('src', 'img/buttons/White/JUEGOS.png');
    $("#img_COCINA").attr('src', 'img/buttons/White/COCINA.png');
    $("#img_FIESTA").attr('src', 'img/buttons/White/FIESTA.png');
    $("#img_DANZA").attr('src', 'img/buttons/White/DANZA.png');
    $("#img_MEMORIA").attr('src', 'img/buttons/White/MEMORIA.png');
}

function Default_Variables_Value() {
    INMUEBLE_Img = false;
    JUEGOS_Img = false;
    COCINA_Img = false;
    FIESTA_Img = false;
    DANZA_Img = false;
    MEMORIA_Img = false;
}

function ChangeSelloImage(image){
    $("#selloImage").attr('src', 'img/Sellos/' + image + '.png');
}

function ChangeDescripcion(title){
    $("#TitleDescripcion").html(title);
}

function HideTextDescripcion(){
    $("#InmuebleDescripcion").css('display', 'none');
    $("#JuegosDescripcion").css('display', 'none');
    $("#CocinasDescripcion").css('display', 'none');
    $("#FiestasDescripcion").css('display', 'none');
    $("#DanzaDescripcion").css('display', 'none');
    $("#MemoriaDescripcion").css('display', 'none');
}

function CloseContainerDescripcion(){
    $("#ContainerDesctipcion").css("visibility", "hidden");
    $("#selloImage").css("visibility", "hidden");
}

var show_menu = true;
function showMenu(){
    if(show_menu){
        $("#menuOptions").fadeIn(200);
        show_menu = false;
    }else{
        $("#menuOptions").fadeOut(200);
        show_menu = true;
    }
}

function ClosedivModal(){
    $("#divModal").css("display", "none");
}