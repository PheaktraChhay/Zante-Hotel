$(function(){
    // Video
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
    // $(".sticky-nav-bg").css("background", "rgba(255,255,255,0)");
    // Navigation
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".sticky-nav-bg").css("background", "rgba(255,255,255,1)");
        } else {
            $(".sticky-nav-bg").css("background", "rgba(255,255,255,0.7)");
        }
    });
    //Click event to scroll to top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
});