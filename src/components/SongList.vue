<template>
	<div class="songList">

		<div class="top" v-for="item in list">
			<div class="topt">
				<div class="box">
					<img class="blur" :src="item.coverImgUrl" />
				</div>

				<div class="box2">
                <div class="prev" @click="prev">
                	<i class="iconfont icon-fanhui"></i>
                </div>
                <div class="nav">歌单</div>
				</div>

				<img class="miniImg" :src="item.coverImgUrl" />
				<div class="top-right">
					{{item.name}}
				</div>
				<div class="userMsg">
					<img class="userImg" :src="item.creator.avatarUrl"/>
					<div class="userName">{{item.creator.nickname}}</div>
				</div>
			</div>

			<!--歌单列表-->
			<div>
				<div class="allPlay">
         	        <i class="iconfont icon-zantingrizhi"></i>
         	    </div>
         	    <div class="grade">
			                        播放全部<span>(共{{item.tracks.length}}首)</span>
		        </div>
		        <div class="collection">
		        	<span>+</span>收藏({{item.subscribedCount}})
		        </div>
			</div>


			<div class="bottom">
				<div class="single-song" v-for="(items, index) in item.tracks" :key="index">
					<div class="number">
         	            <span>{{index+1}}</span>
         	        </div>
         	        <div class="mes">
         	            <div class="name">
                        {{items.name}}
		                </div>
				        <div class="singerMes" v-for="(singer, index) in items.artists" :key="index">
						{{singer.name}}
					    </div>
					</div>
					<p class="play" @click="goToPlay(items,index)" >|||</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>

	export default {
		name: 'SongList',

		data() {
			return {
				id: this.$route.query.id ,//接受父组件传递过来的id参数
                list:[],
			};
		},
        //请求接口
		created() {
			//生命周期里接收参数
			this.id = this.$route.query.id
			console.log(this.id)
				this.axios.get('/api/netease/songList', {
				params: {
					id:this.id,
				}
			}).then(res => {
				console.log(res.data)
				this.list.push(res.data.data)
				console.log(this.list)
				//vuex
				//所有歌单
//              this.$store.commit('getSongList', res.data.data.tracks)
//              console.log(this.$store.state.list)
//              localStorage.setItem('list', JSON.stringify(res.data.data.tracks))
//              this.$store.state.list = response.data.data.tracks
			}).catch(() => {
				console.log("err")
			})
	},
//	computed: {
//		getSongList() {
//			return this.$store.state.list
//		}
//	},

		methods: {
			//返回上一级
			prev(){
				this.$router.go(-1)
			},
			//跳转到播放页面
			goToPlay(items,index){
				this.$router.push({
					path:'/musicPlay',
				    query: {
				    	id: items.id,
				    	name: items.name,
				    	index: index,
				    }
				})
			}
		}
	}

</script>

