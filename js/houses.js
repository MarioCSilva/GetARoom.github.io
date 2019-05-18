$(document).ready(function () {
    class House {
        constructor(titulo, descricao, detalhes, morada, precos, comodidades, fotografias, avaliacao, comentarios) {
            this.estado = "Não Validado";        // estado: Não Validado / Validado
            this.titulo = titulo;
            this.descricao = descricao;
            this.detalhes = detalhes;
            this.morada = morada;
            this.precos = precos;
            this.comodidades = comodidades;
            this.fotografias = fotografias;
            this.avaliacao = avaliacao;
            this.comentarios = comentarios;
        }
    }
    var houses = {
        "Single Bedroom in Santa Joana": new House("Single Bedroom in Santa Joana",
            "T1 Completely remodeled, located in the heart of the historical area of Aveiro. It has 2 single bedrooms available. For guys or girls.",
            ["3", "2", "Private", "Included"],
            ["Rua de Norton Matos", "Santa Joana", "Aveiro", "Aveiro", "3810-064", "123"],
            ["220", "10"],
            ["internet", "maquinaLavarLouca", "aquecimento", "secador"],
            ["https://a0.muscache.com/im/pictures/1cf83b60-618b-4b0b-a0e6-eaeeb4ffc6a2.jpg?aki_policy=x_large"],
            [4], ["O apartamento é muito simpático, tal e qual as fotos!"]
        ),

        "Single Bedrooms in an Apartment": new House("Single Bedrooms in a Nice Neighborhood",
            "Located right in the center of the city, in a pedestrian and safe street. There is three single bedrooms available and a well equipped kitchen. Currently there is one person in the apartment.",
            ["4", "3", "Private", "Included"],
            ["Rua do Freitas", "Santa Joana", "Aveiro", "Aveiro", "3810-064", "25"],
            ["210", "15"],
            ["internet", "secador", "aquecimento", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/41ff3021-383e-40a4-93ad-662ca04da752.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/fcce391a-5726-4781-9bab-8fa476bcca5d.jpg?aki_policy=x_large"],
            [5], ["Muito bom!", "O apartamento é muito simpático, tal e qual as fotos!"]
        ),

        "Single Bedroom and a Double Bedroom in Gloria": new House("Single Bedroom and a Double Bedroom in Gloria",
            "The apartment is located in a very nice neighborhood of Aveiro, the Beira Mar district. It has a nice living room and there is also two rooms available with simple forniture and one of them is a double sized bedroom.",
            ["2", "2", "Private", "Included"],
            ["Rua da Agrinha", "Glória", "Aveiro", "Aveiro", "3810-164", "2"],
            ["180", "14"],
            ["internet"],
            ["https://a0.muscache.com/im/pictures/960f54e8-09cf-4901-a804-1baac7986e60.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/b6f7549e-5056-4b75-8419-6e491ddd8e70.jpg?aki_policy=xx_large", "http://www.antika-hotel.com/wp-content/uploads/2017/11/IMG_4810-1-1024x682.jpg", "https://www.oakfurnitureland.co.uk/media/gbu0/resizedcache/bevel-single-bed-5707dd023c4a5_8d019cdd5d16fc732498c248dc1b17cd_740x740_1_245_245_245.jpg"],
            [3], []
        ),

        "Single Bedroom on a T1 Apartment": new House("Single Bedroom on a T1 Apartment",
            "This is a T1 with one nice and simple double sized bedroom, a kitchen and a private WC.",
            ["1", "1", "Private", "Não Included"],
            ["Rua de Santa Eufémia", "São Bernardo", "Aveiro", "Aveiro", "3810-163", "62"],
            ["165", "18"],
            ["aquecimento", "secador", "maquinaLavarRoupa", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/7fd39b84-cea5-4cba-8b9e-a944491a6b4f.jpg?aki_policy=x_large"], [], []),

        "Double Bedrooms in Sao Bernardo": new House("Double Bedrooms in Sao Bernardo",
            "Huge house close to the nightlife and public transportation. Currently we have 3 bedrooms available, all double sized, for guys or girls.",
            ["8", "5", "Private", "Included"],
            ["Rua da Brejeira", "São Bernardo", "Aveiro", "Aveiro", "3810-070", "10"],
            ["215", "0"],
            ["internet", "maquinaLavarRoupa", "maquinaLavarLouca", "aquecimento", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/809df5b0-5887-44de-9bd6-9d220b31c1fe.jpg?aki_policy=xx_large"], [], []),

        "Double Sized Bedrooms for Girls": new House("Double Sized Bedrooms for Girls",
            "Located in the city center, we have two double sized bedrooms available for girls only.",
            ["3", "2", "Private", "Não Included"],
            ["Rua do Areeiro", "Oliveirinha", "Aveiro", "Aveiro", "3810-823", "1"],
            ["160", "12"],
            ["tvCabo"],
            ["https://a0.muscache.com/im/pictures/402de3d4-7e0f-4922-8d7f-6dc591a1053c.jpg?aki_policy=x_large"], [], []),

        "Single sized Bedrooms in Sao Bernardo": new House("Single sized Bedrooms in Sao Bernardo",
            "Apartment with a nice location, .",
            ["4", "2", "Private", "Included"],
            ["Rua das Cilhas", "São Bernardo", "Aveiro", "Aveiro", "3810-237", "29"],
            ["220", "10"],
            ["internet", "tvCabo", "maquinaLavarLouca", "maquinaLavarRoupa", "aquecimento"],
            [], [], []),

        "": new House("",
            "",
            ["1", "1", "Private", "Não Included"],
            ["Rua de Jaime Moniz", "Glória", "Aveiro", "Aveiro", "3810-123", "11"],
            ["160", "10"],
            ["aquecimento", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/41d8cb1d-6453-4d54-86b2-6dc3b6181266.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/f1471e3c-beff-414a-bbef-61f30638d6ae.jpg?aki_policy=xx_large"], 0, []),

        "": new House("",
            "",
            ["2", "1", "Private", "Included"],
            ["Rua de Passos Manuel", "Glória", "Aveiro", "Aveiro", "3810-148", "89"],
            ["180", "11"],
            ["internet", "maquinaLavarLouca", "elevador"],
            [], [], []),

        "": new House("",
            "",
            ["5", "3", "Private", "Not Included"],
            ["Rua Carlos Aleluia", "Glória", "Aveiro", "Aveiro", "3810-077", "72"],
            ["145", "13"],
            [],
            ["https://a0.muscache.com/im/pictures/82172ddc-ba43-4483-b2d0-75d6ee6672a7.jpg?aki_policy=xx_large", "https://a0.muscache.com/im/pictures/beb29ecd-f6a9-4be4-bc13-ab895d7c4e2a.jpg?aki_policy=x_large"], [], []),
    };



    users = JSON.parse(localStorage.getItem("users"));

    // if (users["currentUser"].typeUser!="visitor"){
    //     document.getElementById("showsign").style.display="none";
    //     document.getElementById("btn-register").style.display="none";
    // }


    Object.keys(houses).forEach(function (key) {
        houses[key].estado = "Validado";
    });

    if (localStorage.getItem("houses") == null) {
        localStorage.setItem("houses", JSON.stringify(houses));}

    // if (Object.keys(users["locador"].listahouses).length == 0) {
    //     Object.keys(houses).forEach(function (key) {
    //         users["locador"].listahouses[key] = houses[key];
    //     });
    //     localStorage.setItem("users", JSON.stringify(users));
    // }

    // $("#cancel").click(function () {
    //     window.location.assign("locador.html");
    // });

    // $("#submit").click(function () {
    //     var forms = document.getElementsByClassName('needs-validation');
    //     var valid = 0;
    //     // Loop over them and prevent submission
    //     var validation = Array.prototype.filter.call(forms, function (form) {
    //         if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //         }
    //         else
    //             valid = 1;
    //         form.classList.add('was-validated');
    //     }, false);
    //     if (valid == 1) {
    //         var comodidades = [];
    //         $.each($(".checkbox"), function (index, value) {
    //             if ($("#" + value.id).is(":checked"))
    //                 comodidades.push(value.id);
    //         });
    //         var imov = new House($("#titulo").val(), $("#descricao").val(), [$("#pessoas").val(), $("#camas").val(), $("#WC").val(), $("#despesas").val()],
    //             [$("#nomeRua").val(), $("#freguesia").val(), $("#concelho").val(), $("#distrito").val(), $("#codigoPostal").val(), $("#porta").val()], [$("#precoMensal").val(), $("#taxaLimpeza").val()], comodidades, "");
    //         houses[$("#titulo").val()] = imov;
    //         users["locador"].listahouses[$("#titulo").val().split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")] = imov;
    //         localStorage.setItem("users", JSON.stringify(users));
    //         localStorage.setItem("houses", JSON.stringify(houses));
    //         window.location.assign("");
    //     }
    //});
});