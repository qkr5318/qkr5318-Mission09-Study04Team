// 스크린 990보다 작을때 on 클래스 생기면서 display-non
$(document).ready(function () {
  if ($(this).width() < 990) {
    console.log(this);
    $(".navbar-form > div").addClass("on");
  } else {
    $(" .navbar-form > div").removeClass("on");
  }
  $(window).resize(function () {
    if ($(this).width() < 990) {
      console.log(this);
      $(".navbar-form > div").addClass("on");
    } else {
      $(".navbar-form > div").removeClass("on");
    }
  });
});

$(function ($) {
  $(".faq_wrap .answer").hide();
  $(".faq_wrap button").click(function () {
    var answer = $(".faq_wrap .answer");
    var button = $(".faq_wrap button").index(this);

    for (i = 0; i < answer.length; i++) {
      if (i == button) {
        $(answer[button]).slideToggle(100);
      } else if (i != button) {
        $(answer[i]).slideUp(100);
      }
      //   if ($.answer.css("display") == "none") {//dd태그가 없다면 ture이기 때문에 부모태그에서 span태그를 찾아  ▼
      //     $button.find("span").html("▼");
      //  } else {//dd태그가 있다면 false이기 때문에 부모태그에서 span태그를 찾아 ▲
      //     $button.find("span").html("▲");
      //  }
    }
  });
});
//---------------쿠키--------------//

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    factory(require("jquery"));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = ($.cookie = function (key, value, options) {
    // Write

    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === "number") {
        var days = options.expires,
          t = (options.expires = new Date());
        t.setTime(+t + days * 864e5);
      }

      return (document.cookie = [
        encode(key),
        "=",
        stringifyCookieValue(value),
        options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
        options.path ? "; path=" + options.path : "",
        options.domain ? "; domain=" + options.domain : "",
        options.secure ? "; secure" : "",
      ].join(""));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split("; ") : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split("=");
      var name = decode(parts.shift());
      var cookie = parts.join("=");

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  });

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, "", $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };
});

// 쿠키 영역
$(function () {
  //쿠키("popup")의 값이 'none'이면
  //id값이 'notice_wrap'인 요소를 숨깁니다.
  if ($.cookie("popup") == "none") {
    $("#popupWindow").hide();
  }
  //class 값이 'closeBtn'인 요소를 클릭하면
  //체크박스의 체크 유무에 따라
  //쿠키를 생성하여 3일간만 저장합니다.
  var $expiresChk = $("#expiresChk");
  $(".closeBtn").on("click", closePop);
  function closePop() {
    if ($expiresChk.is(":checked")) {
      $.cookie("popup", "none", { expires: 3, path: "/" });
    }
    $("#popupWindow").fadeOut("fast");
  }
});

// topslide 영역

$(document).ready(function () {
  $(".gallery_slide").bxSlider({
    slideMargin: 5,
    auto: true, //자동으로 애니메이션 시작
    autoControls: true, // 시작 미 중지버튼 표시
    speed: 1500, //애니메이션 전환 속도 설정 (500= 5ms = 0.5초)
    pause: 2000, // 애니메이션 유지 시간 (1000= 10ms = 1초)
    pager: false, // 페이지 표시 보여짐
    autoDelay: 1,
  });
});

