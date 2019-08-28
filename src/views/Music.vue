<template>
	<div class="music">
		<div class="f1">热歌</div>
		<div class="f1">热门</div>
		<div class="f1">榜单</div>
		
		<!--控制条-->
	<div class="control">
		<!--左边盒子-->
		<div class="control-left">
			<img src="../assets/01.jpg"/>
		</div>
		<!--右边盒子-->
		<div class="control-right">
			<div class="progress">
				<div class="active-progress"></div>
			</div>
			<div>超喜欢你</div>
			<div>沈以诚</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name: 'music'
	}
</script>

<style lang="less" scoped>

.music{
	width: 200px;
	height: 200px;
	display: flex;
	float: left;
	border: 0.05rem solid red;
	background-color: #E92E35;
	font-size: 15px;
	.f1{
		width:  33.3333%;
	}
}

.control{
	width: 100%;
	height: 2rem;
	position: fixed;
	bottom: 0;
	left: 0;
	border: 0.05rem solid lightsalmon;
}

.control-left{
	width: 1.5rem;
	height: 1.5rem;
	/*垂直居中 使用绝对定位*/
	position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto 0;
    /**/
    margin-left: 0.25rem;
    border-radius: 50%;
	border: 0.05rem solid  green;
	animation: r 10s linear 0s infinite;
	img{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}
}

.control-right{
	width: calc(~"100% - 2.25rem");
	height: 100%;
	float: right;
	border: 0.05rem solid  red;
}
.progress{
	height: 0.08rem;
	margin-top: 0.25rem;
	background-color: #2C3E50;
	.active-progress{
		width: 30%;
		height: 0.08rem;
		background-image: linear-gradient(to right, #FC9B98 0%);
	}
}

/*旋转*/
@keyframes r{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}

</style>