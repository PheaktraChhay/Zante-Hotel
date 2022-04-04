$(function(){
    // wow js
    new WOW().init();
    // date validation
    var d = new Date();
    var month = d.getMonth() + 1; // month
    var day = d.getDate(); //day
    var minDay = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + '-' + d.getFullYear();
    // var maxDay = d.getDate()+6;
    // var maxDate = d.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (maxDay < 10 ? '0' : '') + maxDay;
    $("#demo").append(minDay);
    // let dateNow = Date.now();
    // $("#dateInput").attr("min",minDay);
    // $("#dateInput").attr("max",maxDate);
    // $("input[type='date']").attr("min",minDay);

    $(function () {
        $('#daterange').daterangepicker({
            minDate: minDay
        }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    });

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
    // side nav button
    $(".side-nav-menu-icon").on("click", function () {
        $(".side-nav-bg").css("display", "block");
        $(".sidenav").css("display", "block");
    });
    $(".close-btn").on("click", function () {
        $(".side-nav-bg").css("display", "none");
        $(".sidenav").css("display", "none");
    });
    $(".side-nav-bg").on("click", function () {
        $(".side-nav-bg").css("display", "none");
        $(".sidenav").css("display", "none");
    });
    
    // $(".sticky-nav-bg").css("background", "rgba(255,255,255,0)");
    $(".back-to-top").fadeOut();
    // Navigation
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".sticky-nav-bg").css("background", "rgba(255,255,255,1)");
            $(".back-to-top").fadeIn();
        } else {
            $(".sticky-nav-bg").css("background", "rgba(255,255,255,0.7)");
            $(".back-to-top").fadeOut();
        }
    });
    //Click event to scroll to top
    // $('.back-to-top').click(function(){
    //     $('html, body').animate({scrollTop : 0},500);
    //     return false;
    // });

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
    //===============================================
    //              add guest button
    //===============================================
    window.onclick = function (event) {
        if (!event.target.matches("#addGuestBtn")) {
            if(!event.target.matches("#subGuestNum")){
                if(!event.target.matches("#addGuestNum")){
                    // console.log(!event.target.matches("#subGuestNum"));
                    $(".guest-member-content").css("display", "none");
                }
            }
        }else {
            $(".guest-member-content").css("display", "block");
        }
    } 
});
// function checkDate(){
//     let dateNow = '2022-04-01';
//     return dateNow;
// }