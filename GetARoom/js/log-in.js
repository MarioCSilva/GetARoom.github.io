$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    var val;
    $("#myLogin").click(function () {
        var username = $("#inputUsername").val();
        var password = $("#inputPassword").val();
        $.each(users, function (index, value) {
            if (username==value.username & password==value.password){
                val=true;
                users["currentUser"].username=username;
                users["currentUser"].password=password;
                users["currentUser"].name=value.name;
                users["currentUser"].email=value.email;
                users["currentUser"].contact=value.contact
                users["currentUser"].imageProfile=value.imageProfile;
                users["currentUser"].typeUser=value.typeUser;
                localStorage.setItem("users", JSON.stringify(users));
            }
        });
        if (val) {
            console.log("go to page according to typeUser..")
        }
        else {
            alert("Login Inválido!")
        }
    });
});