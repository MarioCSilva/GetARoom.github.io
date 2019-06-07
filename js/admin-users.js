$(document).ready(function () {
    utilizadores = JSON.parse(localStorage.getItem("users"));
    $.each(utilizadores, function (index, value) {
        if (value.username != "admin"){
            $("#myList").append(
                `<li>
                <div class="row prop-text col-sm-12">
                    <div style="float: left;margin-left:1%" class="inner">
                        <img style="height:30px;" src="`+ value.imageProfile + `" onerror="this.src = 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'"></img>
                        <span class="title" style="font-size: 18px;font-weight: bold"> `+ value.username + `</span>
                    </div>
                    <div style="margin: 0px auto">
                        <span style="margin: 0px auto">`+ value.email + `</span>
                    </div>
                    <div style="float: right;margin-right:1%">   
                        <button id="`+ value.username+`" class="btn btn-danger" data-confirm="Are you sure you want to delete this user?"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                </li>`
            );
        }
    });


    $(".btn-danger").click(function () {
        var choice= confirm(this.getAttribute('data-confirm'));
            if (choice){
        delete utilizadores[this.id];
        localStorage.setItem("users", JSON.stringify(utilizadores));
        window.location.assign("admin-users.html");
    }});

    $('.rolldown-list li').each(function () {
      var delay = ($(this).index() / 7) + 's';
      $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay
      });
    });

});