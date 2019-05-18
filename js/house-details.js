$(document).ready(function () {
    //localStorage.clear();
    users = JSON.parse(localStorage.getItem("users"));
    houses = JSON.parse(localStorage.getItem("houses"));
    var url = window.location.href.split("#")[1];
    console.log(url);
    url = url.split("_").join(" ");
    console.log(url);

    //houses[url] Aceder propriedades
    var titulo = houses[url].titulo;
    var descricao = houses[url].descricao;
    var detalhes = houses[url].detalhes;
    var precos = houses[url].precos;
    var morada = houses[url].morada;
    var comodidades = houses[url].comodidades;
    var fotografias = houses[url].fotografias;
    var comentarios = houses[url].comentarios;
    var avaliacao = houses[url].avaliacao;
    console.log(comodidades);
    //Internet,Maquina Lavar Roupa,Ar condicionado,Secador,TvCabo, Intercomunicador, Elevador,Maquina Lavar louça
    var wifi = 0, mlr = 0, ac = 0, seca = 0, tv = 0, ic = 0, eleva = 0, mll = 0;

    
    var fotofinal = fotografias[0];

    //Criar verificaçoes para comidades
    for (i = 0; i < comodidades.length; i++) {
        var linha = comodidades[i];
        console.log(i);
        if (linha == "internet") {
            $("#Internet").removeAttr("hidden");
        }
        if (linha == "tvCabo") {
            $("#TvCabo").removeAttr("hidden");
        }
        if (linha == "maquinaLavarLouca") {
            $("#MaquinaLavarLouca").removeAttr("hidden");
        }
        if (linha == "aquecimento") {
            $("#Aquecimento").removeAttr("hidden");
        }
        if (linha == "maquinaLavarRoupa") {
            $("#MaquinaLavarRoupa").removeAttr("hidden");
        }
        if (linha == "intercomunicador") {
            $("#Intercomunicador").removeAttr("hidden");
        }
        if (linha == "secador") {
            $("#Secador").removeAttr("hidden");
        }
        if (linha == "elevador") {
            $("#Elevador").removeAttr("hidden");
        }
    }

    //Nao haver comodidades, esconder
    if (comodidades.length <= 0) {
        $("#comodi").hide();
    }

    //
    $("#slideImages").append('<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
        '<div id="imagensInner" style="max-height:500px;" class="carousel-inner">' +
        '</div>' +
        '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</a>' +
        '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</a>' +
        '</div>');
    if (fotografias.length != 0) {
        for (i = 0; i < fotografias.length; i++) {
            if (fotografias.length == 0) {
                $("#slideImagens").hide();
            }
            else {
                if (i == 0) {
                    $("#imagensInner").append(
                        `<div class="carousel-item active">
          <img class="d-block w-100" src="`+ fotografias[0] + `" alt="Slide">
          </div>`);
                }
                else {
                    $("#imagensInner").append(
                        `<div class="carousel-item">
            <img class="d-block w-100" src="`+ fotografias[i] + `" alt="Slide">
            </div>`);
                }
            }
        }
    }
    else {
        $("#slideImages").hide();
        $("#images").before('<h4>Não existem imagens!</h4>')
    }

    //Retornar Preços e info basica , Preco im[4][0], infoBasica --> im[2]
    $("#precos").append('<p><i class="fa fa-dollar"></i> Mensal Price: ' + precos[0] + '€<br>' +
        '<i class="fa fa-dollar"></i> Monthly Bills: ' + detalhes[3] + '<br>' +
        '<i class="fa fa-dollar"></i> Cleaning Fee: ' + precos[1] + '€<br>')

    //Retornar BasicInfo
    $("#infoBasica").append('<p><i class="fa fa-users"></i> Max Number of Residents: ' + detalhes[0] + '<br>' +
        '<i class="fa fa-bed"></i> Bedrooms available: ' + detalhes[1] + '<br>' +
        '<i class="fa fa-shower"></i> WC: ' + detalhes[2] + '<br>')

    console.log(morada);
    //Retornar morada
    $("#morada").append('<p></i> Morada: ' + morada[0] + " nº" + morada[5] + '<br>' +
        ' Freguesia: ' + morada[1] + " em " + morada[2] + '<br>' +
        ' Codigo Postal: ' + morada[4] + '<br>')

    //Retornar Descriçao
    $("#titulo").text(titulo);
    $("#descricao").text(descricao);
    $("#img1").attr("src", fotografias[0]);
    $("#img2").attr("src", fotografias[1]);
    if (comentarios.length != 0) {
        $("#comentarios_head").append('<div class="col-sm-4"><h4><b>' + "Reviews " + '<span class="badge badge-pill badge-primary">' + comentarios.length + '</b ></h4 ></span></div>');
        $("#comentarios_head").append('<div id="classificacao" class="offset-sm-3 col-sm-5 row"><h4 style="margin-right: 10px;"><b>Classificação </b ></h4 ></div>');
        var avarVal = 0;
        for (var h = 0; h < avaliacao.length; h++) {
            avarVal += avaliacao[h];
        }
        console.log(avarVal);
        avarVal = Math.floor(avarVal / avaliacao.length);
        console.log(avarVal);
        for (var i = 0; i < avarVal; i++) {
            $("#classificacao").append('<span style=" font-size: 30px;" class="fa fa-star checked"></span>');
        };
        for (var i = 0; i < 5 - avarVal; i++) {
            $("#classificacao").append('<span style="font-size: 30px;" class="fa fa-star"></span>');
        };

        $("#comentarios_body").append("<br />");
        $.each(comentarios, function (index, value) {
            $("#comentarios_body").append("<div><span>" + value + "</span></div>");
            $("#comentarios_body").append("<hr>");
        });

    }
    else {
        $("#comentarios_head").append('<div class="col-sm-4"><h4><b>' + "Reviews " + '<span class="badge badge-pill badge-primary">' + comentarios.length + '</b ></h4 ></span></div>');
        $("#comentarios_head").append('<div id="classificacao" class="offset-sm-3 col-sm-5 row"><h4 style="margin-right: 10px;"><b>Classificação </b ></h4 ></div>');
        var avarVal = 0;
        for (var h = 0; h < avaliacao.length; h++) {
            avarVal += avaliacao[h];
        }
        console.log(avarVal);
        avarVal = Math.floor(avarVal / avaliacao.length);
        console.log(avarVal);
        for (var i = 0; i < 5; i++) {
            $("#classificacao").append('<span style=" font-size: 30px;" class="fa fa-star"></span>');
        };
        $.each(comentarios, function (index, value) {
            $("#comentarios_body").append("<div><span>" + value + "</span></div>");
            $("#comentarios_body").append("<hr>");
        });
    }
    //Google maps api, ir buscar local
    var linkfinal = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCGa4bK_aIjt9GCJSz-48pZIPvO_nqsSJk" +
        "&q=" + morada[0] + " " + morada[2];
    $("#maps").attr('src', linkfinal);
});
