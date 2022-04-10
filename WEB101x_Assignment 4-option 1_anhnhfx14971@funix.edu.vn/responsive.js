function menudd() {
    var dd = document.getElementsByClassName("loai-banh");
    if (dd.class == "menu") {
        dd.className += "responsive";
    } else {
        dd.className = "menu";
    }
}