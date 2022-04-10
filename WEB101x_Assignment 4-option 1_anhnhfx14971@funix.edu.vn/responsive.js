function menudd() {
    var dd = document.getElementsByClassName("menudd");
    if (dd.class == "menu") {
        dd.className += "responsive";
    } else {
        dd.className = "menu";
    }
}