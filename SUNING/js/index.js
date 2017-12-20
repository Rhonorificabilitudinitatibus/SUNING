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
})