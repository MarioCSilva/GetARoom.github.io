$(document).ready(function () {
    
    class Mess {
        constructor(fullName, email, subject, messa,id) {
            this.fullName=fullName;
            this.email = email;
            this.subject = subject;
            this.messa=messa;
            this.id=id;
        }
    }

    var messages = {
        "counter": new Mess("counter","", "","","2"),
        "message1": new Mess("Miguel Almeida","miguel@ex.pt", "Ad Problem", "Hey, I had a recent issue with my ad. I had a listing online and it disappeared from my listings I dont know why, can you please look into it? Best Regards.", 1),
        "message2": new Mess("Tiago Oliveira","tiago@ex.pt", "Account Problem", "Hello! I cant change my email for some reason. Can you please help me? Thanks in advance!",2),
    };

    if (localStorage.getItem("messages") == null) {
        localStorage.setItem("messages", JSON.stringify(messages));
    }

     messages = JSON.parse(localStorage.getItem("messages"));


    $("#submit").click(function () {
        var forms = document.getElementsByClassName('needs-validation');
        var valid = 0;
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            else
                valid = 1;
            form.classList.add('was-validated');
        }, false);
        if (valid == 1) {
            messages[("message"+(parseInt(messages["counter"].id)+1))] = new Mess($("#fullname").val(),$("#email").val(), $("#subject").val(),$("#messages").val(), (parseInt(messages["counter"].id)+1)); 
            messages["counter"].id= parseInt(messages["counter"].id)+1;
            localStorage.setItem("messages", JSON.stringify(messages));
            alert("Your message has been sent!\nThank you for reaching out to us, we will look into it as soon as possible!");
            close();
        }
    });

   function size(a) {
   var length=0;
   for (key in a) {
       length++;
   }
   return length;
   }


});