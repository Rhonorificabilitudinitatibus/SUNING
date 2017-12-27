$(function() {
	if(getCookie("UN")){
		var obj = JSON.parse(getCookie("UN"));
		var userinfo = obj.name;
		console.log(userinfo);
		$(".reg-bar-node").find(".reg-bbb").hide();
		$(".reg-bar-node").find(".login").attr("href","###");
		$(".reg-bar-node").find(".login").html(userinfo);
	}
	$.get("json/detail.json", function(data) {
		if(getCookie("cart")) {
			var obj = JSON.parse(getCookie("cart"));
		} else {
			var obj = {};
		}
		var html = "";
		for(var attr in obj) {
			html += '<div class="m-store"><div class="cart-list"><div data-sku="a" class="item item-last"><div class="item-main clearfix"><div class="td td-chk form"><div class="cart-checkbox"><label></label></div></div><div class="td td-item"><div class="item-pic"><a href="javascript:;" class="item-img-box"><img src="' + data[attr].img + '"></a></div><div class="item-info"><a href="javascript:;" class="item-title">' + data[attr].title + '</a></div></div><div class="td td-specs">件</div><div class="td td-price"><div class="price-line"><span class="price-now sn-price"><i>¥</i><em>' + data[attr].price + '</em></span></div></div><div class="td td-amount"><div class="item-amount"><a href="javascript:;" class="minus no-minus" name="icart1_goods_numd">-</a><input type="text" class="ui-text text-amount" value="' + obj[attr].num + '" disabled="disabled"><a href="javascript:;" class="plus" name="icart1_goods_numi">+</a></div></div><div class="td td-sum"><b class="sn-price"><i>¥</i><em>' + (data[attr].price * obj[attr].num).toFixed(2) + '</em></b></div><div class="td td-op"><a href="javascript:;" class="del tip-common-click-fn-btn" data-id="' + attr + '">删除</a></div></div></div></div></div>'
		}
		$("#cart-body").html(html);
		//点击选中按钮
		$(".cart-checkbox").find("label").click(function() {
			$(this).toggleClass("choose");
			var allLen = $("#cart-body .m-store").length;
			var len = $("#cart-body .choose").length;
			if(allLen == len) {
				$("#all1,#all2").addClass("choose");
			} else {
				$("#all1,#all2").removeClass("choose");
			}
			sumAll();
		})
		//全选
		$("#all1,#all2").click(function() {
			if(!$(this).hasClass("choose")) {
				$(this).addClass("choose");
				$(".cart-checkbox").find("label").addClass("choose");
			} else {
				$(this).removeClass("choose");
				$(".cart-checkbox").find("label").removeClass("choose");

			}
			sumAll();
		})
		//删除按钮
		$(".del").click(function() {
			var id = $(this).attr("data-id");
			delete obj[id];
			$(this).parents(".m-store").remove();
			var str = JSON.stringify(obj);
			setCookie("cart", str, 7);
			sumAll();
		})
		//全部删除
		$(".del-selected").click(function() {
			$(".m-store").remove();

			removeCookie("cart");
			sumAll();
		})
		//减少数量
		$(".item-amount .minus").click(function() {
			var id = $(this).parents(".td-amount").siblings(".td-op").find(".del").attr("data-id");
			var num = $(this).siblings(".ui-text").val();
			if(num == 1) {
				num = 1;
				$(this).addClass("no-minus");
			} else {
				num--;
				obj[id].num--;
				$(this).removeClass("no-minus");
			}
			$(this).siblings(".ui-text").val(num);
			var Price = $(this).parents(".td-amount").siblings(".td-price").find(".sn-price em").text();
			var sum_price = (Price * num).toFixed(2);

			$(this).parents(".td-amount").siblings(".td-sum").find(".sn-price em").text(sum_price);
			console.log(num);
			var str = JSON.stringify(obj);
			setCookie("cart", str, 7);
			sumAll();
		})
		//增加数量
		$(".item-amount .plus").click(function() {
			var id = $(this).parents(".td-amount").siblings(".td-op").find(".del").attr("data-id");
			var num = $(this).siblings(".ui-text").val();
			num++;
			$(this).siblings(".minus").removeClass("no-minus");
			obj[id].num++;
			$(this).siblings(".ui-text").val(num);
			var Price = $(this).parents(".td-amount").siblings(".td-price").find(".sn-price em").text();
			var sum_price = (Price * num).toFixed(2);

			$(this).parents(".td-amount").siblings(".td-sum").find(".sn-price em").text(sum_price);

			var str = JSON.stringify(obj);
			setCookie("cart", str, 7);
			sumAll();
		})
		//计算总价
		function sumAll() {
			var allSum = 0;
			$("#cart-body").find(".choose").each(function() {

				var perPrice = Number($(this).parents(".item-main").find(".td-price .price-line .price-now em").text());
				var perNum = Number($(this).parents(".item-main").find(".td-amount .item-amount .text-amount").val());
				var perSum = Number($(this).parents(".item-main").find(".td-sum .sn-price em").text());
				//				allSum += perSum;
				allSum += perPrice * perNum;
			})
			$("#pay").html(allSum.toFixed(2));
		}
	})
})