window.addEventListener('click', function(e){   
    // Trong truong hop nguoi dung click chuot
    if (document.getElementsByClassName('icon')[0].contains(e.target)){
        // Neu click vao icon
        var dds = document.getElementsByClassName("font");
        for (var dd of dds) {
            dd.style.visibility = "visible";
            dd.parentElement.parentElement.style.width = "100%";
        }
    } 
    if (!document.getElementById('menu').contains(e.target)) {
        // Neu click ra ngoai menu
        var dds = document.getElementsByClassName("font");
        for (var dd of dds) {
            dd.style.visibility = "hidden";
            dd.parentElement.parentElement.style.width = null;
        }
    }
});