// toggle message in on icon
$(".fa-user").mouseover(function(){
		$(this).next().css({"opacity":1, "transform":"translateY(-10px)"});
})
$(".fa-user").mouseleave(function(){
		$(this).next().css({"opacity":0, "transform":"translateY(10px)"});
})

// top-menuBar의 메뉴에 마우스 올리면 sub 메뉴처리  (명령을 잘못 생각한 예임.: 이런 식으로 하면 구조적인 문제가 발생
// 상태 중심적인 프로그램을 작성하는 것이 uI 임을 알고 프로그램을 제대로 판단해서 작성해야 함.)
/* $(".nav").mouseover(function(){
		console.log($(".top-subMenu"));
		if ($(".top-subMenu").eq(0).hasClass(".con1")) { $(".con1").show();
		  $(".con2").hide();  $(".con3").hide();  $(".con4").hide();
			$(".con5").hide();  $(".con6").hide();  $(".con7").hide(); 
		  $(".con1").css({"left" : "-15rem"})}
		else if  ($(".top-subMenu").hasClass(".con2")) { $(".con2").show();
		  $(".con1").hide();  $(".con3").hide();  $(".con4").hide();
			$(".con5").hide();  $(".con6").hide();  $(".con7").hide(); 
			$(".con2").css({"left" : "-5rem"})}
		else if ($(".top-subMenu").hasClass(".con3")) { $(".con3").show();
		  $(".con1").hide();  $(".con2").hide();  $(".con4").hide();
			$(".con5").hide();  $(".con6").hide();  $(".con7").hide(); 
			$(".con3").css({"left" : "2rem"})}
		else if ($(".top-subMenu").hasClass(".con4")) { $(".con4").show();
		  $(".con1").hide();  $(".con2").hide();  $(".con3").hide();
			$(".con5").hide();  $(".con6").hide();  $(".con7").hide(); 
			$(".con4").css({"left" : "7rem"})}
		else if ($(".top-subMenu").hasClass(".con5")) { $(".con5").show();
		  $(".con1").hide();  $(".con2").hide();  $(".con3").hide();
			$(".con4").hide();  $(".con6").hide();  $(".con7").hide(); 
			$(".con5").css({"left" : "15rem"})}
		else if ($(".top-subMenu").hasClass(".con6")) { $(".con6").show();
		  $(".con1").hide();  $(".con2").hide();  $(".con3").hide();
			$(".con4").hide();  $(".con5").hide();  $(".con7").hide(); 
			$(".con6").css({"left" : "20rem"})}
		else if ($(".top-subMenu").hasClass(".con7")) { $(".con7").show();
		  $(".con1").hide();  $(".con2").hide();  $(".con3").hide();
			$(".con4").hide();  $(".con5").hide();  $(".con6").hide(); 
			$(".con7").css({"left" : "25rem"})}
		else { $(".top-subMenu").hide();}
		$(".top-subMenu").css({"width": "0.5rem", "opacity": 1, "color": "black"});
}); */

$(".nav").mouseover(function(){
	$(".top-subMenu").css({"color":"white", "display":"none", "opacity":0});
	$(this).find(".top-subMenu").css({"color":"purple", "display":"flex", "opacity":1});
});

$(".nav").mouseleave(function(){
		$(".navi").css({"transform":"translateY(5px)"});
		$(".top-subMenu").css({"opacity": 0, "color": "gray"});
});

// main screen에 그림 slide처리
var slides = [
	{src: "../img/표지1.png"},
	{src: "../img/표지2.png"},
	{src: "../img/표지1.png"},
	{src: "../img/표지2.png"},
	{src: "../img/표지1.png"},
	{src: "../img/표지2.png"},
	{src: "../img/표지1.png"},
	{src: "../img/표지2.png"}
];

var now = 0;														// 맨 처음 .slide의 index
var end = slides.length - 1;						// 마지막 .slide의 index
var dir = "R";													// 움직이는 방향 L / R
var tar; 																// 움직임 목표값 L:-50% / R:0
var cnt = 1;														// 화면에 보여지는 갯수
var slideCnt = cnt + 2;									// li.slide의 갯수
var slideWid = (100/cnt).toFixed(4); 		// .slide의 width를 소수점 5자리까지..
var speed = 10;
var gap = 5000;
var arr = [];
var num = 1;
var fst = "L";
var snd = "R";
var trd = "C";
var interval;

init();
function init() {
	for(var i=0, html=''; i<slideCnt; i++) {
		html += '<li class="slide" style="flex: '+slideWid+'% 0 0;">';
		html += '<img src="" class="w-100">';
		html += '</li>';
	}
	$(".slides").html(html);
}

