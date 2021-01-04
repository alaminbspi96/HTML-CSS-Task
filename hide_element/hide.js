function myFunction() {
    var x = document.getElementById("myDIV");
    if (window.getComputedStyle(x).display == "none") {
        x.style.display = "block";
    }
}
