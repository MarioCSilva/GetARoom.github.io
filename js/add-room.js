$(document).ready(function () {
    class House {
       constructor(titulo, descricao, detalhes, morada, precos, comodidades, fotografias, avaliacao, comentarios, owner) {
           this.estado = "Não Validado";
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
   users = JSON.parse(localStorage.getItem("users"));
   houses = JSON.parse(localStorage.getItem("houses"));
   var fotos = [];

   $("#addFoto").click(function() {
       if (!contains(fotos, $("#imgRoom").val())) {
           fotos.push($("#imgRoom").val());
           $("#currentFoto").attr("src", $("#imgRoom").val());         
           $("#imgRoom").val("");
           console.log($("#currentFoto").attr("src"))
       }
   })

   $("#cancel").click(function () {
        window.location.assign("locator-listings.html");
    });

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
        if (valid == 1 && !(contains(houses, $("#titulo").val()))) {
            var comodidades = [];
            $.each($(".checkbox"), function (index, value) {
                if ($("#" + value.id).is(":checked"))
                    comodidades.push(value.id);
            });
       
            var room = new House($("#titulo").val(), $("#descricao").val(),[$("#pessoas").val(),
               $("#camas").val(), $("#WC").val(), $("#despesas").val()], [$("#nomeRua").val(),
               $("#freguesia").val(), $("#concelho").val(), $("#distrito").val(), $("#codigoPostal").val(),
               $("#porta").val()], [$("#precoMensal").val(), $("#taxaLimpeza").val()], comodidades, fotos, [], [], users["currentUser"].username);
            houses[$("#titulo").val()] = room;
            user1 = users["currentUser"].username;
            users[user1].listedHouses.push($("#titulo").val().split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
            users["currentUser"].listedHouses.push($("#titulo").val().split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("houses", JSON.stringify(houses));
             window.location.assign("locator-listings.html");
        } else if (valid == 1 && contains(houses, $("#titulo").val())) {
           alert("Title already taken.");
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