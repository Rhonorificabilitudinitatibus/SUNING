$(function(){
	$(".b-close").click(function(){
		$(".top-active-img").hide().end().find(".b-open").show().end().find(".b-close").hide();
		$(".b-open").click(function(){
			$(".top-active-img").show().end().find(".b-close").show().end().find(".b-open").hide();
		})
	})
	//控制网站导航显示或隐藏
		$(".ng-close").click(function(){
			$(".ng-sn-site-nav").hide();
		})
		$(".ng-site-nav-box").mouseenter(function(){
			$(".ng-sn-site-nav").slideDown(300);
		})
		$(".ng-site-nav-box").mouseleave(function(){
			$(".ng-sn-site-nav").slideUp(300);
		})
		
//		$(".service-handle").mouseenter(function(){
//			$(".shop-center-child").slideDown(300);
//		})
//		$(".service-handle").mouseleave(function(){
//			$(".shop-center-child").slideUp(300);
//		})
//		
//		$(".shop-handle").mouseenter(function(){
//			$(".service-center-child").slideDown(300);
//		})
//		$(".shop-handle").mouseleave(function(){
//			$(".service-center-child").slideUp(300);
//		})

//控制搜索框内的东西
$(".search-keyword").focus(function(){
	$(".search-keyword").val("");
});
$('.search-keyword').bind('input propertychange', function() {
//  $('#result').html($(this).val().length + ' characters');  
	var txt = $(this).val();
	$(this).css("color","#000");
	$(".rec-results").show();
	$.ajax({
		type:"get",
		url:"http://rec.mogujie.com/jsonp/recommend/1?callback=?&pid=17721&p_keyWord="+ txt,
		async:true,
		dataType:"jsonp",
		success:function(data){
			var str = "<i class='b-close'>×</i>";
			for(var i = 0; i < data.data.data.length; i++){
				str += "<li><a href='###'>" + data.data.data[i].tag + "</a></li>";
					$(".rec-results").html(str);
			}
			$(".rec-results").find(".b-close").click(function(){
				$(".rec-results").hide();
			})
			$(document).on('click', function(e){
						var _con = $('.rec-results');
						if(!_con.is(e.target) && _con.has(e.target).length === 0) {
							$('.rec-results').css('display','none');
	}
					})
			$(".rec-results").click(function(e){
				if(e.target.nodeName.toUpperCase()=="LI" || e.target.nodeName.toUpperCase()=="A"){
					$(".search-keyword").val($(e.target).text())					
				}
			})
		},
		error:function(data){
			console.log(data,data.status);
		}
	});
}); 
$(".search-keyword").blur(function(){
	if($(this).val()==""){
		$(".search-keyword").val("圣诞寻礼 满199减50");
		$(this).css("color","#bbb");
	}
});
//控制侧边栏
//信息栏
$(".sn-sidebar-tab-message").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-47px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})
//理财栏
$(".sn-sidebar-tab-finance").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-47px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})
//足迹
$(".sn-sidebar-tab-history").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-47px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})
//签到
$(".sn-sidebar-tab-sign").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-47px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})

//在线咨询
$(".sn-sidebar-service").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-73px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})


//意见反馈
$(".sn-sidebar-feedback").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-73px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})

//二维码
$(".sn-sidebar-code").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-73px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})

//返回顶部
$(".sn-sidebar-to-top").mouseenter(function(){
	$(this).find("span").show().stop().animate({"left":"-73px"},500)
}).mouseleave(function(){
	$(this).find("span").stop().animate({"left":"0px"},500,function(){
		$(this).hide();
	})
})

//横向导航滑动
//$(".second-item").hover(function(){
//	$(".third-item").hide();
//},function(){
//	$(".third-item").show();
//})
//$(".second-item").each(function(index){
//	$(".third-item").eq(index).show();
//})

