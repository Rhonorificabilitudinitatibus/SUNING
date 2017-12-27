$(function() {
	$(".main-2-2-1 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".main-2-2-1 input").blur(function() {
		$(this).attr({
			placeholder: "请输入手机号！"
		})
	})

	$(".main-3-1 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".main-3-1 input").blur(function() {
		$(this).attr({
			placeholder: "请输入手机号！"
		})
	})
	$(".main-4-1 input").focus(function() {
		$(this).attr({
			placeholder: ""
		})
	})
	$(".main-4-1 input").blur(function() {
		$(this).attr({
			placeholder: "请输入手机号！"
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

	$(".main-6 a").click(function() {
		var Main1 = $(".main-2-2-1 input").val()
		var Main2 = $(".main-3-2 input:nth-child(1)").val()
		var Main3 = $(".main-3-2 input:nth-child(2)").val()
		var Main4 = $(".main-4-1 input").val()
		var Main5 = $(".main-5 input")
		//		var Main5=$(".main-5 input[type='checkbox']").attr('checked')=="checked")

		var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9]|16[0-9]|19[0-9])\d{8}$/

		if(Main1 == "") {

			$(".main-2-2-2").html("请输入注册手机！")
		} else {
			if(!reg.test(Main1)) {
				$(".main-2-2-2").html("格式不正确，请您输入正确的手机号。")
			} else {
				if(Main2 == "") {
					$(".main-2-2-2").hide()
					$(".main-3-k").html("请输入手机验证码！")
				} else {
					if(Main2 != Main3) {
						$(".main-2-2-2").hide()
						$(".main-3-k").html("手机验证码错误或已失效，请重新输入")
					} else {
						if(Main4 == "") {
							$(".main-2-2-2").hide()
							$(".main-3-k").hide();
							$(".main-k-4").html("请输入不小于6位数的密码")
						} else {
							if(Main4 >= 6) {
								$(".main-2-2-2").hide()
								$(".main-3-k").hide();
								$(".main-k-4").hide();
								if(!Main5.prop("checked")) {
									$(".main-2-2-2").hide()
									$(".main-3-k").hide();
									$(".main-k-4").hide();
									$(".main-5-k").html("您必须同意苏宁服务条款后，才能提交注册")
									console.log(Main5.prop("checked"))
									console.log(Main5)
								} else {
									$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php", {
										status: "register",
										userID: $(".main-2-2-1 input").val(),
										password: $(".main-4-1 input").val()
									}, function(data) {
										console.log(data);
										if(data == 0) {
											alert("该用户名已存在！");
										}
										if(data == 1) {
											prompt("恭喜，注册成功，即将跳转到登录页！");
											location.href = "login.html";
										}
										if(data == 2) {
											alert("服务器繁忙，请稍后再试！");
										}
									})
								}

							}
						}

					}
				}
			}

		}

	})

})