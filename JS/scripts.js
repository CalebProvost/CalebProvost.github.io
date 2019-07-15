/**************************************************************************/
/********************** Interactive Forum Scripts *************************/
/**************************************************************************/
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

/**************************************************************************/
/************************* Interactive Menu Icon **************************/
/**************************************************************************/
function menuAnimation() {
    if(document.getElementById("MenuIcon").className == "collapseicon")
       document.getElementById("MenuIcon").className = "icon";
    else
       document.getElementById("MenuIcon").className = "collapseicon";
}

/**************************************************************************/
/************************* Collapse Menu Scripts **************************/
/**************************************************************************/
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

/**************************************************************************/
/************************** Mimic Forum Feedback **************************/
/**************************************************************************/

// TODO add timestamp and layout structure to function

function displayComment() {
    // gets name from html ID name
    var nameDisplay = document.getElementById("name").value;
    // gets comments from html ID message
    var commentDisplay = document.getElementById("message").value;
    
    document.getElementById("comments").innerHTML += "<br><p>" + nameDisplay + 
                                        "</p><p>" + commentDisplay + "</p>";
  }