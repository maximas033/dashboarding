// function that will dim the brightness to 30%
function dimAndWhite() {
    var elements = document.getElementsByTagName("*");
    for (var i=0, l=elements.length; i<l; i++) {
            elements[i].style.transition = "all .8s ease-in";
            elements[i].style.opacity = '0.8';
    }
}