/*var len = $(".second-item").length;
console.log(len)
for(let i = 0; i < len; i++){
	$(".second-item").eq(i).hover(function(){
		console.log(i)
		$(".third-item").eq(i).show();
	},function(){
		$(".third-item").eq(i).hide();
	})
}*/
$(".second-list").on("mouseenter","li",function(){
	var index = $(this).index();
	$(".third-item").eq(index).show();
	$(".third-item").mouseenter(function(){
		$(this).show();
	})
})
$(".second-list").on("mouseleave","li",function(){
	var index = $(this).index();
	$(".third-item").eq(index).hide();
	$(".third-item").mouseleave(function(){
		$(this).hide();
	})
})


$.get("json/data1.json", function(data) {
					var str = "";
					for(var i = 0; i < 8; i++){
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

				
				$.get("json/data1.json",function(data){
					var str1 = "";
					for(var i = 0; i < data.nav.fruit.drink.content.length;i++){
						str1 += '<a href="javascript:;">' + data.nav.fruit.drink.content[i] + '</a>';
					}
//					var str1_1 = "";
//						str1_1 += '<div class="third-item"><dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.drink.title + '</a></dt><dd>' + str1 + '</dd></dl>';
					var str1_1 = "";
					str1_1 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.drink.title + '</a></dt><dd>' + str1 + '</dd></dl>';
					
					var str2 = "";
					for(var i = 0; i < data.nav.fruit.egg.content.length;i++){
						str2 += '<a href="javascript:;">' + data.nav.fruit.egg.content[i] + '</a>';
					}
					var str2_2 = "";
					str2_2 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.egg.title + '</a></dt><dd>' + str2 + '</dd></dl>'
					
					var str3 = "";
					for(var i = 0; i < data.nav.fruit.freshfruit.content.length;i++){
						str3 += '<a href="javascript:;">' + data.nav.fruit.freshfruit.content[i] + '</a>';
					}
					var str3_3 = "";
					str3_3 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.freshfruit.title + '</a></dt><dd>' + str3 + '</dd></dl>'
					
					var str4 = "";
					for(var i = 0; i < data.nav.fruit.hotbrand.content.length;i++){
						str4 += '<a href="javascript:;">' + data.nav.fruit.hotbrand.content[i] + '</a>';
					}
					
					var str4_4 = "";
					str4_4 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.hotbrand.title + '</a></dt><dd>' + str4 + '</dd></dl>'
					
					
					var str5 = "";
					for(var i = 0; i < data.nav.fruit.hotsearch.content.length;i++){
						str5 += '<a href="javascript:;">' + data.nav.fruit.hotsearch.content[i] + '</a>';
					}
					var str5_5 = "";
					str5_5 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.hotsearch.title + '</a></dt><dd>' + str5 + '</dd></dl>'
					
					
					var str6 = "";
					for(var i = 0; i < data.nav.fruit.meat.content.length;i++){
						str6 += '<a href="javascript:;">' + data.nav.fruit.meat.content[i] + '</a>';
					}
					var str6_6 = "";
					str6_6 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.meat.title + '</a></dt><dd>' + str6 + '</dd></dl>'
					
					
					var str7 = "";
					for(var i = 0; i < data.nav.fruit.seafood.content.length;i++){
						str7 += '<a href="javascript:;">' + data.nav.fruit.seafood.content[i] + '</a>';
					}
					
					var str7_7 = "";
					str7_7 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.seafood.title + '</a></dt><dd>' + str7 + '</dd></dl>'
					
					var str8 = "";
					for(var i = 0; i < data.nav.fruit.vegetable.content.length;i++){
						str8 += '<a href="javascript:;">' + data.nav.fruit.vegetable.content[i] + '</a>';
					}
					var str8_8 = "";
					str8_8 += '<dl class="clearfix dl-border"><dt><a href="javascript:;">'+ data.nav.fruit.vegetable.title + '</a></dt><dd>' + str8 + '</dd></dl>'
					
					var str = "";
					for(var i = 0; i < 8; i++){
						str += '<div class="third-item">'+str1_1 + str2_2 + str3_3 + str4_4 + str5_5 + str6_6 + str7_7 + str8_8 + '</div>';
					}
					$(".third-list").html(str);
					
					var ico = ["&#xe638;",'&#xe608;','&#xe62d;','&#xe6c7;','&#xe63a;','&#xe60a;','&#xe60c;','&#xe603;'];
					var tit = ['111111','22222','3333','44444','55555','66666','77777','888888']
					for(var i = 0; i < ico.length; i++){
						$(".second-item").eq(i).find(".icon").html(ico[i]);
						$(".third-item").eq(i).find("dt a").text(tit[i]);
					}
					

})
	//控制弹出条
	$(window).load(function(){
		var a = setTimeout(function(){
			$(".c-popBox").fadeIn("slow");
		},2000)
	})
	$(".close-btn").click(function(){
		$(".c-popBox").fadeOut("slow");
	})
	
	//中间的轮播效果
	var timer = null;
	var index = 0;
	$(".banner-nav").find(".page-item").eq(index).addClass("current");
	function move(){
		timer = setInterval(function(){
		index++;
		if(index==5){
			index=0;
		}
	
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
	},2000)
		
	}
	move();
	$(".banner-wrapper .banner").hover(function(){
		clearInterval(timer);
		$(".point").css("opacity","0.5");
	},function(){
		$(".point").css("opacity","0.2");
		move();
		
	})
		//点击左右按钮切换
	$(".left-point").mouseenter(function(){
		clearInterval(timer);
	})
	
	$(".left-point").mouseleave(function(){
		move();
	})
	$(".right-point").mouseenter(function(){
		clearInterval(timer);
	})
	
	$(".right-point").mouseleave(function(){
		move();
	})
	
	$(".left-point").click(function(){
		index--;
		if(index==-1){
			index=4;
		}
		console.log(index)
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
	})
	$(".right-point").click(function(){
		clearInterval(timer);
		index++;
		if(index==5){
			index=0;
		}
		$(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		$(".banner-nav").find(".page-item").eq(index).addClass("current").siblings().removeClass("current");
	})
	
	$(".page-item").hover(function(){
		 clearInterval(timer);
		 index = $(this).index();
		 $(this).addClass("current").siblings().removeClass("current");
		 $(".banner").find("li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
	},function(){
		move();
	})
	//小轮播
	var index2 = 0;
	$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
	$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
	var timer2 = null;
	function move2(){
		
		index2++;
		if(index2 == 3){
			index2 = 0;
		}
		$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
		$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
	}
		timer2 = setInterval(move2,2000)
		$(".page-item2").mouseenter(function(){
			clearInterval(timer2);
			index2 = $(this).index();
			$(".banner2 li").eq(index2).fadeIn(300).siblings().fadeOut(300);
			$(".banner-wrap2 .banner-nav-wrapper .banner-nav .page-item2").eq(index2).addClass("current").siblings().removeClass("current");
		})
		$(".page-item2").mouseleave(function(){
			clearInterval(timer2);
			timer2 = setInterval(move2,2000);
		})
		
		$(".banner-wrap2").mouseenter(function(){
			clearInterval(timer2);
		})
		$(".banner-wrap2").mouseleave(function(){
			clearInterval(timer2);
			timer2 = setInterval(move2,2000);
		})
		
		//抢购数据
		$.get("json/timeout.json",function(data){
			console.log(data.length)
			var str = "";
			for(var i in data){
				str += '<li><a href="javascript:;"><img src='+ data[i].img + '><p class="name">'+ data[i].title + '</p><p class="price">¥<em>'+ data[i].price + '</em></p><p class="price-high">参考价: &nbsp;<span>¥</span><em>'+ data[i].discount + '</em></p><p class="progress">已抢购<em>'+ data[i].buy + '</em><span><i style=width:'+ data[i].buy + '></i></span></p></a><a class="cartBtn"></a></li>';
			}
			console.log(str)
			$(".c-scoller").find("ul").html(str);
		})
})