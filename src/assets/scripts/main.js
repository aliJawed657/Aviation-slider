
var isRTL = $("html").attr("dir") == "rtl" ? true : false,
  winWidth = $(window).width(),
  winHeight = $(window).height();
var start = new Date().getTime();
isMobile = false,
  $(function () {
    browserDetect();
  });


$(window).on("scroll", function () {
  let scrollPosition = $(window).scrollTop();
  let header = $(".header");
  header.css("position", "fixed")

  if (scrollPosition > 50) {
    header.css("background-color", "white");
  } else {
    header.css("background-color", "");
  }
});




$(document).ready(function () {
  var totalSlides = $('.team-bottom-image .team-member').length;

  $('.team-bottom-image').slick({
    dots: totalSlides > 4 ? true : false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,


    autoplay: totalSlides > 4 ? true : false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: totalSlides > 4 ? true : false
        }
      }
    ]
  });
});



$(window).on("resize orientationchange", function () {
  (winWidth = $(window).width()), (winHeight = $(window).height());
});

$(window).on("scroll", function () {

});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    //Do on ESC press
  }
});

function browserDetect() {
  navigator.sayswho = (function () {
    var ua = navigator.userAgent,
      tem,
      M =
        ua.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join("").replace("OPR", "Opera");
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(" ");
  })();
  $("body").addClass(navigator.sayswho);
}

$(document).ready(function () {
  // animateWords();
  ChangeToSvg();
  header()
});


function ChangeToSvg() {
  $("img.js-tosvg").each(function () {
    var $img = $(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " insvg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}





function header() {
  // const closeIcon = document.getElementById("closeIcon");
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");

  hamburger.addEventListener("click", () => {
    mobileMenuOverlay.style.right = "0";

    $("body").css("overflowY", "hidden");

    $(header).css("z-index", "10000");

    $('#two').css("transform", "rotate(45deg) translate(1px, -8px)").css("transform-origin", "center");
    $('#three').css("transform", "rotate(-45deg) translate(-3px  ,12px)").css("transform-origin", "center");
    $('#one').css("opacity", 0);

    if (hamburger.classList.contains('opened')) {
      $(two).css("transform", "none");
      $(one).css("opacity", 1);
      $(three).css("transform", "none");
      $(two).css("stroke", "none")

      
      mobileMenuOverlay.style.right = "-100%";
      $("body").css("overflowY", "auto");
      $(header).css("z-index", "");
      $(".header .mobile-hamburger svg path").css("stroke", "")
      $(".header .navbar-logo svg path").css("fill", "")
      $(".header").css("background-color" , "")
      
      
      hamburger.classList.remove('opened');
    } else {
      $(".header").css("background-color" , "black")
      hamburger.classList.add('opened');
      $(".header .mobile-hamburger svg path").css("stroke", "green")
      $(".header .navbar-logo svg path").css("fill", "green")


    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {

      mobileMenuOverlay.style.right = "-100%";
      $("body").css("overflowY", "")
      $(".header .mobile-hamburger svg path").css("stroke", "")
      $(".header .navbar-logo svg path").css("fill", "")
      $('#two').css("transform", "");
      $('#three').css("transform", "");
      $(".header").css("background-color" , "")
      $('#one').css("opacity", "");
    } else if (hamburger.classList.add('opened')) {
      $(".header .mobile-hamburger svg path").css("stroke", "green")
      $(".header .navbar-logo svg path").css("fill", "green")

    }
  });

}





