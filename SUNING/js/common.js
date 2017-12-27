//这是cookie部分
function setCookie(name, value, day) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + oDate;

}

function getCookie(name) {
	var strCookie = document.cookie;
	//需要对字符串进行分割（;）
	var arrCookie = strCookie.split("; ");
	//console.log(arrCookie);
	for(var i = 0; i < arrCookie.length; i++) {
		//把数组中的每一项以=分割，判断形参和分割后的数组中的第一元素是否相等，相等则返回第二个元素
		var arr = arrCookie[i].split("=");
		if(arr[0] == name) {
			return arr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);

}
//封装拖拽
function drag(dragObj){
	dragObj.onmousedown = function(e){
		var evt = e || event;
		var m_left = evt.offsetX;
		var m_top = evt.offsetY;
		document.onmousemove = function(e){
			var evt = e || event;
			var x = evt.clientX - m_left;
			var y = evt.clientY - m_top;
			if(x<0){
				x=0;
			}
			if(y<0){
				y=0;
			}
			if(x>document.documentElement.clientWidth-dragObj.offsetWidth){
				x=document.documentElement.clientWidth-dragObj.offsetWidth;
			}
			if(y>document.documentElement.clientHeight-dragObj.offsetHeight){
				y=document.documentElement.clientHeight-dragObj.offsetHeight;
			}
			dragObj.style.left = x + "px";
			dragObj.style.top = y + "px";
			return false;
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}
//获取样式
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

//date
function times(date){
		var date = new Date;
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var mill = date.getMilliseconds();
		var time = year+'/'+month+'/'+day+'日'+hours+':'+minutes+':'+seconds+'秒';
		return time;
}
