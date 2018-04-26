console.log("everything ready");


//https://www.w3schools.com/js/js_cookies.asp


/*
* set the cookie  for a day when the user enter website
*/
function setCookie(cookieName, cookieValue, numberOfDays) {

    var date = new Date();
    date.setTime(date.getTime() + (numberOfDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/*
* get the cookie
*/
function getCookie(cookieName) {

    var name = cookieName + "=";

    var decodedCookie = decodeURIComponent(document.cookie);

    var cookieArray = decodedCookie.split(';');

    for(var i = 0; i < cookieArray.length; i++) {

        var cookie = cookieArray[i];

        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkCookie() {

    var user = getCookie("username");

    if (user != "") {

        alert("Welcome again " + user);

    } else {

       user = prompt("Please enter your name:","");

       if (user != "" && user != null) {

           setCookie("username", user, 30);

       }
    }
}






// Wait for the document to be ready
$(document).ready(function() {

  checkCookie();




}
