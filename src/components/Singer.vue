<template>
	<div class="singer">
			<!--v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名
			    v-for 还支持一个可选的第二个参数为当前项的索引
			-->
			 	<div v-for="(item, index) in singers[0]" :key="index" class="tabs"
			 		@click="switchover(item)">
			 		<!--id是动态值 通过item挂载到sid上-->
			 		<!--<div id="tab-list">-->
			 			<div class="singerImg">
			 			 	<img :src="item.img1v1Url" style="width: 1.33rem; height: 1.33rem;"/>
			 			</div>

			 			<div class="singerName">
			 			    <p class="singer-name">{{item.name}}</p>
			 			</div>
			 		<!--</div>-->
			 	</div>
		<!--</div>-->

	</div>
</template>

<script>
//	import BScroll from 'better-scroll'
//  let wrapper = document.querySelector('.wrapper')
//  let scroll = new BScroll(wrapper)
	//定义网址
	const url= "/api/netease/artist/top?page=0&pageSize=30"
//	const HOT_SINGER_LIST = 10
//	const HOT_NAME = '热门'
	export default{
		name: 'Singer',
		data() {
			return {
				singers: []
			}
		},
		components: {

		},

		//生命周期
		created() {
//			var singers = JSON.stringify(code)
			this.axios.get(url).then(response => {
				this.singers.push(response.data.data)
				console.log(this.singers)
			}).catch (() => {
				console.log("err")
			})
		},

		mounted() {

	},
		methods: {
			//歌手详情信息
            switchover(item) {
                 //this.$touter.push('要跳转的路径名') 路由跳转
//               this.$router.push(path)
                 this.$router.push({
                 	path: '/particulars',
                 	query: {
                 		id : item.id,
                 		name: item.name,
                 	}
                 }
                 )
            }
   }
}
</script>

<style lang="less" scoped>
.tabs{
	display: flex;
	float: left;
	margin: 0 auto;
	// position: relative;
	width: 100%;
	height: 1.6rem;
	/*border: 1PX solid black;*/
}

.singerImg{
	position: relative;
	width: 15%;
	height: 1.6rem;
	/*border: 1PX solid red;*/
	img{
		position: absolute;
		margin-top: 0.13rem;
		margin-left: 0.07rem;
		border-radius: 10%;
	}
}

.singerName{
	position: relative;
	width: 85%;
	height: 1.6rem;
	border-bottom: 0.01rem solid #dad5d5;
	.singer-name{
		position: absolute;
		width: 80%;
		height: 0.53rem;
		/*border: 1PX solid goldenrod;*/
		font-size: 0.45rem;
		top: 0.53rem;
		left: 0.13rem;
	}
}

</style>
