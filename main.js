var btn = document.getElementById("logIn");

var password = document.getElementById("password")
var show = document.getElementById("show");




btn.addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(name=="alamin" && password=="123"){
        window.location.href = "mustafiz.html";
    }else{
        var error = document.getElementById("error").innerHTML = "user name or password may be wrong!!";
    }
   
})

//Password show or hide function
show.addEventListener('click',function(){
    var password = document.getElementById("password");
    if(password.type == "text"){
        password.type = "password";
    }else{
        password.type = "text";
    }
})