slideInit();
function slideInit() {
	if(dir == "L") tar = (slideWid * -2) + "%";
	else tar = 0;
	// 6개의 칸에 들어갈 index 계산
	if(now == 0) arr[0] = end;
	else arr[0] = now - 1;
	for(var i=0; i<=cnt; i++) {
		if(i + now > end) arr[(i+1)] = i + now - end - 1;
		else arr[(i+1)] = now + i;
	}
	// console.log(arr);
	for(var i=0; i<slideCnt; i++) {
		$(".slide").eq(i).find("img").attr("src", slides[arr[i]].src);
	}
	$(".slides").css({"left": -slideWid+"%"});

	if(dir == "L") {
		if(now == end) now = 0;
		else now++;
	}
	else {
		if(now == 0) now = end;
		else now--;
	}
}

function slideAni() {
  for (var num=1; num < 3; num++) {
		 if (num==1) dir="L";
		 else if (num==2) dir="R";
		 else if (num==3) dir="C";
		 else num=1;
	}

	if(dir == "L") tar = -2*slideWid + "%";
	else tar = 0;
	$(".slides").stop().animate({"left": tar, "opacity": 1}, speed, slideInit);
	}

interval = setInterval(slideAni, gap);

// tlt 작성 
var tlt = [{
		src: "../img/logo.png",
    slogan: "SALE FOR A WEEK",
		title: "FIND YOUR<br>PERFECT BIKE!",
		desc: "Many skins, Powerful features, Great support, Exclusive offer",
		link: "https://naver.com",
    position: "left"
	},{
		src: "../img/logo.png",
    slogan: "NEW ARRIVALS",
		title: "NEW BIKE FOR 2019!",
		desc: "",
		link: "https://daum.net",
    position: "top"
}];

var html = '';
var tltNw = 0;
var tltEd = tlt.length - 1;
var tltSpd = 3000;
var Gap = 5000;

var tltInterval;
for(var i in tlt) {
	html = '<img src="'+tlt[i].src+'" class="tltLogo w-10 h-5 position-absoilute" style="top: 0; opacity: 0; ">';
	html += '<div class="tlt w-50 h-100 position-absoilute pt-serif d-flex justify-content-center align-items-center" style="top: 0; opacity: 0; z-index: 99;';
	if(ads[i].position == "left") html += 'left: 0;">';
	if(ads[i].position == "right") html += 'right: 0;">';
	if(ads[i].position == "center") html += 'width: 100% !important; text-align: center;">';
html += '<ul>';
html += '<li class="slogan">'+tlt[i].slogan+'</li>';
html += '<li class="title">'+tlt[i].title+'" class="tlt"></li>';
html += '<li class="desc">'+tlt[i].desc+'</li>';
html += '<li><a href="'+tlt[i].link+'" class="bttn btn-success">Shop Now!</a></li>';
html += '</ul>';
html += '</div>';
$(".tlt-text").append(html);
$(".tlt-dot").append('<span class="pointer">●</span>');
}

// 베너의 높이 잡기는 생략 slide에서 형성

tltAni();
tltInterval = setInterval(tltAni, Gap);
function tltAni(){
// dot pager 클릭시
$(".tlt-dot span").removeClass("text-danger").addClass("text-cyan");
$(".tlt-dot span").eq(tltNw).removeClass("text-cyan").addClass("text-danger");

// tlt Animation
$(".tlt-text").stop().animate({"top": "50%", "opacity": 0}, tltSpd/2, function(){
	$(this).css({"top": 0});
});

if(tlt[tltNw].position == "left") {
	$(".tlt-text").eq(tltNw).css({"left": "-100%"});
	$(".tlt-text").eq(tltNw).stop().animate({"left": 0,"opacity": 1}, tltSpd/2);
}
if(tlt[tltNw].position == "right") {
	$(".tlt-text").eq(tltNw).css({"right": "-100%"});
	$(".tlt-text").eq(tltNw).stop().animate({"right": 0,"opacity": 1}, tltSpd/2);
}
if(tlt[tltNw].position == "center") {
	$(".tlt-text").eq(tltNw).css({"top": "-100%"});
	$(".tlt-text").eq(tltNw).stop().animate({"top": 0,"opacity": 1}, tltSpd/2);
}
}
// 배경이미지 : 처리 생략

// dot pager 클릭시 처리되는 process
$(".tlt-dot span").click(function(){
  tltNw = $(this).index();
	tltAni();
});

$(".tlt-wrap, .tlt, .tlt-dot").hover(function(){
	clearInterval(tltInterval);
}, function(){
	clearInterval(tltInterval);
  tltInterval = setInterval(tltAni, Gap);
});







