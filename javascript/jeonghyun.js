$(document).ready(function(){
    // $(".headJfnt").delay(1000).animate() 의미는 .txt1에 적용된 animate() 메서드가 1000ms(1s = 1초)후에 작동함을 의미합니다.
    $(".headJfnt").delay(300).animate({opacity:1, top:80}, 800, "swing",
    function(){
        $(".headJfnt_img").delay(500).animate({opacity:0.8, top:0}, 800, "swing");
    })
});




   
//----------------↓↓↓↓↓↓쿠키↓↓↓↓↓↓↓--------------//

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

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
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

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
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));



//---------------↑↑↑↑↑↑↑↑쿠키↑↑↑↑↑↑↑----------------------//
$(function(){
  //쿠키("popup")의 값이 'none'이면
  //id값이 'notice_wrap'인 요소를 숨깁니다.
  if($.cookie('popup') == 'none'){
      $("#popupWindow").hide();
  }
  //class 값이 'closeBtn'인 요소를 클릭하면
  //체크박스의 체크 유무에 따라 
  //쿠키를 생성하여 3일간만 저장합니다.
  var $expiresChk = $("#expiresChk");
  $(".closeBtn").on("click", closePop );
  function closePop(){
      if($expiresChk.is(":checked")){
          $.cookie("popup","none",{expires:3, path:"/"});
      }
      $("#popupWindow").fadeOut("fast");
  }
});

//--------------bxslider------------------------

// 팝업 박스슬라이드 
  $(".slider_gallery").bxSlider({
    auto: true, //자동으로 애니메이션 시작
    autoControls: false, // 시작 및 중지버튼 표시
    speed:500, //애니메이션 전환 속도 설정(500 = 500ms = 0.5s = 0.5초)
    pause:3000, //애니메이션 유지 시간 (1000 = 1000ms =1s = 1초)
    stopAutoOnClick: false, // 이전(<) 또는 다음(>) 버튼을 누르면 슬라이드가 정지됨
    pager: false, //페이지 표시 보여짐.
    slideWidth: 1000,
    controls: false,
    mode: 'vertical'
});

// 메인페이지 박스슬라이드
$(".slider_gallery_main").bxSlider({
  auto: true, //자동으로 애니메이션 시작
  autoControls: false, // 시작 및 중지버튼 표시
  speed:700, //애니메이션 전환 속도 설정(500 = 500ms = 0.5s = 0.5초)
  pause:4000, //애니메이션 유지 시간 (1000 = 1000ms =1s = 1초)
  stopAutoOnClick: false, // 이전(<) 또는 다음(>) 버튼을 누르면 슬라이드가 정지됨
  pager: false, //페이지 표시 보여짐.
  slideWidth: 1900,
  controls: false,
  mode: 'fade'
});
 
// 메인페이지 서브 박스슬라이드
$(".slider_gallery_sub").bxSlider({
  auto: true, //자동으로 애니메이션 시작
  autoControls: false, // 시작 및 중지버튼 표시
  speed:700, //애니메이션 전환 속도 설정(500 = 500ms = 0.5s = 0.5초)
  pause:3200, //애니메이션 유지 시간 (1000 = 1000ms =1s = 1초)
  stopAutoOnClick: false, // 이전(<) 또는 다음(>) 버튼을 누르면 슬라이드가 정지됨
  pager: false, //페이지 표시 보여짐.
  slideWidth: 500,
  controls: false
  
});

// ------------------bxslider 끝-------------------
  

$(function () {
  //('.tabmenu > li > a').click : .tabmenu 요소의 자식 요소<li>의 자식 요소인 a 태그 영역을 클릭하면
  $(".tabmenu > li > a").click(function () {
    //(this).parent().addClass("active") : 현재 태그의 부모 태그를 찾아 'active' 클래스를 추가해줌.
    //a태그의 부모 태그는 li 이므로, 클릭하면 li에 'active'클래스를 추가해줍니다
    $(this)
      .parent()
      .addClass("active")
      //.siblings().removeClass("axtive"):다른 형제 태그를 찾은 후 'active'클래스를 삭제해줍니다
      .siblings()
      .removeClass("active");
    return false;
    // return false : 클릭 이벤트 처리를 중단하고 함수를 호출한 곳으로
    // 즉시 돌아가도록 함. 이것은 HTML에서 태그들은 중첩되어 있기 때문에
    // <a> 태그를 클릭하면 이 요소를 감싸고 있는 부모 태그들도 클릭한
    // 것처럼 이벤트에 반응하게 됨. 이런 것이벤트 버블(Event bubbling)이라고 함.
    // 따라서, 현재 이벤트를 중지시키고, 이벤트가 부모 태그에 전달되지 않도록
    // 중지하기 위해서 return false를 사용함.
    // 단, return false를 사용하면 자바스크립해석기가 이 구문을 만나는 즉시
    // 코드 실행을 중지하기 때문에 return fals다음에 다른 문장을 쓰지 않도록 주의가 필요함.
  });
});

$(document).ready(function(){
  //문서 전체(body 태그)에 플러그인 적용함
  $(".mdwrite").vegas({
  slides: [
      //초반 이미지  안나타나게 함 
  //video{}배경 안에 배경동영상과 옵션값 지정함
  {   src: '',
      video: {
          // src 속성을 사용해 동영상 지정해 줌
          src: [
              '../resources/video/jh_furniture2.mp4',
          ],
          //loop  속성을 사용해 동영상 반복 여주 지정함
          loop: true,
          // 동영상을 무음 상태로 만들어줌
          mute: true
      }
  }
]
});
});

  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "6d3174fe-4c2b-44be-9e89-1bb6032d2d36"
  });


  $(function(){
    var owl = $('.owl-carousel');
        owl.owlCarousel({
            //화면에 표시할 항목 개수 지정 : 한번에 여러개의 이미지를 Carousel로 표현합니다.
            items:3,
            //무한 반복 적용 여부
            loop:true,
            //항목과 항목 사이의 간격(margin 적용)
            margin:20,
            //nav 활성화
            nav:false,
            //navText 표현 지정
            navText:false,
            //자동 스크롤 실행
            autoplay:true,
            //자동 스크롤할때 시간 간격, 밀리초(milliseconds) 단위
            autoplayTimeout:3000,
            //내용 위로 마우스 포인터를 올리면 자동 스크롤 일시 멈춤
            autoplayHoverPause:false
            //실행 확인 : 코딩 완료 후 웹페이지를 실행하면 화면에 이미지가 3개 표시되고,
            //잠시 기다리면(3000ms = 3초) 스크롤이 자동 실행됨을 확인해 봅니다.
    });
});

