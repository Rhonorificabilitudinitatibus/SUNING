$(function() {
	//动态数据生成
	var id = location.search.split("id=")[1];
	$.get("json/detail.json", function(data) {
		var str = "";
		str += '<div class="box-left"><div class="bigimg"><div class="bigimg-main"><img src="' + data[id].middleimg[0] + '"/><div class="imgzoom"></div><i class="slogo"></i></div><div class="small-img"><a href="javascript:void(0);" class="prev"></a><div class="small-img-thumb"><ul></ul></div><a href="javascript:void(0);" class="next"></a></div><div class="show"><img src="' + data[id].middleimg[0] + '"/></div></div></div><div class="box-center"><div class="pro-title"><h1 class="pro-name"><span class="cs"><i>苏宁超市</i><i class="cs-zy">自营</i></span>' + data[id].title + '</h1></div><div class="discount"><span class="dis-logo"></span><span class="dis-cd"><i class="dis-icon"></i><span class="dis-info">此商品参加大聚惠</span></span></div><img src="img/detail-pic/merypic.jpg" class="mery-pic"><div class="pro-price">价格：<i>￥</i><span class="s-price">' + data[id].price + '</span></div><div class="pro-detail"><dl class="pro-list"><dt><span class="size">规格</span></dt><dd><ul class="tip-info"><li class="selected"><a href="javascript:void(0);">' + data[id].size + '<i></i></a></li></ul></dd></dl><dl class="buycount"><dt><span class="con">数量</span></dt><dd><a href="javascript:void(0);" class="minus"></a><input type="text" id="buyNum" value="1" max="99" /><a href="javascript:void(0);" class="plus"></a></dd></dl></div><div class="buyBtn"><a href="javascript:void(0);" class="buyNow">立即购买</a><a href="javascript:void(0);" class="buyCart">加入购物车</a></div></div>'
		//小图追加进去
		var str1 = "";
		for(var i = 0; i < data[id].smallimg.length; i++) {
			str1 += '<li><a href="javascript:void(0);"><img src="' + data[id].smallimg[i] + '"/></a></li>'
		}
		$(".box").html(str);
		$(".small-img-thumb ul").html(str1);
		$(".small-img-thumb ul li:first").addClass("current");
		//删掉左右按钮
		$(".small-img .prev").css({"visibility":"hidden"})
		$(".small-img .next").css({"visibility":"hidden"});
		//放大镜
		$(".bigimg-main").mouseenter(function() {
			$(".imgzoom").fadeIn("slow");
			$(".show").fadeIn("slow");
		}).mousemove(function(e) {
			var _left = e.pageX - $(".bigimg-main").offset().left - $(".imgzoom").get(0).offsetWidth / 2;
			var _top = e.pageY - $(".bigimg-main").offset().top - $(".imgzoom").get(0).offsetHeight / 2;
			if(_left <= 0) {
				_left = 0;
			}
			if(_top <= 0) {
				_top = 0;
			}
			if(_left >= $(".bigimg-main").get(0).offsetWidth - $(".imgzoom").get(0).offsetWidth) {
				_left = $(".bigimg-main").get(0).offsetWidth - $(".imgzoom").get(0).offsetWidth;
			}
			if(_top >= $(".bigimg-main").get(0).offsetHeight - $(".imgzoom").get(0).offsetHeight) {
				_top = $(".bigimg-main").get(0).offsetHeight - $(".imgzoom").get(0).offsetHeight;
			}
			$(".imgzoom").css({
				"left": _left,
				"top": _top
			});
			$(".show img").css({
				"left": -_left * 2,
				"top": -_top * 2
			});
		}).mouseleave(function() {
			$(".imgzoom").fadeOut("slow");
			$(".show").fadeOut("slow");

		})
		$(".small-img-thumb ul li").hover(function() {
			var index = $(this).index();
			$(this).addClass("current").siblings().removeClass("current");
			$(".bigimg-main img").attr({
				
				"src": data[id].middleimg[index]
			});
			$(".show img").attr({
				
				"src": data[id].middleimg[index]
			});
		})
	})

})