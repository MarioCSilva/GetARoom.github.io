$(document).ready(function () {
    utilizadores = JSON.parse(localStorage.getItem("users"));
    imoveis = JSON.parse(localStorage.getItem("houses"));

    if (utilizadores["currentUser"].listedHouses.length == 0) {
            $("#1").append(
                '<h3 class="text-danger">No listings!</h3>'
            );
        }
    if (utilizadores["currentUser"].typeUser=="locator"){
        $.each(utilizadores["currentUser"].listedHouses, function (index, value) {
                    $("#myList").append(
                        `<li><div class="row prop-text col-sm-12"><div style="float: left;" class="inner col-sm-6">
               <img style="height:30px;" src="`+ imoveis[value].fotografias[0] + `" onerror="this.src = ''"></img><span class="title" style="font-size: 18px;font-weight: bold">  `+ imoveis[value].titulo + `
                </span></div><div class="col-sm-3"><span style="font-size:18px">`+ imoveis[value].estado + `</span></div><div class="col-sm-3" >
                <a href="room-details.html#`+ value.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="btn btn-success"><i class="fas fa-search-plus"></i></a>
                <a href="locator-room-edit.html#`+ value.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="btn btn-secondary"><i class="fas fa-edit"></i></a>
                <button id="delete#`+ value.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="btn btn-danger" data-confirm="Are you sure you want to delete this listing?"><i class="fas fa-trash"></i></button>
                </div>
                    </li>`
                    );
                });
    } else if (utilizadores["currentUser"].typeUser=="renter") {
        $.each(utilizadores["currentUser"].listedHouses, function (index, value) {
                    $("#myList").append(
                        `<li><div class="row prop-text col-sm-12">
                                <div style="float: left;" class="inner col-sm-6">
                                    <img style="height:30px;" src="`+ imoveis[value].fotografias[0] + `" onerror="this.src = ''"></img>
                                    <span class="title" style="font-size: 18px;font-weight: bold">  `+ imoveis[value].titulo + `</span>
                                </div>
                                <div class="col-sm-3">
                                </div>
                                <div class="col-sm-3" >
                                    <a href="room-details.html#`+ value.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="btn btn-success"><i class="fas fa-search-plus"></i></a>
                                </div>
                        </li>`
                    );
                });
    }

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
         window.location.assign("locator-listings.html");
    }});




    function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}
});