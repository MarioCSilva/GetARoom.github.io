$(document).ready(function () {

  users = JSON.parse(localStorage.getItem("users"));
    houses = JSON.parse(localStorage.getItem("houses"));
    var url = window.location.href.split("#")[1];
    url = url.split("_").join(" ");


    $("#cancel").click(function () {
        window.location.assign("locator-listings.html");
    });

    var titulo2 = houses[url].titulo;
    var descricao2 = houses[url].descricao;
    var detalhes2 = houses[url].detalhes;
    var precos2 = houses[url].precos;
    var morada2 = houses[url].morada;
    var comodidades2 = houses[url].comodidades;
    var fotografias2 = houses[url].fotografias;
    var comentarios2 = houses[url].comentarios;
    var avaliacao2 = houses[url].avaliacao;
    var wifi = 0, mlr = 0, ac = 0, seca = 0, tv = 0, eleva = 0, mll = 0;
    var own2=users[(houses[url].owner)];
    var fotofinal2 = fotografias2[0];
    var fotos2 = houses[url].fotografias;
    var estado2= houses[url].estado;
    class House {
       constructor(titulo, descricao, detalhes, morada, precos, comodidades, fotografias, avaliacao, comentarios, owner) {
            this.estado = estado2;
            this.titulo = titulo;
            this.descricao = descricao;
            this.detalhes = detalhes;
            this.morada = morada;
            this.precos = precos;
            this.comodidades = comodidades;
            this.fotografias = fotografias;
            this.avaliacao = avaliacao;
            this.comentarios = comentarios;
            this.owner=owner;
       }
   }

    $("#titulo").val(titulo2);
    houseinicial=titulo2;
    $("#descricao").val(descricao2);
    $("#pessoas").val(detalhes2[0]);
    $("#camas").val(detalhes2[1]);
    $("#WC").val(detalhes2[2]);
    $("#despesas").val(detalhes2[3]);
    $("#nomeRua").val(morada2[0]);
    $("#freguesia").val(morada2[1]);
    $("#concelho").val(morada2[2]);
    $("#distrito").val(morada2[3]);
    $("#codigoPostal").val(morada2[4]);
    $("#porta").val(morada2[5]);
    $("#precoMensal").val(precos2[0]);
    $("#taxaLimpeza").val(precos2[1]);
    $("#currentFoto").attr("src", fotos2[0]);
    $.each(comodidades2, function (index, value) {
        $("#" + value).prop("checked", true);
    });

    $("#addFoto").click(function() {
       if (!contains(fotos2, $("#imgRoom").val())) {
           fotos2.push($("#imgRoom").val());
           $("#currentFoto").attr("src", $("#imgRoom").val());         
           $("#imgRoom").val("");
       }
   })

    $("#submit").click(function () {
        var forms = document.getElementsByClassName('needs-validation');
        var valid = 0;
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            else
                valid = 1;
            form.classList.add('was-validated');
        }, false);
        coment=houses[String(houseinicial)].comentarios;
        aval=houses[String(houseinicial)].avaliacao;
        delete houses[houseinicial];
        if (valid == 1 && !(contains(houses, $("#titulo").val()))) {
            var comodidades2 = [];
            $.each($(".checkbox"), function (index, value) {
                if ($("#" + value.id).is(":checked"))
                    comodidades2.push(value.id);
            });
            var room = new House($("#titulo").val(), $("#descricao").val(),[$("#pessoas").val(),
               $("#camas").val(), $("#WC").val(), $("#despesas").val()], [$("#nomeRua").val(),
               $("#freguesia").val(), $("#concelho").val(), $("#distrito").val(), $("#codigoPostal").val(),
               $("#porta").val()], [$("#precoMensal").val(), $("#taxaLimpeza").val()], comodidades2, fotos2, aval, coment, users["currentUser"].username);
            houses[$("#titulo").val()] = room;
            users["currentUser"].listedHouses.splice( $.inArray(houseinicial, users["currentUser"].listedHouses), 1 );
            users[users["currentUser"].username].listedHouses.splice( $.inArray(houseinicial, users[users["currentUser"].username].listedHouses), 1 );
            users["currentUser"].listedHouses.push($("#titulo").val());
            users[users["currentUser"].username].listedHouses.push($("#titulo").val());
            localStorage.setItem("houses", JSON.stringify(houses));
            localStorage.setItem("users", JSON.stringify(users));
            window.location.assign("locator-listings.html");
        } else if (valid == 1 && contains(houses, $("#titulo").val())){
          var room = new House(String(houseinicial), $("#descricao").val(),[$("#pessoas").val(),
               $("#camas").val(), $("#WC").val(), $("#despesas").val()], [$("#nomeRua").val(),
               $("#freguesia").val(), $("#concelho").val(), $("#distrito").val(), $("#codigoPostal").val(),
               $("#porta").val()], [$("#precoMensal").val(), $("#taxaLimpeza").val()], comodidades2, fotos2, aval, coment, users["currentUser"].username);
            houses[String(houseinicial)] = room;
            localStorage.setItem("houses", JSON.stringify(houses));
            alert("Ad Title already exists.");
        }
   });
    function contains(a, obj) {
       for (key in a) {
           if (key.toLowerCase()==obj.toLowerCase()){
               return true;
           }
       }
       return false;
   }
});
