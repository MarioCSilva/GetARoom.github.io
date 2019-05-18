$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    
    $("#username").val(users["currentUser"].username);
    $("#email").val(users["currentUser"].email);
    $("#contact").val(users["currentUser"].contact);
    $("#name").val(users["currentUser"].name);
    document.getElementById("imageProfile").src=users["currentUser"].imageProfile;
    usernameinicial=users["currentUser"].username;
    
    $("logout").click(function(){
        users["currentUser"].typeUser="visitor";
    })

    $("#edit").click(function () {
        var name = $("#name").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email").val();
        var contact = $("#contact").val();
        var imageProfile= $("#imagesrc").val();
        users["currentUser"].username=username;
        users["currentUser"].password=password;
        users["currentUser"].name=name;
        users["currentUser"].email=email;
        users["currentUser"].contact=contact;
        if (imageProfile!="") {
            users["currentUser"].imageProfile=imageProfile;
            users[String(usernameinicial)].imageProfile=imageProfile;
        }
        users[String(usernameinicial)].username=username;
        users[String(usernameinicial)].email=email;
        users[String(usernameinicial)].name=name;
        users[String(usernameinicial)].contact=contact;
        users[String(usernameinicial)].password=password;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.assign("my-profile.html");
    });
});