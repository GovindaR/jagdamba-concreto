jQuery(document).ready(function() {
    "use strict";
    $('.header__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ''],
        dots: true,
        text: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.gallery__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<img src="img/blue-arrow.png" alt="blue">', '<img src="img/blue-arrow.png" alt="blue">'],
        dots: false,
        text: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
     $('.gallery1__carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<img src="img/blue-arrow.png" alt="blue">', '<img src="img/blue-arrow.png" alt="blue">'],
        dots: false,
        text: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $("#bun").click(function() {
        $('.nav-top').toggleClass("menu-btn").slideDown();;
    });
    $("#fass").click(function() {
        $('#search').addClass("show");
        $(this).hide(300);
        $('.search .fa-times').show(500);
    });
    $(".search .fa-times").click(function() {
        $('#search').removeClass("show");
        $(this).hide(300);
        $('#fass').show(500);

    });
    $("#fa-first").click(function() {
        $('#search1').toggleClass("show1");
    });
    $("#fa-first").click(function() {
        $('#search').addClass("show1");
        $(this).hide();
        $('.search-m .fa-times').show();
    });
    $("#times-search").click(function() {
        $('#search').removeClass("show1");
        $(this).hide();
        $('.search-m .fa-times').show();
    });
});
jQuery(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
        $(window).scrollTop() >= 80 ? $("nav").addClass("secondary-dark-blue-bg").delay(8000).fadeIn('slow') : $("nav").hasClass("secondary-dark-blue-bg") && $("nav").removeClass("secondary-dark-blue-bg").delay(8000).fadeIn('slow')
    });
});

$('.menuitem1').hover(
    function() { $('.right-box').removeClass('active-right') }
);
$(document).ready(function() {
    $(".brick-btn").click(function() {
        $(".gallery-tabs").load("include/brick.html");
        scroll();

    });
    $(".paver-btn").click(function() {
        $(".gallery-tabs").load("include/pavers.html");
        scroll();
    });
    $(".block-btn").click(function() {
        $(".gallery-tabs").load("include/block.html");
        scroll();
    });
     $(".kerb-btn").click(function() {
        $(".gallery-tabs").load("include/kerbs.html");
        scroll();
    });
      $(".slab-btn").click(function() {
        $(".gallery-tabs").load("include/slabs.html");
        scroll();
    });
       $(".drain-btn").click(function() {
        $(".gallery-tabs").load("include/drains.html");
        scroll();
    });
});

function scroll() {
    $('html,body').animate({
            scrollTop: $("#top-gallery").offset().top
        },
        'slow');
}

function loadImage() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = loadImage();

$(".price-btn").click(function() {
    $.getJSON("block.json", function(mData) {
        var html = '';
        for (var i = 0; i < mData.length; i++) {

            html += '<table class="table-price">\
            <tr>\
            <th>' + mData[i].color + '</th>\
            <th>Price Per Piece</th>\
            </tr>\
            <tr>\
            <td>' + mData[i].dimension + '</td>\
            <td>' + mData[i].price + '</td>\
            </tr>\
            </table>';
        }

        $('.price-details').html(html);
    });
});
$(".guidline-btn").click(function() {
    $.getJSON("block.json", function(mData) {
        var html = '';
        for (var i = 0; i < mData.length; i++) {

            html += '<a><div class="pdf-img"><img src="img/pdf2.png" alt="pdf"></div> <p>' + mData[i].guidline + '</p></a> <br/>';
        }
        $('.guidlin-details').html(html);
    });
});