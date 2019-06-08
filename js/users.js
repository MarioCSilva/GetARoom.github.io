$(document).ready(function () {
    
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

    var users = {
        "locator1": new User("locator1", "", "Miguel Almeida", "miguel@ex.pt", "952498753", "", "locator", ["Single Bedroom in Santa Joana","Single Bedroom and a Double Bedroom in Gloria"]),
        "locator2": new User("locator2", "", "Pedro Bastos", "pedro@ex.pt", "954862748", "", "locator", ["Single Bedrooms in a Nice Neighborhood"]),
        "locator3": new User("locator3", "", "Lucas Botto", "lucas@ex.pt", "953957401", "", "locator", ["Single Bedroom on a T1 Apartment"]),
        "locator4": new User("locator4", "", "Afonso Silva", "afonso@ex.pt", "959372658", "", "locator", ["Double Bedrooms in Sao Bernardo"]),
        "locator5": new User("locator5", "", "Luís Valentim", "luis@ex.pt", "952558753", "", "locator", ["Double Sized Bedrooms for Girls"]),
        "renter": new User("renter", "", "Tiago Oliveira", "tiago@ex.pt", "947716606", "https://semantic-ui.com/images/avatar2/large/matthew.png", "renter", []),
        "admin": new User("admin", "", "Leandro Silva", "leandro@ex.pt", "978149920", "http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg", "admin", []),
        "currentUser": new User("", "", "", "", "", "", "visitor", []),
    };
    if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    users = JSON.parse(localStorage.getItem("users"));

    $(".site-menu").empty();
    switch (users["currentUser"].typeUser) {
        case "visitor":
            $(".site-menu").append(`
                <li><a href="index.html">Home</a></li>
                <li><a href="show-rooms.html">Rooms</a></li>
                <li><a href="contact.html" target="_blank">Contact</a></li>
                <li><a href="log-in.html">Log in</a></li>
                <li><a href="sign-in.html" id="btn-sign-in">Sign Up</a></li>`);
            $("#advertise").attr("href", "log-in.html");
            $("#makeReview").hide();
            break;
        case "admin":
            $(".site-menu").append(`
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html" target="_blank">Contact</a></li>
                <li class="has-children">
                    <a href="#" data data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false">` + users["currentUser"].username + `</a>
                    <ul class="dropdown">
                        <li><a href="show-rooms.html">Rooms</a></li>
                        <li><a href="admin-validation.html">Validation</a></li>
                        <li><a href="admin-users.html">Users</a></li>
                        <li><a href="admin-messages.html">Messages</a></li>
                        <li><a href="my-profile.html">My Profile</a></li>
                        <li><a href="#" class="btn-log-out">Log out</a></li>
                    </ul>
                </li>`);
            $("#advertise").hide();
            $("#makeReview").show();

            break;
        case "renter":
            $(".site-menu").append(`
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html" target="_blank">Contact</a></li>
                <li class="has-children">
                    <a href="#" data data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false">` + users["currentUser"].username + `</a>
                    <ul class="dropdown">
                        <li><a href="show-rooms.html">Rooms</a></li>
                        <li><a href="#">Favorites</a></li>
                        <li><a href="my-profile.html">My Profile</a></li>
                        <li><a href="#" class="btn-log-out">Log out</a></li>
                    </ul>
                </li>`);
            $("#advertise-section").hide();
             $("#makeReview").show();
            break;
        case "locator":
            $(".site-menu").append(`
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html" target="_blank">Contact</a></li>
                <li class="has-children">
                    <a href="#" data data-toggle="collapse" data-target="#collapseItem0" aria-expanded="false">` + users["currentUser"].username + `</a>
                    <ul class="dropdown">
                        <li><a href="show-rooms.html">Rooms</a></li>
                        <li><a href="locator-listings.html">Listings</a></li>
                        <li><a href="locator-add-room.html">Add Room</a></li>
                        <li><a href="my-profile.html">My Profile</a></li>
                        <li><a href="#" class="btn-log-out">Log out</a></li>
                    </ul>
                </li>`);
            $("#advertise").attr("href", "locator-add-room.html");
             $("#makeReview").show();
            break;
        
    }
    $('a[href$="' + location.pathname.split("/").slice(-1)[0] + '"]').parent().addClass("active");

    $(".btn-log-out").click(function() {
        var newUser = new User("", "", "", "", "", "", "visitor", []);
        users["currentUser"] = newUser;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.assign("index.html");
    })
});