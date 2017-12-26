$(function() {
	$(".b-close").click(function() {
		$(".top-active-img").hide().end().find(".b-open").show().end().find(".b-close").hide();
		$(".b-open").click(function() {
			$(".top-active-img").show().end().find(".b-close").show().end().find(".b-open").hide();
		})
	})
	//控制网站导航显示或隐藏
	$(".ng-close").click(function() {
		$(".ng-sn-site-nav").hide();
	})
	$(".ng-site-nav-box").mouseenter(function() {
		$(".ng-sn-site-nav").slideDown(300);
	})
	$(".ng-site-nav-box").mouseleave(function() {
		$(".ng-sn-site-nav").slideUp(300);
	})
	$(".second-list").on("mouseenter", "li", function() {
		var index = $(this).index();
		$(".third-item").eq(index).show();
		$(".third-item").mouseenter(function() {
			$(this).show();
		})
	})
	$(".second-list").on("mouseleave", "li", function() {
		var index = $(this).index();
		$(".third-item").eq(index).hide();
		$(".third-item").mouseleave(function() {
			$(this).hide();
		})
	})

	$.get("json/data1.json", function(data) {
		var str = "";
		for(var i = 0; i < 8; i++) {
			str += '<li class="second-item"><em class="icon iconfont">&#xe638;</em><span class="second-item-title"><a href="javascript:;">' + data.nav.fruit.title + '</a><i></i></span><span class="second-item-list"></span><div class="split-line"></div></li>';
		}
		$(".second-list").html(str);
		var subStr = "";
		for(var i = 0; i < data.nav.fruit.prop.length; i++) {
			subStr += '<a href="javascript:;">' + data.nav.fruit.prop[i] + '</a>'
		}
		$(".second-item-list").html(subStr);

		$(".second-item-list").find("a:first-child").addClass("hot");

	})

	$.get("json/data1.json", function(data) {
		var str1 = "";
		for(var i = 0; i < data.nav.fruit.drink.content.length; i++) {
			str1 += '<a href="javascript:;">' + data.nav.fruit.drink.content[i] + '</a>';
		}
		var str1_1 = "";
		str1_1 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.drink.title + '</a></dt><dd>' + str1 + '</dd></dl>';

		var str2 = "";
		for(var i = 0; i < data.nav.fruit.egg.content.length; i++) {
			str2 += '<a href="javascript:;">' + data.nav.fruit.egg.content[i] + '</a>';
		}
		var str2_2 = "";
		str2_2 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.egg.title + '</a></dt><dd>' + str2 + '</dd></dl>'

		var str3 = "";
		for(var i = 0; i < data.nav.fruit.freshfruit.content.length; i++) {
			str3 += '<a href="javascript:;">' + data.nav.fruit.freshfruit.content[i] + '</a>';
		}
		var str3_3 = "";
		str3_3 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.freshfruit.title + '</a></dt><dd>' + str3 + '</dd></dl>'

		var str4 = "";
		for(var i = 0; i < data.nav.fruit.hotbrand.content.length; i++) {
			str4 += '<a href="javascript:;">' + data.nav.fruit.hotbrand.content[i] + '</a>';
		}

		var str4_4 = "";
		str4_4 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.hotbrand.title + '</a></dt><dd>' + str4 + '</dd></dl>'

		var str5 = "";
		for(var i = 0; i < data.nav.fruit.hotsearch.content.length; i++) {
			str5 += '<a href="javascript:;">' + data.nav.fruit.hotsearch.content[i] + '</a>';
		}
		var str5_5 = "";
		str5_5 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.hotsearch.title + '</a></dt><dd>' + str5 + '</dd></dl>'

		var str6 = "";
		for(var i = 0; i < data.nav.fruit.meat.content.length; i++) {
			str6 += '<a href="javascript:;">' + data.nav.fruit.meat.content[i] + '</a>';
		}
		var str6_6 = "";
		str6_6 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.meat.title + '</a></dt><dd>' + str6 + '</dd></dl>'

		var str7 = "";
		for(var i = 0; i < data.nav.fruit.seafood.content.length; i++) {
			str7 += '<a href="javascript:;">' + data.nav.fruit.seafood.content[i] + '</a>';
		}

		var str7_7 = "";
		str7_7 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.seafood.title + '</a></dt><dd>' + str7 + '</dd></dl>'

		var str8 = "";
		for(var i = 0; i < data.nav.fruit.vegetable.content.length; i++) {
			str8 += '<a href="javascript:;">' + data.nav.fruit.vegetable.content[i] + '</a>';
		}
		var str8_8 = "";
		str8_8 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">' + data.nav.fruit.vegetable.title + '</a></dt><dd>' + str8 + '</dd></dl>'

		var str = "";
		for(var i = 0; i < 8; i++) {
			str += '<div class="third-item">' + str1_1 + str2_2 + str3_3 + str4_4 + str5_5 + str6_6 + str7_7 + str8_8 + '</div>';
		}
		$(".third-list").html(str);

		var ico = ["&#xe638;", '&#xe608;', '&#xe62d;', '&#xe6c7;', '&#xe63a;', '&#xe60a;', '&#xe60c;', '&#xe603;'];
		var tit = ['111111', '22222', '3333', '44444', '55555', '66666', '77777', '888888']
		for(var i = 0; i < ico.length; i++) {
			$(".second-item").eq(i).find(".icon").html(ico[i]);
			$(".third-item").eq(i).find("dt a").text(tit[i]);
		}

	})
	//控制弹出条
	$(window).load(function() {
		var a = setTimeout(function() {
			$(".c-popBox").fadeIn("slow");
		}, 2000)
	})
	$(".close-btn").click(function() {
		$(".c-popBox").fadeOut("slow");
	})

	//中间的轮播效果
	var timer = null;
	var index = 0;
	$(".banner-nav").find(".page-item").eq(index).addClass("current");

	function move() {
		timer = setInterval(function() {
			index++;
			if(index == 5) {
				index = 0;
			}

			$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
			$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
		}, 3000)

	}
	move();
	$(".banner-wrapper .banner").hover(function() {
		clearInterval(timer);
		$(".point").css("opacity", "0.5");
	}, function() {
		$(".point").css("opacity", "0.2");
		move();

	})
	//点击左右按钮切换
	$(".left-point").mouseenter(function() {
		clearInterval(timer);
	})

	$(".left-point").mouseleave(function() {
		move();
	})
	$(".right-point").mouseenter(function() {
		clearInterval(timer);
	})

	$(".right-point").mouseleave(function() {
		move();
	})

	$(".left-point").click(function() {
		index--;
		if(index == -1) {
			index = 4;
		}
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
	})
	$(".right-point").click(function() {
		clearInterval(timer);
		index++;
		if(index == 5) {
			index = 0;
		}
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
	})

	$(".page-item").hover(function() {
		clearInterval(timer);
		index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
	}, function() {
		move();
	})
	//小轮播
	var index2 = 0;
	$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
	$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
	var timer2 = null;

	function move2() {

		index2++;
		if(index2 == 3) {
			index2 = 0;
		}
		$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
		$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
	}
	timer2 = setInterval(move2, 2000)
	$(".page-item2").mouseenter(function() {
		clearInterval(timer2);
		index2 = $(this).index();
		$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
		$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
	})
	$(".page-item2").mouseleave(function() {
		clearInterval(timer2);
		timer2 = setInterval(move2, 2000);
	})

	$(".banner-wrap2").mouseenter(function() {
		clearInterval(timer2);
	})
	$(".banner-wrap2").mouseleave(function() {
		clearInterval(timer2);
		timer2 = setInterval(move2, 2000);
	})

	//抢购数据
	$.get("json/index.json", function(data) {
		var str = "";
		var data = data.timeout;
		for(var i in data) {
			str += '<li><a href="detail.html?id='+ i +'"><img src=' + data[i].img + '><p class ="name">' + data[i].title + '</p><p class="price">¥<em>' + data[i].price + '</em></p><p class="price-high">参考价: &nbsp;<span>¥</span><em>' + data[i].discount + '</em></p><p class="progress">已抢购<em>' + data[i].buy + '</em><span><i style=width:' + data[i].buy + '></i></span></p></a><a class="cartBtn"></a></li>';
		}
		$(".c-scoller").find("ul").html(str);
	})

	//tab切换
	//		medicine栏
	$.get("json/index.json", function(data) {
		var _data = data;
		var data = _data.tab.medicine;
		var str = "";
		for(var i in data) {
			str += '<li><a href="detail.html?id='+ i +'"><img src="' + data[i].img + '"/><p class="name">' + data[i].title + '</p><p class="price">¥&nbsp;<em>' + data[i].price + '</em></p></a><a href="###" class="cartBtn"></a><p class="prize"></p></li>';
		}

		$(".c-rank-cont .clearfix").html(str);
		$(".c-rank-cont .clearfix").find("li").eq(0).addClass("first");
		$(".c-rank-cont .clearfix").find("li").eq(1).addClass("second");
		$(".c-rank-cont .clearfix").find("li").eq(2).addClass("third");
		$(".c-rank-nav ul li").mouseenter(function() {
			var index = $(this).index();
			$(this).addClass("hover").siblings().removeClass("hover");
			if(index % 2 == 0) {
				var data = _data.tab.medicine;
				var str = "";
				for(var i in data) {
					str += '<li><a href="detail.html?id='+ i +'"><img src="' + data[i].img + '"/><p class="name">' + data[i].title + '</p><p class="price">¥&nbsp;<em>' + data[i].price + '</em></p></a><a href="###" class="cartBtn"></a><p class="prize"></p></li>';
				}

				$(".c-rank-cont .clearfix").html(str);
				$(".c-rank-cont .clearfix").find("li").eq(0).addClass("first");
				$(".c-rank-cont .clearfix").find("li").eq(1).addClass("second");
				$(".c-rank-cont .clearfix").find("li").eq(2).addClass("third");
			} else {
				var data = _data.tab.milk;
				var str = "";
				for(var i in data) {
					str += '<li><a href="detail.html?id='+ i +'"><img src="' + data[i].img + '"/><p class="name">' + data[i].title + '</p><p class="price">¥&nbsp;<em>' + data[i].price + '</em></p></a><a href="###" class="cartBtn"></a><p class="prize"></p></li>';
				}

				$(".c-rank-cont .clearfix").html(str);
				$(".c-rank-cont .clearfix").find("li").eq(0).addClass("first");
				$(".c-rank-cont .clearfix").find("li").eq(1).addClass("second");
				$(".c-rank-cont .clearfix").find("li").eq(2).addClass("third");

			}
		})

	})

	//楼层
	$(".float-bar .list li").mouseenter(function() {
		var index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".saoma").mouseenter(function() {
		$(this).find(".box").show();
	})
	$(".saoma").mouseleave(function() {
		$(this).find(".box").hide();
	})
	//水果生鲜
	$.get("json/index.json", function(data) {
		var str1 = "";
		for(var i = 0; i < data.floor.sx.prop.length; i++) {
			str1 += '<li class="cur"><a href="javascript:;">' + data.floor.sx.prop[i] + '</a></li>'
		}
		$(".col1 .c-cards .clearfix").html(str1);
		var str2 = "";
		var data = data.floor.sx.rightimg;
		for(var j in data) {
			str2 += '<li><a href="detail.html?id='+ j +'"><img src="' + data[j].img + '"/><p class="name">' + data[j].title + '</p><p class="price">¥&nbsp;<em>' + data[j].price + '</em></p></a><a href="###" class="cartBtn"></a></li>';
		}
		$(".col2 .clearfix").html(str2);
	})

	//中外名酒
	$.get("json/index.json", function(data) {
		var str = "";
		var data = data.floor.mj.rightimg;
		for(var j in data) {
			str += '<li><a href="detail.html?id=' + j + '"><img src="' + data[j].img + '"/><p class="name">' + data[j].title + '</p><p class="price">¥&nbsp;<em>' + data[j].price + '</em></p></a><a href="###" class="cartBtn"></a></li>';
		}
		$(".c-comm-floor2 .col2 .clearfix").html(str);
	})
	//进口食品
	$.get("json/index.json", function(data) {
		var str = "";
		var data = data.floor.sp.rightimg;
		for(var j in data) {
			str += '<li><a href="detail.html?id=' + j + '"><img src="' + data[j].img + '"/><p class="name">' + data[j].title + '</p><p class="price">¥&nbsp;<em>' + data[j].price + '</em></p></a><a href="###" class="cartBtn"></a></li>';
		}
		$(".col2").eq(2).find(".clearfix").html(str);
		$(".col2").eq(4).find(".clearfix").html(str);
		$(".col2").eq(6).find(".clearfix").html(str);
		$(".col2").eq(8).find(".clearfix").html(str);
		$(".col2").eq(10).find(".clearfix").html(str);
		$(".col2").eq(12).find(".clearfix").html(str);
	})
	var flag = true;

		$(window).scroll(function() {
	
	if(flag) {		var _top = $(window).scrollTop();
			//		console.log($(window).scrollTop())
			if(_top >= 3000) {
				$("#comm_floatBar").css({
					"position": "fixed",
					"top": 0,
					"z-index": 55555
				});
			} else {
				$("#comm_floatBar").css({
					"position": "relative",
					"top": 0,
					"z-index": 55555
				})
			}
			//滚动显示当前楼层
			$(".main-floor").each(function(index) {
				var _top = $(this).offset().top - $(this).height() / 2;
				if($(window).scrollTop() >= _top) {
					$("#comm_floatBar").find("li").eq(index).addClass("on").siblings().removeClass("on");
				}
			})
	}
		})

	//点击回到对应楼层
	$("#comm_floatBar").find("li").click(function() {
		flag = false;
		$(this).addClass("on").siblings().removeClass("on");
		var _index = $(this).index();
		var _top = $(".main-floor").eq(_index).offset().top - $(".c-title").height();
		$("html,body").animate({
			"scrollTop": _top
		}, 500,function(){
			flag = true;
		})
	})
	//单击返回顶部
	$("#goTop").click(function() {
		flag = false;
		$("html").css({"position": "relative","top": 0,"z-index": 55555}).animate({
			"scrollTop": 0
		}, 1000,function(){
			flag = true;
		})
	})
	$(".tab-icon-to-top").click(function() {
		flag = false;
		$("html").css({"position": "relative","top": 0,"z-index": 55555}).animate({
			"scrollTop": 0
		}, 1000,function(){
			flag = true;
		})
	})
	$(".tab-tip-wider").click(function() {
		flag = false;
		
		$("html").css({"position": "relative","top": 0,"z-index": 55555}).animate({
			"scrollTop": 0
		}, 1000,function(){
			flag = true;
		})
	})
	//网站倒计时
	function countDown(time, name) {
		//		var oDay = $(class).find(".day");
		var oHour = $(name).find(".hour");
		var oMinute = $(name).find(".min");
		var oSecond = $(name).find(".sec");
		var endTime = new Date(time).getTime();
		var leftSec = (endTime - new Date().getTime()) / 1000;
		var timer = setInterval(function() {
			if(leftSec > 1) {
				leftSec--;
				var day = Math.floor((leftSec / 3600) / 24);
				var hour = Math.floor((leftSec / 3600) % 24);
				var minute = Math.floor((leftSec / 60) % 60);
				var second = Math.floor(leftSec % 60);
				$(oHour).text(hour < 10 ? "0" + hour : hour);
				$(oMinute).text(minute < 10 ? "0" + minute : minute);
				$(oSecond).text(second < 10 ? "0" + second : second);
			} else {
				clearInterval(timer);
			}
		}, 1000);
	}

	countDown("2017/12/26 9:20:00", ".time-info")

})