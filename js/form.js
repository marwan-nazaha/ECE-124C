
var password = document.getElementById("password");

function checker (password){
    if (password.length == 0 || password.length > 8 || password.length < 8){
        alert("pass must be 8 lenght");
        return false;
    }

}
