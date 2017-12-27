$(function() {

	//短信登录 与账号登录的切换
	$(".nav-3 .nav-g-3 .nav-3-3 a:nth-child(1) span").click(function() {
		console.log(1)
		$(".nav-g-3").hide()
		$(".nav-m-3").show()
	})
	$(".nav-3 .nav-m-3 .nav-3-3 a:nth-child(1) span").click(function() {
		console.log(1)
		$(".nav-g-3").show()
		$(".nav-m-3").hide()
	})

	//扫码登录与账号登录切换
	$(".nav-1 .nav-2 a:nth-child(1)").click(function() {
		$(this).css({
			"border-bottom": "3px solid #ff6600",
			"color": "#ff6600"
		})
		$(".nav-1 a:nth-child(3)").css({
			"border-bottom": "",
			"color": ""
		})

		$(".nav-3").hide()
		$(".g-qie3").show()
	})
	$(".nav-1 .nav-2 a:nth-child(3)").click(function() {
		$(this).css({
			"border-bottom": "3px solid #ff6600",
			"color": "#ff6600"
		})
		$(".nav-1 a:nth-child(1)").css({
			"border-bottom": "",
			"color": ""
		})

		$(".nav-3").show()
		$(".g-qie3").hide()
	})
	$(".g-qie3 .g-qie3-1").hover(function() {
		$(this).animate({
			"left": "30px"
		}, 100, function() {
			$(".g-qie3-m").show();
		})

	}, function() {
		$(this).animate({
			"left": "100"
		}, 500)
		$(".g-qie3-m").hide();
	})
	$(".nav-3-1 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".nav-3-1 input").blur(function() {
		$(this).attr({
			placeholder: "用户名/手机/邮箱/门店会员卡号"
		})
	})
	$(".nav-3-2 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".nav-3-2 input").blur(function() {
		$(this).attr({
			placeholder: "密码"
		})
	})

	$(".nav-m-3 .nav-3-1 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".nav-m-3  .nav-3-1 input").blur(function() {
		$(this).attr({
			placeholder: "手机号码"
		})
	})
	$(".nav-m-3 .nav-3-2 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".nav-m-3  .nav-3-2 input").blur(function() {
		$(this).attr({
			placeholder: "获取验证码"
		})
	})

	//随机生成验证

	function change() {
		code = $("#verification");

		var arrays = new Array(
			'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
			'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
			'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z'
		);
		codes = ""; //重新初始化验证码
		for(var i = 0; i < 4; i++) {
			//随机获取一个数组的下标
			var r = parseInt(Math.random() * arrays.length);
			codes += arrays[r];
		}
		code.val(codes);
	}
	change();
	code.click(change)

	//验证账号
	$(".nav-3-4 a").click(function() {
		var iYonghu = /^[a-z0-9_-]{3,16}$/;

		var nav1Val = $(".nav-g-3 .nav-3-1 input").val();
		var nav2Val = $(".nav-g-3 .nav-3-2 input").val();
		var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9]|16[0-9]|19[0-9])\d{8}$/

		var navM1Val = $(".nav-m-3 .nav-3-1 input").val();
		var navM2Val = $(".nav-m-3 .nav-3-2 input:nth-child(1)").val();
		var navM3Val = $(".nav-m-3 .nav-3-2 input:nth-child(3)").val();
		//
		if(nav1Val == "") {
			$(".nav-k1").show();
			$(".nav-k1").html("请输入用户名/邮箱/手机号！")
		} else {
			if(nav2Val == "") {
				$(".nav-k1").show();

				$(".nav-k1").html("请输入6-20位密码！");

			} else {
				if(nav2Val.length >= 6) {
					if(!iYonghu.test(nav1Val)) {
						$(".nav-k1").show();
						$(".nav-k1").html("该账户名不存在，忘记账户名或注册新账号?")
					} else {
						$(".nav-k1").hide();
						$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php", {
							status: "login",
							userID: $(".nav-3-1 input").val(),
							password: $(".nav-3-2 input").val()
						}, function(data) {
							if(data == 0) {
								alert("该用户名不存在！");
							}
							if(data == 2) {
								alert("用户名和密码不匹配！")
							} else {
								console.log(data);
								console.log(data[1])
								var Name = data[1];
								location.href = "index.html?username=" + data[1];
								var UN = {};
								UN.name = Name;
								console.log(UN);
								var str = JSON.stringify(UN);
								setCookie("UN", str);
							}
						})
					}
				}
			}
		}

	})
})