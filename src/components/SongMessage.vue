<template>
	<div class="songMessage">
		歌手信息
		<div class="mes" v-for="(item, index) in list" :key="index">
			<p class="title">薛之谦简介</p>
		    <p>{{item.briefDesc}}</p>
		    <div v-for="(items, index) in item.introduction" :key="index">
		    	<p class="title">{{items.ti}}</p>
		    	<p>{{items.txt}}</p>
		    </div>
		    <div class="articles">
		    	<p class="title"></p>
		    </div>
		</div>
	</div>
</template>

<script>
	const url = "/api/netease/artist/info?id=5781"
	export default{
		name: 'SongMessage',
		data() {
			return{
				list: []
			};
		},
		created (){
	        this.axios.get(url).then(res => {
	        	console.log(res.data)
	        	this.list.push(res.data.data)
	        	console.log(this.list)
	        }).catch(() =>{
	        	console.log("err")
	        })
		}
	}
</script>

<style lang="less" scoped>
.title{
	color: red;
	font-size: 0.4rem;
}
</style>
