$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));

    class User {
        constructor(username, password, name, email, contact, imageProfile, typeUser, listedHouses) {
            this.username = username;
            this.name = name;
            this.email = email;
            this.contact = contact;
            this.imageProfile = imageProfile;
            this.password = password;
            this.typeUser=typeUser;
            this.listedHouses=listedHouses;
        }
    }
    
    $("#username").val(users["currentUser"].username);
    $("#username").prop('disabled',true);
    $("#email").val(users["currentUser"].email);
    $("#contact").val(users["currentUser"].contact);
    $("#name").val(users["currentUser"].name);
    document.getElementById("imageProfile").src=users["currentUser"].imageProfile;
    usernameinicial=users["currentUser"].username;

    $("#edit").click(function () {
            var name = $("#name").val();
            var username2 = $("#username").val();
            var password = $("#password").val();
            var email = $("#email").val();
            var contact = $("#contact").val();
            var imageProfile= $("#imagesrc").val();
            users["currentUser"].username=username2;
            users["currentUser"].password=password;
            users["currentUser"].name=name;
            users["currentUser"].email=email;
            users["currentUser"].contact=contact;
            delete users[String(usernameinicial)];
            var newUs= new User(username2,password, name, email, contact, "",users["currentUser"].typeUser, users["currentUser"].listedHouses )
            users[newUs.username]= newUs;
            localStorage.setItem("users", JSON.stringify(users));
            if (imageProfile!="") {
                users["currentUser"].imageProfile=imageProfile;
                users[newUs].imageProfile=imageProfile;
            }
            localStorage.setItem("users", JSON.stringify(users));
            window.location.assign("my-profile.html");
        });

});