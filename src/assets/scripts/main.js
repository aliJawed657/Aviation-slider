
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
  // let header = $(".header");
  let header = document.getElementById("header")
  // header.css("position", "fixed")
  header.classList.add("scrolled")

  if (scrollPosition > 0) {
    // header.css("background-color", "white");
    header.classList.add("scrolled")

    // header.css("box-shadow", "rgba(0, 0, 0, 0.24) 0px 3px 8px");

  } else {
    // header.css("background-color", "");
    // header.css("box-shadow", "");
    header.classList.remove("scrolled")
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,

        }
      },
      {
        breakpoint: 600,
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
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const menu = document.getElementById("menu-btn");

  hamburger.addEventListener("click", () => {
    mobileMenuOverlay.classList.toggle('open');
    document.body.style.overflowY = mobileMenuOverlay.classList.contains('open') ? 'hidden' : 'auto';
    header.style.zIndex = mobileMenuOverlay.classList.contains('open') ? '10000' : '';
    menu.classList.add("hamburger-open")
    header.classList.remove("scrolled")


    if (hamburger.classList.contains('opened')) {
      header.classList.remove("scrolled")

      menu.classList.remove('hamburger-open')
      hamburger.classList.remove('opened');
      header.style.backgroundColor = window.scrollY > 0 ? 'white' : '';
      $(".header .mobile-hamburger svg path").css("stroke", "")
      $(".header .navbar-logo svg path").css("fill", "")


    } else {
      hamburger.classList.add('opened');
      header.classList.remove("scrolled")

      header.style.backgroundColor = '';
      $(".header .mobile-hamburger svg path").css("stroke", "green");
      $(".header .navbar-logo svg path").css("fill", "green");
    }
  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 991) {
      mobileMenuOverlay.classList.remove('open');
      document.body.style.overflowY = 'auto';
      hamburger.classList.remove('opened');
      header.style.backgroundColor = window.scrollY > 0 ? 'white' : '';
      $(".header .mobile-hamburger svg path").css("stroke", "")
      $(".header .navbar-logo svg path").css("fill", "");
      menu.classList.remove('hamburger-open');
    }
  });
}
