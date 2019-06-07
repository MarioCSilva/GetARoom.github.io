$(document).ready(function () {
    mess = JSON.parse(localStorage.getItem("messages"));

    for( var key in mess ) {
        ++length;
    }
    if (length == 1) {
            $("#1").append(
                '<h3 class="text-danger">No new messages!</h3>'
            );
        }

    $.each(mess, function (index, value) {
        if (value.fullName!="counter"){
            $("#myList").append(
                `<li>
                    <div class="row prop-text">
                        <div  class="col-sm-4">
                            <span class="title" style="font-size: 18px;font-weight: bold"> `+ value.subject + `</span>
                        </div>
                        <div class="col-sm-5">
                            <span class="title">`+ value.email + `</span>
                        </div>
                        <div class="col-sm-3">
                            <button id= "`+value.id+`"class="btn btn-secondary"><i class="fas fa-edit"></i></button>
                            <button id="`+ value.id+`" data-confirm="Are you sure you want to delete this message?" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </li>`
            );
        }
    });


    $(".btn-danger").click(function () {
        var choice= confirm(this.getAttribute('data-confirm'));
            if (choice){
                delete mess["message"+this.id];
                localStorage.setItem("messages", JSON.stringify(mess));
                window.location.assign("admin-messages.html");
            }
    });

    $('.rolldown-list li').each(function () {
  var delay = ($(this).index() / 4) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

    $(".btn-secondary").click(function () {
        modal.style.display = "block";
        $("#fullname").html(mess["message"+this.id].fullName);
        $("#email").html(mess["message"+this.id].email);
        $("#subject").html(mess["message"+this.id].subject);
        $("#description").html(mess["message"+this.id].messa);
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