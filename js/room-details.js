$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    houses = JSON.parse(localStorage.getItem("houses"));
    var url = window.location.href.split("#")[1];
    url = url.split("_").join(" ");

    var titulo = houses[url].titulo;
    var descricao = houses[url].descricao;

    var detalhes = houses[url].detalhes;
    var precos = houses[url].precos;
    var morada = houses[url].morada;
    var comodidades = houses[url].comodidades;
    var fotografias = houses[url].fotografias;
    var comentarios = houses[url].comentarios;
    var avaliacao = houses[url].avaliacao;
    var wifi = 0, mlr = 0, ac = 0, seca = 0, tv = 0, eleva = 0, mll = 0;
    var own=users[(houses[url].owner)];
    var fotofinal = fotografias[0];
    if (users["currentUser"].username==own.username){
        $("#makeReview").hide();
    }
    for (i = 0; i < comodidades.length; i++) {
        var linha = comodidades[i];
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
        if (linha == "secador") {
            $("#Secador").removeAttr("hidden");
        }
        if (linha == "elevador") {
            $("#Elevador").removeAttr("hidden");
        }
    }

    if (comodidades.length <= 0) {
        $("#comodi").hide();
    }
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

    $("#precos").append('<p><i class="fa fa-dollar"></i> Mensal Price: ' + precos[0] + '€<br>' +
        '<i class="fa fa-dollar"></i> Monthly Bills: ' + detalhes[3] + '<br>' +
        '<i class="fa fa-dollar"></i> Cleaning Fee: ' + precos[1] + '€<br>')

    $("#infoBasica").append('<p><i class="fa fa-users"></i> Max Number of Residents: ' + detalhes[0] + '<br>' +
        '<i class="fa fa-bed"></i> Bedrooms available: ' + detalhes[1] + '<br>' +
        '<i class="fa fa-shower"></i> WC: ' + detalhes[2] + '<br>')

    $("#morada").append('<p></i> Adress: ' + morada[0] + " nº" + morada[5] + '<br>' +
        ' Parish (Freguesia): ' + morada[1] + " em " + morada[2] + '<br>' +
        ' Postal Code: ' + morada[4] + '<br>')


    $("#titulo1").text(titulo);
    $("#agentName").text(own.name);
    $("#agentEmail").text(own.email);
    $("#agentPhone").text(own.contact);
    $("#adress1").text(morada[0]);
    $("#adress2").text(morada[1]);
    $("#descricao").text(descricao);
    $("#img1").attr("src", fotografias[0]);
    $("#img2").attr("src", fotografias[1]);
    if (comentarios.length != 0) {
        $("#comentarios_head").append('<div class="col-sm-8 text-primary"><h4><b>' + "Reviews " + '<span class="badge badge-pill badge-primary">' + comentarios.length + '</b ></h4 ></span></div>');
        $("#comentarios_body").append("<br />");
        $.each(comentarios, function (index, value) {
            $("#comentarios_body").append("<div><span>" + value + "</span></div>");
            $("#comentarios_body").append("<hr>");
        });

    }
    if (avaliacao.length==0) {
        $("#hidecl").hide();
    } else if (avaliacao.length!=0){
        $("#hidecl").show();
        var avarVal = 0;
        for (var h = 0; h < avaliacao.length; h++) {
            avarVal += avaliacao[h];
        }
        avarVal = Math.round(avarVal / avaliacao.length);
        for (var i = 1; i <= (5-avarVal); i++) {
                $("#classificacao").append(
                    `<i class="fas fa-3x fa-star"></i>`)
            };
            for (var i = 1; i <= avarVal; i++) {
                $("#classificacao").append(
                    `<i class="fas fa-3x fa-star" style="color:#ffc107"></i>`)
            };
    }
    var linkfinal = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCGa4bK_aIjt9GCJSz-48pZIPvO_nqsSJk" +
        "&q=" + morada[0] + " " + morada[2];
    $("#maps").attr('src', linkfinal);

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

    $(".btn-secondary").click(function () {
        modal.style.display = "block";
    });

    $("#submitComment").click(function () {
        if (($("#comment").val() != null) && ($("#comment").val().trim().length> 0 ) ){
            houses[url].comentarios.push($("#comment").val());
            if ($("#rating-5").is(":checked")) {
                houses[url].avaliacao.push(5);
            } else if ($("#rating-4").is(":checked")){
                houses[url].avaliacao.push(4);
            } else if ($("#rating-3").is(":checked")){
                houses[url].avaliacao.push(3);
            } else if ($("#rating-2").is(":checked")){
                houses[url].avaliacao.push(2);
            } else if ($("#rating-1").is(":checked")){
                houses[url].avaliacao.push(1);
            }
            localStorage.setItem("houses", JSON.stringify(houses));
            location.reload();
        }
    });

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});
