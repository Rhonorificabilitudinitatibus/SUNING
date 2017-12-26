$(function(){
		//控制搜索框内的东西
	$(".search-keyword").focus(function() {
		$(".search-keyword").val("");
	});
	$('.search-keyword').bind('input propertychange', function() {
		//  $('#result').html($(this).val().length + ' characters');  
		var txt = $(this).val();
		$(this).css("color", "#000");
		$(".rec-results").show();
		$.ajax({
			type: "get",
			url: "http://rec.mogujie.com/jsonp/recommend/1?callback=?&pid=17721&p_keyWord=" + txt,
			async: true,
			dataType: "jsonp",
			success: function(data) {
				var str = "<i class='b-close'>×</i>";
				for(var i = 0; i < data.data.data.length; i++) {
					str += "<li><a href='###'>" + data.data.data[i].tag + "</a></li>";
					$(".rec-results").html(str);
				}
				$(".rec-results").find(".b-close").click(function() {
					$(".rec-results").hide();
				})
				$(document).on('click', function(e) {
					var _con = $('.rec-results');
					if(!_con.is(e.target) && _con.has(e.target).length === 0) {
						$('.rec-results').css('display', 'none');
					}
				})
				$(".rec-results").click(function(e) {
					if(e.target.nodeName.toUpperCase() == "LI" || e.target.nodeName.toUpperCase() == "A") {
						$(".search-keyword").val($(e.target).text())
					}
				})
			},
			error: function(data) {
				console.log(data, data.status);
			}
		});
	});
	$(".search-keyword").blur(function() {
		if($(this).val() == "") {
			$(".search-keyword").val("圣诞寻礼 满199减50");
			$(this).css("color", "#bbb");
		}
	});
	
	//控制侧边栏
	//信息栏
	$(".sn-sidebar-tab-message").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-47px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})
	//理财栏
	$(".sn-sidebar-tab-finance").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-47px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})
	//足迹
	$(".sn-sidebar-tab-history").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-47px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})
	//签到
	$(".sn-sidebar-tab-sign").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-47px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})

	//在线咨询
	$(".sn-sidebar-service").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-73px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})

	//意见反馈
	$(".sn-sidebar-feedback").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-73px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})

	//二维码
	$(".sn-sidebar-code").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-73px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})

	//返回顶部
	$(".sn-sidebar-to-top").mouseenter(function() {
		$(this).find("span").show().stop().animate({
			"left": "-73px"
		}, 500)
	}).mouseleave(function() {
		$(this).find("span").stop().animate({
			"left": "0px"
		}, 500, function() {
			$(this).hide();
		})
	})
	
})