<template>
	<div class="musicPlay">

		<!--头部-->

		<div class="top">
			<div class="packUp">
				<i class="iconfont icon-fanhui" @click="getDetails()"></i>
			</div>
			<p class="song-name"> {{name}}</p>
			<p class="singer"> {{id}}</p>
		</div>

		<!--中部-->

		<div class="middle">
			<div class="bigCircle" :style="{'animation-play-state':animationShow}">
				<div class="smallCircle">
					<img :src="pic" />
				</div>
			</div>
		</div>

		<!--底部-->

		<div class="bottom">
			<!--进度条-->
			<div class="prograssBar">
				<span class="timel">{{cTime}}</span>
				<span class="timer">{{duration}}</span>
			</div>

			<!--各种按钮操作-->
			<div class="operations">

				<div class="pattern">
					<i class="iconfont icon-liebiaoxunhuan"> </i>
				</div>
				<div class="last" @click="prev()">
					<i class="iconfont icon-xiayiqu-copy-copy"> </i>
				</div>
				<div class="play" @click="mplay()">
					<i class="iconfont icon-zanting1" v-show="play"></i>
					<i class="iconfont icon-bofang1" v-show="!play"></i>
				</div>
				<div class="next" @click="next()">
					<i class="iconfont icon-xiayiqu-copy
"> </i>
				</div>
				<div class="history">
					<i class="iconfont icon-bofangliebiao1"> </i>
				</div>
			</div>
			<audio ref="player" :src="url"  autoplay @canplay="getDuration" @timeupdate="updateTime"></audio>
		</div>

	</div>
</template>

<script>
	//	const url = "/api/netease/url?=" + this.id
	export default {
		name: 'MusicPlay',
		data() {
			return {
				id: this.$route.query.id,
				name: this.$route.query.name,
				index: this.$route.query.index,
				url: '/api/netease/url?id=' + this.$route.query.id,
				pic: '/api/netease/pic?id=' + this.$route.query.id,
				play: true,
				ltime: '00:00',
				rtime: '00:00',
				cTime: 　 '0:00',
				duration: '',
				minute: '',
				second: ''
			}
		},
		watch: {
			currentSong() {
				//监听正在播放的歌曲改变
				this.$nextTick(() => {
					this.$refs.player.play();
					console.log(this.$refs.player.duration) //此时的duration为NaN
				})
			}
		},
		created() {
			//			this.timeme()
		},
		mounted() {
			this.index = this.$route.query.index,
				console.log("歌曲下标" + this.index)
			this.id = this.$route.query.id,
				console.log(this.id)
			const url = '/api/netease/url?=' + this.id
			console.log(url)
			this.timeme()
			//          this.addEventListeners()
			//         this.cTime = this.ltime.timeupdate
			this.rTime = this.getDuration()
		},

		methods: {

			getDetails() {
				//路由跳转返回上一级
				this.$router.go(-1)
			},

			//音乐播放
			mplay() {

				this.play = !this.play //更改播放暂停按钮状态

				const music = this.$refs.player //音频所在对象

				if(this.play) {

					music.play() //播放音乐
					console.log("play")
					this.animationShow = "running"

				} else {

					music.pause() //暂停音乐
					console.log("pause")
					this.animationShow = "paused"
				}

			},

			//上一首
			prev() {
				    console.log("上一首")
			},

			//下一首
			next() {

					console.log("下一首" + this.nextIndex)
					this.nextIndex = this.currentIndex - 1

			},

					getDuration() {

						console.log(this.$refs.player.duration) //此时可以获取到duration
						this.duration = this.$refs.player.duration
						this.duration = this.duration | 0
						const minute = this.duration / 60 | 0
						const second = this.pad(this.duration % 60)
						this.duration = `${minute}:${second}`

					},

					updateTime() {

						this.currentTime = this.$refs.player.currentTime
						//				console.log("多多" + this.currentTime)
						this.currentTime = this.currentTime | 0
						const minute = this.currentTime / 60 | 0
						const second = this.pad(this.currentTime % 60)
						//          	console.log(minute)
						//          	console.log(second)
						this.cTime = `${minute}:${second}`
						//          	console.log(this.cTime)

					},

					timeme() {

						const ltime = this.$refs.player
						//			    this.ltime = this.currentTime
						//				console.log("ahha" +ltime.currentTime)
						//				ltime.currentTime
						ltime.addEventListener("timeupdate", function() { //当浏览器开始寻找指定的音频/视频时，会发生 loadstart 事件。即当加载过程开始时
							//					console.log("event timeupdate: " + ltime.currentTime );
						})

					},


					//转换时间戳为时间格式
					formate(interval) {
						//          	interval = ltime.currentTime/
						//              this.duration = interval
						interval = interval | 0 //向下取整 等于math.floor()
						const minute = interval / 60 | 0
						const second = this.pad(interval % 60)
						console.log(minute)
						return `${minute}:${second}`

					},

					//补0函数
					pad(num, n = 2) { //一位数补0筹两位数函数

						let len = num.toString().length //数字变字符串，得到位数个数
						while(len < n) { //当num 为一位数时，进入循环
							num = '0' + num
							len++ //跳出条件
						}
						return num

					},

			}
		}
