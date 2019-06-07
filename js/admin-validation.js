$(document).ready(function () {
    utilizadores = JSON.parse(localStorage.getItem("users"));
    imoveis = JSON.parse(localStorage.getItem("houses"));

    $.each(imoveis, function (index, value) {

        if (value.estado == "Não Validado") {

         $("#myList1").append(
                    `<li>
                        <div class="row prop-text col-sm-12">
                            <div style="float: left" class="inner col-sm-6">
                                <img style="height:30px;" src="`+ value.fotografias[0] + `" onerror="this.src = ''"></img>
                                <span class="title" style="font-size: 18px;font-weight: bold"> `+ value.titulo + `</span>
                            </div>
                            <div class="col-sm-3">
                                <span style="font-size:18px">For Validation</span>
                            </div>
                            <div class="col-sm-3" >
                                <a href="room-details.html#`+ value.titulo.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="btn btn-secondary"><i class="fas fa-search-plus"></i></a>
                                <button id="validate#`+ value.titulo.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="btn btn-success" data-confirm="Are you sure you want to validate this listing?"><i class="far fa-check-square"></i></button>
                                <button id="delete#`+ value.titulo.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="btn btn-danger" data-confirm="Are you sure you want to delete this listing?"><i class="fas fa-trash"></i></button>
                            </div>
                    </li>`
                )
        } else {
                $("#myList1").append(
                    `<li>
                        <div class="row prop-text col-sm-12">
                            <div style="float: left" class="inner col-sm-6">
                                <img style="height:30px;" src="`+ value.fotografias[0] + `" onerror="this.src = ''"></img>
                                <span class="title" style="font-size: 18px;font-weight: bold"> `+ value.titulo + `</span>
                            </div>
                            <div class="col-sm-3">
                            </div>
                            <div class="col-sm-3" >
                                <a href="room-details.html#`+ value.titulo.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="btn btn-secondary"><i class="fas fa-search-plus"></i></a>
                                <button class="btn btn-success" disabled="true"><i class="fas fa-check" style>  Validated</i></button>
                            </div>
                    </li>`
            )
        }
    });

    $(".btn-danger").click(function () {
        var choice= confirm(this.getAttribute('data-confirm'));
            if (choice){
        chave = this.id.split("#")[1].split("_").join(" ");
        var list=arrayRemove(utilizadores["currentUser"].listedHouses,chave);
        utilizadores[utilizadores["currentUser"].username].listedHouses=list;
        utilizadores["currentUser"].listedHouses=list;
        delete imoveis[chave];
        localStorage.setItem("users", JSON.stringify(utilizadores));
        localStorage.setItem("houses", JSON.stringify(imoveis));
        console.log(utilizadores[utilizadores["currentUser"].username]);
        console.log(utilizadores["currentUser"].listedHouses);
         window.location.assign("admin-validation.html");
    }});

    $(".btn-success").click(function () {
        var choice= confirm(this.getAttribute('data-confirm'));
            if (choice){
        chave = this.id.split("#")[1].split("_").join(" ");
        imoveis[chave].estado="Validado";
        localStorage.setItem("houses", JSON.stringify(imoveis));
        window.location.assign("admin-validation.html");
    }});


    function arrayRemove(arr, value) {

       return arr.filter(function(ele){
           return ele != value;
       });
    }
      $('.rolldown-list li').each(function () {
  var delay = ($(this).index() / 7) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});

});