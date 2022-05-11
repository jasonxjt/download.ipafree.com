window.onload = function() {
    var isApp = "standalone" in window.navigator && window.navigator.standalone;
    //var isApp = true;
    var eHome = document.getElementById("home");
    var eApp = document.getElementById("app");

    if (isApp) {
        eHome.style.display = "none";
        eApp.style.display = "block";
    }
}