</script>

<style lang="less" scoped>
  div{
    border: none;
  }
	.musicPlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.6;
	}

	.top {
		position: absolute;
		width: 100%;
		height: 1.33rem;
		/*border: 1px solid #E92E35;*/
	}

	.top .packUp {
		/*display: block;*/
		position: absolute;
		display: inline-flex;
		float: left;
		color: white;
		width: 1.33rem;
		height: 1.33rem;
		/*border: 1PX solid indianred;*/
		z-index: 5;
		.iconfont {
			display: block;
			padding: 0.27rem;
			font-size: 0.61rem;
			color: #f1f1f1;
		}
	}

	.song-name {
		width: 60%;
		margin: 0 auto;
		font-size: 0.4rem;
		font-weight: 700;
		line-height: 2;
		text-align: center;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #f1f1f1;
	}

	.singer {
		margin: 0 auto;
		width: 70%;
		font-size: 0.4rem;
		line-height: 0.53rem;
		text-align: center;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #f1f1f1;
	}

	.middle {
		position: relative;
		margin-top: 1.6rem;
		margin-bottom: 4.53rem;
		width: 100%;
		height: 12rem;
		/*border: 1PX solid goldenrod;*/
	}

	.middle .bigCircle {
		position: absolute;
		width: 8rem;
		height: 8rem;
		/*设置垂直居中*/
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		border-radius: 50%;
		background-color: #333333;
		z-index: -3;
		/*旋转*/
		animation: r 10s linear 0s infinite;
	}

	.bigCircle .smallCircle img {
		/*img{*/
		position: absolute;
		width: 6.67rem;
		height: 250PX;
		/*设置垂直居中*/
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		border-radius: 50%;
		/*background-image: url(../assets/01.jpg);*/
	}

	@keyframes r {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.bottom {
		position: absolute;
		width: 100%;
		height: 100PX;
		bottom: 50PX;
		/*border: 1px solid #E92E35;*/
	}

	.timel {
		position: absolute;
		width: 60PX;
		height: 50PX;
		color: #f7f8f8;
		font-size: 10PX;
		text-align:center;
		line-height: 4;
		/*border: 1PX solid red;*/
	}

	.timer {
		position: absolute;
		margin-left: 310PX;
		width: 60PX;
		height: 50PX;
		color:#f7f8f8;
		font-size: 10PX;
	    text-align:center;
		line-height: 4;
		/*border: 1PX solid red;*/
	}

	.bottom .prograssBar {
		position: relative;
		width: 100%;
		height: 50PX;
		border: 1PX solid darkolivegreen;
	}

	.operations {
		position: relative;
		width: 100%;
		height: 50PX;
		line-height: 1.25;
		text-align: center;
		border: 1PX solid #0000FF;
	}

	.pattern {
		position: absolute;
		width: 20%;
		height: 50PX;
		left: 0;
		border: 1PX solid red;
		.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #f1f1f1;
		}
	}

	.last {
		position: absolute;
		width: 20%;
		height: 50PX;
		margin-left: 75PX;
		border: 1PX solid green;
		.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #f1f1f1;
		}
	}

	.play {
		position: absolute;
		width: 20%;
		height: 50PX;
		margin-left: 150PX;
		border: 1PX solid darkorange;
		.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #f1f1f1;
		}
	}

	.next {
		position: absolute;
		width: 20%;
		height: 50PX;
		border: 1PX solid red;
		margin-left: 225PX;
		.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #f1f1f1;
		}
	}

	.history {
		position: absolute;
		width: 20%;
		height: 50PX;
		border: 1PX solid red;
		right: 0;
		.iconfont {
			display: block;
			padding: 10PX;
			font-size: 23PX;
			color: #f1f1f1;
		}
	}
</style>
