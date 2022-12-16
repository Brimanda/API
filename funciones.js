function myFunction() {
    let navegador = navigator.userAgent;
    var x = document.getElementById("myDIV");
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}        let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    console.log("Estás usando un dispositivo móvil!!");
} else {
    console.log("No estás usando un móvil");
}