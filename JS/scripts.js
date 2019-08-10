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
function iconAnimation() {
    if(document.getElementById("MenuIcon").className == "collapseicon")
       document.getElementById("MenuIcon").className = "icon";
    else
       document.getElementById("MenuIcon").className = "collapseicon";
}

function menuAnimation() {
    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
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

/**************************************************************************/
/************************ Randomly Selects Photo **************************/
/**************************************************************************/

var random_images_array = ["20190214_175932.jpg"];

function getRandomImage(imgAr, path) {
    path = path || 'IMG/Catena Photos/'; // default path here
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}