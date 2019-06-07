$(document).ready(function () {
	houses = JSON.parse(localStorage.getItem("houses"));
	users = JSON.parse(localStorage.getItem("users"));
	if (localStorage.getItem("places") == null) {
        localStorage.setItem("places", "");
    }
	var pages, page = 1;
	var place = localStorage.getItem("places");
	var count = 0, address = "", expenses = "", beds = "", baths = "", price = [50, 250];

	showHouses();


	pages = Math.ceil(count / 6);
	$(".site-pagination").empty();

	for (var i = 1; i <= pages; i++) {
		if ( i == 1 ) { $(".site-pagination").html('<a class="active">1</a>'); }
		else { $(".site-pagination").append("<a>" + i + "</a>"); }
	}

	$(".site-pagination").on('click', 'a', function () {
		$(".site-pagination a").attr("class", "");
		$(this).attr("class", "active");

		page = $(this).html();

		showHouses();
	})

	$('#index-search-submit').click(function () {
		var text=$('#index-place').val();
		localStorage.setItem("places",text);
		window.location.href = "show-rooms.html"
	});

	$('#search-submit').click(function () {
		page = 1;
		place = $("#search-address").val().toLowerCase();
		expenses = $("#search-expenses").val();
		beds = $("#search-beds").val();
		baths = $("#search-baths").val();
		price = $("#search-price").val().match(/^\d+|\d+\b|\d+(?=\w)/g);

		showHouses();

		pages = Math.ceil(count / 6);
		$(".site-pagination").empty();
		
		for (var i = 1; i <= pages; i++) {
			if ( i == 1 ) { $(".site-pagination").html('<a class="active">1</a>'); }
			else { $(".site-pagination").append("<a>" + i + "</a>"); }
		}

	});

	function showHouses() {
		$("#grid").empty();
		count = 0;
		$.each(houses, function (index, value) {
			var show = false;
			for (var i = 0; i < value.morada.length; i++) {
				if (value.morada[i].toLowerCase().indexOf(place.toLowerCase()) > -1 || value.titulo.toLowerCase().indexOf(place.toLowerCase()) > -1) {
					show = true;
					break;
				}
			}
			
			if (beds != "" && beds != "5+") {
				show &= ( beds == value.detalhes[1] ) ? true : false;
			} else {
				show &= ( beds == "" || (beds == "5+" && 5 <= value.detalhes[1]) ) ? true : false;
			}

			show &= value.estado == "Validado" && value.detalhes[2].indexOf(baths) > -1 && value.detalhes[3].indexOf(expenses) > -1 &&
				price[0] <= parseFloat(value.precos[0])  && parseFloat(value.precos[0]) <= price[1];
			
			if (show) {
				count++;

				if (6 * (page - 1) < count && count <= 6 * page) {
					$("#grid").append(
						`
					  <div class="col-md-6 col-lg-4 mb-4">
					  	
	       				<a href="room-details.html#`+ index.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "") + `" class="prop-entry d-block weird">
	          				<figure>
	            				<img src="`+ value.fotografias[0] + `" alt="Image" class="img-cropped">
							</figure>
	          				<div class="prop-text">
	            				<div class="inner">
	              					<span class="price rounded">` + value.precos[0] + ` €</span>
	              					<h3 class="title">`+ value.titulo + `</h3 >
	              					<p class="location">`+ value.morada[1] + `, ` + value.morada[2] + `</p>
	           					</div>
									<div class="prop-more-info">
										<div class="inner d-flex" style="text-align:left">
											<div class="col">
												<span>Expenses:</span>
												<strong>`+ value.detalhes[3] + `</strong>
											</div>
											<div class="col">
												<span>Bedrooms:</span>
												<strong>`+ value.detalhes[1] + `</strong>
											</div>
											<div class="col">
												<span>Bath:</span>
												<strong>`+ value.detalhes[2] + `</strong>
											</div>	                  
										</div>
	            					</div>
	          					</div>
	        				</a>
	      				</div>
			          `
					);
				}
			}
			localStorage.setItem("places", "");
		});

		if ( count == 0 ) { $("#grid").append('<h2 class="mx-auto">No Results Were Found!</h2>') }

		if ( users["currentUser"].typeUser == "renter" ) { $("#grid").children().append('<i class="fas fa-heart heart"></i>'); }
	}
});