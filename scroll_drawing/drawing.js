var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

triangle.style.strokeDasharray = length;

triangle.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);

function myFunction() {
    var scrollparcent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var draw = length * scrollparcent;

    triangle.style.strokeDashoffset = length - draw;
}

