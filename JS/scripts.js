function ShowEmail() {
    var emailText = document.getElementById("emailAddress");

    emailText.style.display = "block";
    $('input').prop('required', true)
}

function HideEmail() {
    var emailText = document.getElementById("emailAddress");

    emailText.style.display = "none";
    $('input').prop('required', false)
}

function menuAnimation(){
    if(document.getElementById("MenuIcon").className == "collapseicon")
       document.getElementById("MenuIcon").className = "icon";
    else
       document.getElementById("MenuIcon").className = "collapseicon";
    }