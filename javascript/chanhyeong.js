start(); // start() 함수를 구동시켜줌
// 전체 이미지의 개수, 첫번째 이미지(인덱스 0번째), 두번째 이미지(인덱스 1번째),
// 세번째 이미지(인덱스 2번째)까지 총 3개를 imgs 변수에 저장함

var imgs = 2;
var now = 0; // 첫번째 이미지(인덱스 0번째)부터 시작 초기값을 now 변수에 저장함

function start(){  // start() 함수 생성
    // .slide_box > img의 첫번째 요소의 형제들에게
    // fadeOut() 함수로 이미지를 사라지게 함
    $(".slide_box > img").eq(0).siblings().fadeOut('slow');
    // 3초 간격으로 slide() 함수 호출 실행함
    setInterval(function(){slide();}, 3000);
}

function slide(){
    // 변수 now와 변수 imgs의 값이 같다면 좌측 now 변수에 0을 대입해 주고,
    // 그렇지 않으면 now의 값에 1을 더한 값을 좌측 now 변수에 대입해 줌
    now = (now === imgs) ? 0 : now+=1;  // now = now+1
    // console.log(now);

    // now-1번째 <img>태그에 fadeOut() 함수로 이미지를 사라지게 함
    $(".slide_box > img").eq(now-1).fadeOut('slow');

    // now번째 <img>태그에 fadeIn() 함수로 이미지를 불러오게 함
    $(".slide_box > img").eq(now).fadeIn('slow');
}


$(document).ready(function () {
    // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인 
    var popup1 = getCookie('popup1');

    // 변수가 없을경우 팝업 출력 
    if (!popup1) {
        popUpAction('popup1');
    }
});

// 쿠키 가져오기 
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);

        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }

        x = document.cookie.indexOf(" ", x) + 1;

        if (x == 0) break;
    }

    return "";
} 
// 팝업출력
function popUpAction(name) {
    // name으로 해당 팝업창 열기 
    $("div[name=" + name + "]").fadeIn();
}

// 닫기버튼 클릭 이벤트 
$('.btn_close').click(function () {
    $(this).parent('.main_notice_pop').fadeOut();

    // 오늘하루 보지않기 체크 확인 
    if ($("input:checkbox[name=today_close1]").is(":checked") == true) {
        setCookie00('popup1', "done", 1);
    }

    // name으로 해당 팝업창 닫기 
    $(this).parent("div[name=" + name + "]").fadeOut();
}) 