// 베가스 영역
$(function () {
  // $('body').vegas({
  //     delay: 3000,
  //     slides: [
  //         { src: '/images/nature-1.jpg' },
  //         { src: '/images/nature-2.jpg' },
  //         { src: '/images/nature-3.jpg' }
  //     ]
  // });
  $(".mp4").vegas({
    slides: [
      {
        src: "",
        video: {
          src: ["../resources/videos/gn_cycle.mp4"],
          loop: true,
          mute: true,
        },
      },
    ],
  });
});
//flex box안에 베가스 영역
$(function () {
  // $('body').vegas({
  //     delay: 3000,
  //     slides: [
  //         { src: '/images/nature-1.jpg' },
  //         { src: '/images/nature-2.jpg' },
  //         { src: '/images/nature-3.jpg' }
  //     ]
  // });
  $(".flex_vd1").vegas({
    slides: [
      {
        src: "",
        video: {
          src: ["../resources/videos/gn_city.mp4"],
          loop: true,
          mute: true,
        },
      },
    ],
  });
});
$(function () {
  // $('body').vegas({
  //     delay: 3000,
  //     slides: [
  //         { src: '/images/nature-1.jpg' },
  //         { src: '/images/nature-2.jpg' },
  //         { src: '/images/nature-3.jpg' }
  //     ]
  // });
  $(".flex_vd2").vegas({
    slides: [
      {
        src: "",
        video: {
          src: ["../resources/videos/gn_friend.mp4"],
          loop: true,
          mute: true,
        },
      },
    ],
  });
});
$(function () {
  // $('body').vegas({
  //     delay: 3000,
  //     slides: [
  //         { src: '/images/nature-1.jpg' },
  //         { src: '/images/nature-2.jpg' },
  //         { src: '/images/nature-3.jpg' }
  //     ]
  // });
  $(".flex_vd3").vegas({
    slides: [
      {
        src: "",
        video: {
          src: ["../resources/videos/gn_travle.mp4"],
          loop: true,
          mute: true,
        },
      },
    ],
  });
});

// // 아울 영역
// $(document).ready(function () {
//   $("#owl-demo").owlCarousel({
//     navigation: true, // Show next and prev buttons

//     slideSpeed: 300,
//     paginationSpeed: 400,

//     items: 1,
//     itemsDesktop: false,
//     itemsDesktopSmall: false,
//     itemsTablet: false,
//     itemsMobile: false,
//   });
// });

// 채널톡
// <!-- Channel Plugin Scripts -->

(function () {
  var w = window;
  if (w.ChannelIO) {
    return (window.console.error || window.console.log || function () {})(
      "ChannelIO script included twice."
    );
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    s.charset = "UTF-8";
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === "complete") {
    l();
  } else if (window.attachEvent) {
    window.attachEvent("onload", l);
  } else {
    window.addEventListener("DOMContentLoaded", l, false);
    window.addEventListener("load", l, false);
  }
})();
ChannelIO("boot", {
  pluginKey: "69de7886-25f8-4f7f-a9dd-4ae7229380ee",
});

//  카카오 지도 API에 자전거 대여소 위치 영역

const kakaoMapMarker = (obj) => {
  // 지도 표시 영역
  let mapContainer = document.querySelector("#map");

  // 지도 옵션
  let mapOption = {
    // 지도 중심좌표
    center: new kakao.maps.LatLng(37.503019, 126.879023),

    // 지도 확대 레벨
    level: 3,
  };

  // 지도를 표시할 div와 지도 옵션으로 지도를 생성
  let map = new kakao.maps.Map(mapContainer, mapOption);

  // 위치 정보 저장
  let positions = obj.map((item) => ({
    title: item.RENT_NM,
    latlng: new kakao.maps.LatLng(item.STA_LAT, item.STA_LONG),
  }));

  //  사이즈 변경시 이벤트 발생시 맵 좌표 불러오기
  window.addEventListener("resize", function () {
    map.setCenter(new kakao.maps.LatLng(37.503019, 126.879023));
  });

  // 이미지 마커 경로
  let imageSrc = `https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png`;

  // 이미지 마커 표시
  positions.forEach((position) => {
    let imageSize = new kakao.maps.Size(24, 35);

    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커 생성
    let marker = new kakao.maps.Marker({
      map: map,
      position: position.latlng,
      title: position.title,
      image: markerImage,
    });
  });
};

// 따릉이 대여소 데이터 받기
const getData = async () => {
  let res = await fetch(
    `http://openapi.seoul.go.kr:8088/6c4366596f716b72393962686e6469/json/tbCycleStationInfo/1/1000/`
  );
  let data = await res.json();
  console.log(data);
  let rows = data.stationInfo.row;

  kakaoMapMarker(rows); // 대여소 위치데이터를 카카오 마커를 보여주는 함수에 전달
};

getData();
