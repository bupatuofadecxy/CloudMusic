function setHTMLFont (designWidth) {
	
	var isHasStyle = document.getElementById('style');
	if(isHasStyle) {
		isHasStyle.remove();
	}
	
	console.log('rem')
	//手机端最大安全尺寸 640px
	var maxWidth = 640;
	var minWidth = 320;
	
	//获取html页面宽度
	var htmlWidth = document.documentElement.getBoundingClientRect().width;
	
	console.log('htmlWidth ==>', htmlWidth);
	
	var fontSize;
	
	if (htmlWidth > maxWidth) {
		//ipad， pc
		fontSize = 100;
	}else {
		//手机端
	designWidth = designWidth == undefined ? maxWidth : designWidth <= minWidth ?
	   minWidth : designWidth >= minWidth ? maxWidth : designWidth;
	    
	fontSize = designWidth / maxWidth * 100;  //1rem = 100px
	}
	   
	var style =  document.createElement('style');
	
	style.setAttribute('id', 'style');
	
	style.type = 'text/css';
	
	style.innerHTML = 'html{font-size:' +  fontSize + 'px !important}';
	
	document.getElementsByTagName('head')[0].appendChild(style);
	
	window.onresize = function () {
		setHTMLFont();
	}
	
}
//
export default setHTMLFont;
//
////// 基准大小
////const baseSize = 32
////// 设置 rem 函数
////function setRem() {
////// 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
////const scale = document.documentElement.clientWidth / 750
////// 设置页面根节点字体大小
////document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
////}
////// 初始化
////setRem()
////// 改变窗口大小时重新设置 rem
////window.onresize = function() {
////setRem()
//}
