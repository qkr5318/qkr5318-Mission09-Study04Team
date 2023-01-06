// parllaxScroll 영역

$(function () {
	//브라우저 창의 크기를 조절했을때 내용 전체가 브라우저 창의 너비와 높이가 딱맞게 표시되도록 jQuery를 사용해 브라우저 창의 크기를 알아낸 후 현재 문서의 너비와 높이로 지정해야합니다. 그러면, 섹션이 화면에 가득차게 만드는 효과구현이 가능합니다.
	$(window).resize(function () {
		$(".container").width($(window).width()).height($(window).height());
	});

	setTimeout(function () {
		$(window).resize();
	}, 1000);

	//.bg-holder 요소에서 paralloxScroll을 실행합니다.

	$(".bg-holder").parallaxScroll({
		//parallax-scroll 플러그인의 옵션릉 friction 옵션 하나뿐입니다. 이 옵션 값은 0에서 1사이의 소수로 표시하는데, 0이면 배경 이미지가 콘텐츠를 따라 스크롤이 되고, 1이면 배경이 완전히 고정되어 콘텐츠만 스크롤 합니다. 0과 1사이의 값을 적절히 사용하면 콘텐츠와 배경의 스크롤 속도를 다르게 해서 페럴렉스 효과를 낼 수 있습니다.
		friction: 0.3,
	});
});

//tubular 영역
$("document").ready(function () {
	var options = { videoId: "CwLWV3k9h2Y", mute: true };
	$("#video_wrapper").tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
});

//vegas 영역
$(document).ready(function () {
	$(".main_vegas").vegas({
		slides: [
			{
				src: "",
				video: {
					src: ["../resources/video/yn_main.mp4"],
					loop: true,
				},
			},
		],
	});
});

//owl 영역
$(function () {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		//화면에 표시할 항목 개수 지정 : 여기서는 5개 이미지 중에서 3개 항목을 보여줌
		items: 3,
		loop: true, ////무한반복 적용여부
		nav: false, // nav 활성화
		// navText: ["이전", "다음"], 비활성화 처리
		margin: 10, //항목(item)과 항목(item) 사이의 간격(margin 적용)
		autoplay: true, //자동 스크롤 실행
		autoplayTimeout: 2000, //자동 스크롤 시간 간격, 말리초 단위 : 1000ms=1s=1초
		autoplayHoverPause: false, //내용 위로 마우스 포인터를 올리면 자동 스크롤 일시 멈춤
	});
});

//팝업-쿠키영역
$(function () {
	// 쿠키("popup")의 값이 'none'이면
	//id값이 'notice_wrap'인 요소를 숨깁니다.
	if ($.cookie("popup") == "none") {
		$("#notice_wrap").hide();
	}
	//  class 값인 'closeBtn'인 요소를 클릭하면 체크박스의 체크 유무에 따라
	// 쿠키를 생성하여 3일감만 저장합니다.
	var $expiresChk = $("#expiresChk");
	$(".closeBtn").on("click", closePop);
	function closePop() {
		if ($expiresChk.is(":checked")) {
			$.cookie("popup", "none", { expires: 3, path: "/" });
		}
		$("#notice_wrap").fadeOut("fast");
	}
});
