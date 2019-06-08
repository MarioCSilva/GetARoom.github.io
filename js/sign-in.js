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
    $("#addUser").click(function (event) {
        var forms = document.getElementsByClassName('needs-validation');
        var valid = 0;
        var validation = Array.prototype.filter.call(forms, function (form) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else
            valid = 1;
            form.classList.add('was-validated');
        }, false);
 
        if (valid == 1 && !(contains(users, $("#username").val()))) {
            var name = $("#name").val();
            var username = $("#username").val();
            var password = $("#password").val();
            var email = $("#email").val();
            var typeUser = $("#typeUser").val();
            var contact = $("#contact").val();
            var user;
            user = new User(username, password, name, email, contact, "", typeUser,[]);
            users[user.username]= user;
            users["currentUser"].username=username;
            users["currentUser"].password=password;
            users["currentUser"].name=name;
            users["currentUser"].email=email;
            users["currentUser"].contact=contact;
            users["currentUser"].imageProfile="";
            users["currentUser"].typeUser=typeUser;
            users["currentUser"].listedHouses=[];
            localStorage.setItem("users", JSON.stringify(users));
            window.location.assign("index.html");
        } else if (valid ==1 && contains(users, $("#username").val())){
            alert("Username already taken.");
        }
    });
    $("#cancel").click(function (){
        window.location.assign("HomePage.html");
    });

    function contains(a, obj) {
    for (key in a) {
        if (key==obj){
            return true;
        }
    }
    return false;
    }
});