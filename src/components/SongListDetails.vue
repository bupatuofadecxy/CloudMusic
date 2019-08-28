<template>
	<div class="songListDetails">
		<!--绑定一个点击事件 跳转到播放页面-->
		<h1>0000</h1>
		<div v-for="(item, index) in list[0]" :key="item.id" @click="getPlays(item.id, item.song, item.name)">
			<div>
				{{item.name}} 
				<p>{{item.song.artists[0].name}} {{item.song.artists[0].id}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	//导入url
//	const url ="/api/netease/song/newest"
	export default{
		name: 'SongListDetails',
		data() {
			return {
				list: [],
				song: []
			}
		},
		componetns: {
			
		},
		//获取对象并序列化成一个数组
		created(){
			this.axios.get(url).then(response => {
				this.list.push(response.data.data)
				console.log(this.list)
//				this.song.push(response.data.data)
//				console.log(this.song)
			})
		},
		
	    //编写一个方法实现点击触发路由跳转
		methods: {
			getPlays(id, song, name){
				// 方法一： 直接使用$touter.push实现路由携带参数跳转 
				//方法二： 通过路由属性中的name来确定匹配的路由，通过params来传递参数
				this.$router.push({
//					"/MusicPlay/${id}"
                    name: 'MusicPlay',
                    params: {
                    	id: id,
                    	name: name,
                    	song: song,
                    }
//					path: '/MusicPlay/${id}'
				})
			},
		},
		
	}
</script>

<style lang="less" scoped>
</style>