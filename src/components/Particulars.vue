<template>
	<div class="particulars">
		
		<div class="box" @click="back()">
		    <img class="photo" src="https://p2.music.126.net/t57DhLvsHGjCsJo46rgowQ==/109951164048587316.jpg" />
		    <!--<img class="photo" :src="item.img1v1Url"/>-->
		    <div class="topIco">
		    	<i class="iconfont icon-fanhui"></i>
		    </div>
		    <div class="singerName">
		    	<div class="theName">
		    		{{name}}
		    	</div>
		    </div>
        </div>
         
         <div class="bottom">
         <!--<div class="type">
         	<div class="hot">热门{{item.length}}</div>
         	<div class="hot">热门{{item.length}}</div>
         	<div class="hot">热门{{item.length}}</div>
         	<div class="hot">热门{{item.length}}</div>
         </div>-->
         <div class="songs" v-for="(item, index) in  songList[0]" :key="index" @click="goToPlay(item,index)">

         	<div class="number">
         	    <span>{{index+1}}</span>
         	</div>
         	<div class="songMes">
         		<div class="songName">
         	        {{item.name}}	
         		</div>
         		<div class="name-Album">
                    {{name}}-{{item.al.name}}
		        </div>
		        <div class="play">
		    	    <i class="iconfont icon-zhongxinshipin"></i>
		        </div>
         	</div>
         </div>
          
        </div>   
	</div>
</template>

<script>
	
// const url = "https://v1.itooi.cn/netease/song/artist?id=9808"
	const url= "/api/netease/song/artist"
	
	export default{
		name: 'Particulars',
		data() {
			return{
				id :this.$route.query.id,
				name: this.$route.query.name,
				//当前歌手信息
                songList: []
			}
		},
		components: {
			
		},
		created() {
			//this.$route.params传参
			this.id = this.$route.query.id
			console.log(this.id)
			this.name = this.$route.query.name
			console.log(this.name)
            //使用JSON.parse反序列化字符串为一个普通对象
            //localStorage.getItem()获取本地存储
            //var songs = JSON.parse(localStorage.getItem('singers'))
            this.axios.get(url,{
            	params:{
            		id:this.id,
            		name: this.name
            	}
            }).then(res => {
//          	console.log(res.data)
            	this.songList.push(res.data.data)
            	console.log(this.songList)
            }).catch(()=>{
            	console.log("err")
            })
		},
		
		methods: {
			
			//返回上一级
			back() {
				this.$router.go(-1)
			},
			
			//跳转到播放页面
			goToPlay(item,index){
				this.$router.push({
					path:'/musicPlay',
				    query: {
				    	id: item.id,
				    	name: item.name,
				    	index: index,
				    }
				})
			}
			
		}
	}
</script>

<style lang="less" scoped>

.box{
	position: relative;
}

.photo{
	position: absolute;
	width: 100%;
	height: 320PX;
	z-index: -1;
}

.navBox{
	position: relative;
	width: 100%;
	height: 50PX;
	/*border:  1PX solid red;*/
}

.topIco{
	width: 15%;
	height: 50PX;
	/*border:  1PX solid red;*/
	.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #FFFFFF;
			margin-left: 5PX;
		}
}

.singerName{
	position: absolute;
	width: 80%;
	height: 50PX;
	margin-top: -52PX;
	margin-left: 15%;
	font-size: 17PX;
	color: #FFFFFF;
	/*border: 1PX solid  red;*/
	.theName{
		position: absolute;
		width: 80%;
		height: 20PX;
		/*border: 1PX solid goldenrod;*/
		font-size: 20PX;
		top: 10PX;
	}
}

.bottom{
	/*position: absolute;*/
	width: 100%;
	margin-top: 230PX;
	background-color: #FFFFFF;
}
/*.bottom .type{
	display: inline-flex;
	position: relative;
	float: left;
    height: 50PX;
}*/

.bottom .songs{
    /*display: block;*/
    /*position: relative;*/
    width: 100%;
    height: 60PX;
    /*border: 1PX solid goldenrod;*/
    /*font-size: 15PX;*/
	/*color: #333333;*/
}

.bottom .number{
	width: 15%;
	height: 60PX;
	font-size: 18PX;
	color: #808080;
	text-align: center;
	line-height: 3;
	/*border: 1PX solid royalblue;*/
}

.bottom .songMes{
	width: 85%;
	height: 60PX;
	margin-top: -62PX;
	margin-left: 15%;
	border-bottom:  0.5PX solid  #d2d2d2;
	.songName{
		width: 75%;
		height: 35PX;
		font-size: 16PX;
		color: #000000;
		line-height: 2.5;
		/*border:1PX solid red;*/
		overflow: hidden;
	}
	.name-Album{
		width:75%;
		height: 25PX;
		/*border:1PX solid red;*/
		font-size: 10PX;
		color: #A9A9A9;
		overflow: hidden;
	} 
}

.play{
	width: 15%;
	height: 60PX;
	margin-top: -60PX;
	margin-left: 85%;
	line-height: 1.8;
    .iconfont{
		display: block;
	    padding: 10PX;
	    font-size: 23PX;
	    color: #000000;
	    margin-left: 5PX;
	}
}

</style>