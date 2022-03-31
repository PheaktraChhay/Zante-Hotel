$(function(){
    var modal = document.getElementById("videoPreview");
    var btn = document.getElementById("playIcon");
    var vbg = document.getElementById("vBg");
    btn.onclick = function () {
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        vbg.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
         
            modal.style.display = "none";
            vbg.style.display = "none";
            // location.reload();
        }
    }
});