<style lang="less" scoped>
	.top {
		position: relative;
		width: 100%;
		/*width: 373PX;*/
		height: 6.67rem;
		/*border: 1PX solid green;*/
	}

	.topt {
		position: relative;
		width: 100%;
		/*width: 373PX;*/
		height: 6.67rem;
		/*border: 1PX solid red;*/
	}
	/*头部的嵌套图片的盒子*/
	.topt .box {
		position: absolute;
		z-index: -2;
		width: 100%;
		height: 6.67rem;
		background-color: #494949;
		overflow: hidden;
		background-size: 100% 100%;
		align-content: center;
		background-size: contain;
	}
	/*盒子里的图片*/
	.blur {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-size: cover;
		overflow: hidden;
		-webkit-filter: blur(0.21rem);
		-webkit-filter: blur(0.21rem);
		-moz-filter: blur(0.21rem);
		-o-filter: blur(0.21rem);
		-ms-filter: blur(0.21rem);
		filter: blur(0.21rem);
	}
	.miniImg{
		   width: 2.77rem;
		   height: 2.77rem;
		}
	/*头部的返回图标*/
	.box2{
		display: inline-flex;
	}
	.prev{
		position: relative;
		color: #FEFEFE;
		width: 1.33rem;
		height: 1.07rem;
		text-align: center;
		line-height: 1.5;
		/*border: 1PX solid red;*/
		.iconfont {
			display: block;
			font-size: 0.61rem;
			color: #FFFFFF;
		}
	}
	.nav{
		position: relative;
		width: 1.33rem;
		height: 1.07rem;
		line-height: 2;
		font-size: 0.53rem;
		color: #FEFEFE;
		text-align: center;
		/*border: 1PX solid red;*/
	}
	/*头部小图小图*/
	.miniImg {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 0.4rem;
	}
	/*小图旁边的文字*/
	.top-right{
		display: block;
        float: right;
		width: 65%;
		margin-top: 1.87rem;
		font-size: 0.53rem;
		font-family: "微软雅黑";
		color: #fefefe;
	}
	/*小图旁边的用户信息*/
	.userMsg{
		/*border: 1PX solid red;*/
		display: inline-flex;
        float: right;
		width: 65%;
		height: 1.33rem;
		margin-top: 0.4rem;
	}
	.userMsg .userImg{
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
	}
	.userMsg .userName{
		display: inline-flex;
		float: right;
		margin-left: 0.27rem;
		margin-top: 0.13rem;
		color: rgba(255,255,255,07);
	}

	/*底部部分*/
	.allPlay{
	   width: 15%;
	   height: 1.33rem;
	   /*border: 1PX solid red;*/
	   .iconfont {
			display: block;
			padding: 0.29rem 0.4rem;
			font-size: 0.67rem;
			/*color: #f1f1f1;*/
		}
	}

	.grade{
		margin-top: -1.33rem;
		margin-left: 15%;
		/*border: 1PX solid red;*/
		width: 50%;
		height: 1.33rem;
		font-size: 0.48rem;
		/*font-weight: bold;*/
		color: #333;
		line-height: 2.6;
		font-family: "blackadder itc";
		span{
			font-size: 0.43rem;
			color: #A9A9A9;
		}
	}
	.collection{
		margin-top: -1.33rem;
		margin-left: 65%;
		width: 35%;
	    height: 1.33rem;
		font-size: 0.43rem;
	    color: #F7F8F8;
	    line-height: 3;
	    text-align: center;
	    background: red;
		/*border: 1PX solid red;*/
		span{
			padding-right: 0.13rem;
		}
	}

	/*歌曲列表部分*/
	.bottom {
		/*margin-top: 50PX;*/
		/*border: 1PX solid red;*/
		border-top: 0.01rem solid #d2d2d2;
	}
	.bottom .single-song {
		width: 100%;
		height: 1.6rem;
		/*border: 1PX solid burlywood;*/
		font-size: 0.4rem;
		color: #333333;
		.singerMes {
			font-size: 0.27rem;
			color: #888;
		}
	}
	/*编号*/
	.bottom .number{
	width: 15%;
	height: 1.6rem;
	font-size: 0.48rem;
	color: #808080;
	text-align: center;
	line-height: 3;
	/*border: 1PX solid royalblue;*/
}
    .bottom  .mes{
    	margin-top: -1.6rem;
    	margin-left: 15%;
    	width: 85%;
    	height: 1.6rem;
	    border-bottom:  0.5PX solid  #d2d2d2;
	   /*border: 1PX solid  red;*/
    }
    .bottom .name{
    	/*margin-left: 15%;*/
    	width: 75%;
		height: 35PX;
		font-size: 16PX;
		color: #000000;
		line-height: 2.5;
		/*border:1PX solid red;*/
		overflow: hidden;
    }

    .bottom .singerMes{
    	/*margin-left: 15%;*/
    	width:75%;
		height: 0.67rem;
		/*border:1PX solid red;*/
		font-size: 0.27rem;
		color: #A9A9A9;
		overflow: hidden;
    }

	.bottom .play{
		float: right;
		margin-top: -0.67rem;
		margin-right: 0.4rem;
	}
	/*.bottom .single-song .singerMes{
	width: 100%;
	border: 1PX solid red;
}*/
	/*.box{
	width: 200PX;
	height: 200PX;
	border: 1px  solid red;
}
.box2{
	position: absolute;
	width: 200PX;
	height: 200PX;
	border: 1px  solid green;
}*/
// .play{
//   padding-bottom: 10px;
// }
</style>
