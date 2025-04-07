// AOS.init();

var isRTL = $("html").attr("dir") == "rtl" ? true : false,
  winWidth = $(window).width(),
  winHeight = $(window).height();
var start = new Date().getTime();
isMobile = false,
  $(function () {
    browserDetect();
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
  // header()
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




// aviation progress bar //

$(document).ready(function () {
  var $slider = $('.aviation-slides');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  var totalSlides = $slider.find('.slide-wrap').length;

  var progressStep = 100 / totalSlides;

  $progressBar.css('background-size', `${progressStep}% 100%`).attr('aria-valuenow', 0);
  $progressBarLabel.text('0% completed');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var progress = (nextSlide + 1) * progressStep;

    $progressBar
      .css('background-size', progress + '% 100%')
      .attr('aria-valuenow', progress);

    $progressBarLabel.text(progress + '% completed');
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    initialSlide: 0,
    prevArrow: $('.slick-previous-arrow'),
    nextArrow: $('.slick-next-arrow'),
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerMode: false
        }
      },

    ]
  });

  $('.slick-next-arrow').addClass('active');
  $('.slick-previous-arrow, .slick-next-arrow').on('click', function () {
    $('.slick-previous-arrow, .slick-next-arrow').removeClass('active');

    $(this).addClass('active');
  });
});




//end //

