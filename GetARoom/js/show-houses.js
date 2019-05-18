$(document).ready(function () {
    houses = JSON.parse(localStorage.getItem("houses"));
    var count = 0;

    $.each(houses, function (index, value) {
        if (value.estado == "Validado") {
            $(".grid").append(
                `<div class="product" style="box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); background-color:white">` +
                `<div id="carouselExampleControls` + count + `" class="carousel slide" data-ride="carousel` + count + `">
                    <div class="carousel-inner" id="imagens`+ count + `"></div>
                    <a class="carousel-control-prev" href="#carouselExampleControls`+ count + `" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only" >Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls`+ count + `" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>` + `
                    <div class="product__info" style="position:absolute;bottom: 18px; right:18px;left:18px">
                        <div style="height:100%"v><h3 class="product__title" style="color:black">`+ value.titulo + `</h3 ><div>
                        <img class="product__year extra highlight" src="`+ value.fotografias[0] + `';">
                        <div ><span class="product__price highlight">` + value.precos[0] + ` €</span></div>
                    <a href="house-details.html#`+ index.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="action action--button btn btn-outline-primary action--buy"><i class="fas fa-search-plus"></i><span class="action__text">Show More</span></a>
                </div>
            </div>`
            );
                var count2 = 0;
                $.each(value.fotografias, function (index, value) {
                    if (index == 0) {
                        $("#imagens" + count).append(
                            `<div class="carousel-item active" id="img1">
                            <img style='height: 100%; width: 100%;' id="imagem`+ count2 +`" class="product__image d-block w-100" src="`+ value + `" alt="Slide`+count+1+`">
                        </div>`);
                    }
                    else {
                        $("#imagens" + count).append(
                            `<div class="carousel-item" id="img2">
                            <img style='height: 100%; width: 100%;' id="imagem`+ count2 +`" class="product__image d-block w-100" src="`+ value + `" alt="Slide` + count + 1 +`">
                        </div>`);
                    }
                    count2++;

                });
            }
            count++;
    });

    // $("#pesquisar").click(function () {
    //     console.log("Ola");
    //     var quartos = $("#roomN").val();
    //     console.log(quartos);
    //     var despes = $("#despesas").val();
    //     console.log(despesas);
    //     var price = $("#preco").val();
    //     console.log(price);
    //     $(".grid").empty();
    //     console.log(parseInt(price, "10")-99);
    //     $.each(houses, function (index, value) {
    //         console.log(parseInt(value.precos[0]) < parseInt(price) && parseInt(value.precos[0]) >= parseInt(price) - 99 )
    //         if (value.estado == "Validado" && (quartos == "0" || value.detalhes[1] == (quartos)) && (despes == "Ind" || value.detalhes[3] == (despes)) && (price == "Ind" || (parseInt(value.precos[0]) < parseInt(price) && parseInt(value.precos[0]) >= parseInt(price) - 99 ) )) {
    //             console.log(index);
    //             $(".grid").append(
    //                 `<div class="product border border-primary">` + `<div style="height: 140px" id="aviso` + count + `"><h7 class="text-default">Não existem imagens</h7></div>
    //             <div style="height: 140px" id="carouselExampleControls` + count + `" class="carousel slide" data-ride="carousel` + count + `">
    //                 <div class="carousel-inner" id="imagens`+ count + `"></div>
    //                 <a class="carousel-control-prev" href="#carouselExampleControls`+ count + `" role="button" data-slide="prev">
    //                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                     <span class="sr-only">Previous</span>
    //                 </a>
    //                 <a class="carousel-control-next" href="#carouselExampleControls`+ count + `" role="button" data-slide="next">
    //                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                     <span class="sr-only">Next</span>
    //                 </a>
    //             </div>` + `
    //                 <div class="product__info">
    //                     <h3 class="product__title text-primary">`+ value.titulo + `</h3 >
    //                     <img class="product__year extra highlight" src="`+ value.fotografias[0] + ` ';">
    //             <span class="product__price highlight">` + value.precos[0] + ` €</span>
    //                 <a href="imovelDetailLocador.html#`+ index.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="action action--button btn btn-outline-primary action--buy"><i class="fas fa-search-plus"></i><span class="action__text">Show More</span></a>
    //             </div>
    //         </div>`
    //             );
    //             if (value.fotografias.length == 0) {
    //                 $("#aviso" + count).show();
    //                 $("#carouselExampleControls" + count).hide();
    //             }
    //             else {
    //                 $("#aviso" + count).hide();
    //                 var count2 = 0;
    //                 $.each(value.fotografias, function (index, value) {
    //                     if (index == 0) {
    //                         $("#imagens" + count).append(
    //                             `<div class="carousel-item active">
    //                         <img id="imagem`+ count2 + `" class="product__image d-block w-100" src="` + value + `" alt="Slide` + count + 1 + `">
    //                     </div>`);
    //                     }
    //                     else {
    //                         $("#imagens" + count).append(
    //                             `<div class="carousel-item">
    //                         <img id="imagem`+ count2 + `" class="product__image d-block w-100" src="` + value + `" alt="Slide` + count + 1 + `">
    //                     </div>`);
    //                     }
    //                     count2++;

    //                 });
    //             }
    //             count++;
    //         }
    //    });
    //});

});