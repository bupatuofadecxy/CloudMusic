<template>
	<div class="lyric">
		{{lyrics}}
	</div>
</template>

<script>
	const url = "/api/netease/lrc?id=1341188360"
	export default{
		name: 'Lyric',
		data() {
			return{
				lyrics: url
			}
		},
		created(){
			this.axios.get(url).then(res => {
				this.lyrics.push(res.data.data)
				console.log(this.lyrics)
			}).catch(() =>{
				console.log("err")
			})
		}
	}
</script>

<style lang="less" scoped>
</style>