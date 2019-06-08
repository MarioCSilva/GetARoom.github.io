$(document).ready(function () {
    class House {
        constructor(titulo, descricao, detalhes, morada, precos, comodidades, fotografias, avaliacao, comentarios, owner) {
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
            this.owner=owner;
        }
    }
    var houses = {
        "Single Bedroom in Santa Joana": new House("Single Bedroom in Santa Joana",
            "T1 Completely remodeled, located in the heart of the historical area of Aveiro. It has 2 single bedrooms available. For guys or girls.",
            ["3", "2", "Private", "Included"],
            ["Rua de Norton Matos", "Santa Joana", "Aveiro", "Aveiro", "3810-064", "123"],
            ["220.00", "10.00"],
            ["internet", "maquinaLavarLouca", "aquecimento", "secador"],
            ["https://rukminim1.flixcart.com/image/704/704/jgv5jm80/bed/g/8/c/single-na-particle-board-urba-ss-nb-ad-bl-delite-kom-acacia-dark-original-imaf5yjkygjkrzsz.jpeg?q=70", "https://a0.muscache.com/im/pictures/1cf83b60-618b-4b0b-a0e6-eaeeb4ffc6a2.jpg?aki_policy=x_large"],
            [4,3,2], ["O apartamento é muito bom e têm um senhorio excelente."],
            "locator1"
        ),

        "Single Bedrooms in a Nice Neighborhood": new House("Single Bedrooms in a Nice Neighborhood",
            "Located right in the center of the city, in a pedestrian and safe street. There is three single bedrooms available and a well equipped kitchen. Currently there is one person in the apartment.",
            ["4", "3", "Shared", "Included"],
            ["Rua do Freitas", "Santa Joana", "Aveiro", "Aveiro", "3810-064", "25"],
            ["210.00", "15.00"],
            ["internet", "secador", "aquecimento", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/41ff3021-383e-40a4-93ad-662ca04da752.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/fcce391a-5726-4781-9bab-8fa476bcca5d.jpg?aki_policy=x_large"],
            [5], ["Muito bom!", "O apartamento é muito simpático, tal e qual as fotos!"],
            "locator2"
        ),

        "Double Sized Bedrooms for Girls": new House("Double Sized Bedrooms for Girls",
            "Located near ISEP, we have two double sized bedrooms available for girls only.",
            ["3", "2", "Shared", "Excluded"],
            ["Bairro do Carriçal", "Bairro do Carriçal", "Porto", "Porto", "4200-530", "152"],
            ["160.00", "6.00"],
            ["tvCabo"],
            ["https://a0.muscache.com/im/pictures/402de3d4-7e0f-4922-8d7f-6dc591a1053c.jpg?aki_policy=x_large", "https://i.pinimg.com/originals/12/1e/34/121e34df166faf06a64cece144464d18.jpg"],
            [3], ["Apartamento de boa qualidade e com senhorio impecável!"],
            "locator5"),

        "Single Bedroom and a Double Bedroom in Gloria": new House("Single Bedroom and a Double Bedroom in Gloria",
            "The apartment is located in a very nice neighborhood of Aveiro, the Beira Mar district. It has a nice living room and there is also two rooms available with simple forniture and one of them is a double sized bedroom.",
            ["3", "3", "Shared", "Included"],
            ["Rua da Agrinha", "Glória", "Aveiro", "Aveiro", "3810-164", "2"],
            ["180.00", "14.00"],
            ["internet"],
            ["https://www.oakfurnitureland.co.uk/media/gbu0/resizedcache/bevel-single-bed-5707dd023c4a5_8d019cdd5d16fc732498c248dc1b17cd_740x740_1_245_245_245.jpg","https://a0.muscache.com/im/pictures/960f54e8-09cf-4901-a804-1baac7986e60.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/b6f7549e-5056-4b75-8419-6e491ddd8e70.jpg?aki_policy=xx_large", "http://www.antika-hotel.com/wp-content/uploads/2017/11/IMG_4810-1-1024x682.jpg"],
            [3], ["Gostei muito da minha estadia neste apartamento."],
            "locator1"
        ),

        "Single Bedroom on a T1 Apartment": new House("Single Bedroom on a T1 Apartment",
            "This is a T1 with one nice and simple double sized bedroom, a kitchen and a private WC.",
            ["1", "1", "Private", "Excluded"],
            ["Rua de Santa Eufémia", "São Bernardo", "Aveiro", "Aveiro", "3810-163", "62"],
            ["165.00", "18.00"],
            ["aquecimento", "secador", "maquinaLavarRoupa", "tvCabo"],
            ["http://www.katehousethailand.com/wp-content/uploads/2017/10/DSC_0172_main.jpg","https://a0.muscache.com/im/pictures/7fd39b84-cea5-4cba-8b9e-a944491a6b4f.jpg?aki_policy=x_large"],
            [3], ["Excelente localização e tem muito boas instalações."],
            "locator3"),

        "Single sized Bedrooms in Porto": new House("Single sized Bedrooms in Porto",
            "Apartment with a nice location and great forniture and acessories with two rooms available. Currently there are two students living in it.",
            ["4", "2", "Shared", "Included"],
            ["Rua Professor Mota Pinto", "Bairro Silva Braga", "Porto", "Porto", "4250-102", "200"],
            ["220.00", "10.00"],
            ["internet", "tvCabo", "maquinaLavarLouca", "maquinaLavarRoupa", "aquecimento"],
            [], [3], [],
            "locator1"),

        "Double Bedrooms in Sao Bernardo": new House("Double Bedrooms in Sao Bernardo",
            "Huge house close to the nightlife and public transportation. Currently we have 3 bedrooms available, all double sized, for guys or girls.",
            ["8", "3", "Private", "Included"],
            ["Rua da Brejeira", "São Bernardo", "Aveiro", "Aveiro", "3810-070.00", "10.00"],
            ["215.00", "0.00"],
            ["internet", "maquinaLavarRoupa", "maquinaLavarLouca", "aquecimento", "tvCabo"],
            ["https://www.smithsgretnagreen.com/img/page/Deluxe%20Double%20Rooms_page_image.jpg","http://www.ramadawarwick.co.uk/wp-content/uploads/2014/10/standard-double.jpg","https://a0.muscache.com/im/pictures/809df5b0-5887-44de-9bd6-9d220b31c1fe.jpg?aki_policy=xx_large"], [4], [],
            "locator4"),

        "lala": new House("asd",
            "",
            ["1", "1", "Private", "Excluded"],
            ["Rua de Jaime Moniz", "Glória", "Aveiro", "Aveiro", "3810-123", "11"],
            ["160.00", "10.00"],
            ["aquecimento", "tvCabo"],
            ["https://a0.muscache.com/im/pictures/41d8cb1d-6453-4d54-86b2-6dc3b6181266.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/f1471e3c-beff-414a-bbef-61f30638d6ae.jpg?aki_policy=xx_large"],
            [], [],
            "locator1"),

        "lwqewq": new House("asdsa",
            "",
            ["2", "1", "Private", "Included"],
            ["Rua de Passos Manuel", "Glória", "Aveiro", "Aveiro", "3810-148", "89"],
            ["180.00", "11.00"],
            ["internet", "maquinaLavarLouca", "elevador"],
            [], [5,4], [],
            "locator1"),

        "asdas": new House("wqeqw",
            "",
            ["5", "3", "Private", "Excluded"],
            ["Rua Carlos Aleluia", "Glória", "Aveiro", "Aveiro", "3810-077", "72"],
            ["145.00", "13.00"],
            [],
            ["https://a0.muscache.com/im/pictures/82172ddc-ba43-4483-b2d0-75d6ee6672a7.jpg?aki_policy=xx_large", "https://a0.muscache.com/im/pictures/beb29ecd-f6a9-4be4-bc13-ab895d7c4e2a.jpg?aki_policy=x_large"], [], [],
            "locator3"),
    };



    users = JSON.parse(localStorage.getItem("users"));


    Object.keys(houses).forEach(function (key) {
        houses[key].estado = "Validado";
    });

    if (localStorage.getItem("houses") == null) {
        localStorage.setItem("houses", JSON.stringify(houses));}

});
