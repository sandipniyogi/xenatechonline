/* responsive menu */
function openNav() {
    $('body').addClass("active");
    document.getElementById("mySidenav").style.width = "280px";
    jquery('#mySidenav').addClass("dblock");
}
function closeNav() {
    $('body').removeClass("active");
    document.getElementById("mySidenav").style.width = "0";
    jquery('#mySidenav').addClass("dnone");
}

 /* loader */
$(document).ready(function(){
    var o = $('#page-preloader');
    if (o.length > 0) {
        $(window).on('load', function() {
            $('#page-preloader').removeClass('visible');
        });
    }
});

//go to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});


/* dropdown effect of account */
$(document).ready(function () {

    $('.dropdown button.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('.dropdown a.account').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

});
/* dropdown */

$(document).ready(function () {
    if ($(window).width() <= 991) {
    $('.menusp').appendTo('.appmenu');
}
});


function openSearch() {
    $('body').addClass("active-search");
    document.getElementById("search").style.height = "auto";
    $('#search').addClass("sideb");
    // $('.search_query').attr('autofocus', 'autofocus').focus();
}
function closeSearch() {
    $('body').removeClass("active-search");
    document.getElementById("search").style.height = "0";
    $('#search').addClass("siden");
    // $('.search_query').attr('autofocus', 'autofocus').focus();
}