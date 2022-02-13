var div = document.getElementsByClassName("container")[0];



function addcopy() {

    var cln = div.cloneNode(true);
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    cln.innerHTML = "rgb(" + x + "," + y + "," + z + ")";
    cln.style.background = bgColor;
    document.body.append(cln);
}
div.addEventListener("click", addcopy);