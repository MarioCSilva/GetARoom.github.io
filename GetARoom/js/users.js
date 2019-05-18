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
        "locator": new User("locator", "", "Miguel Almedeia", "miguel@ex.pt", "952498753", "", "locator", []),
        "renter": new User("renter", "", "Tiago Oliveira", "tiago@ex.pt", "945713206", "https://semantic-ui.com/images/avatar2/large/matthew.png", "renter", []),
        "admin": new User("admin", "", "Leandro Silva", "leandro@ex.pt", "978145620", "http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg", "admin", []),
        "currentUser": new User("", "", "", "", "", "", "visitor", []),
    };
    if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users));
    }
});