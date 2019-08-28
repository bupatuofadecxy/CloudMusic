<template>
	<div class="newRecommend">

	    <!--vant 轮播图-->
	    <div class="boxImg">
		    <van-swipe :autoplay="3000" indicator-color="white" class="banner-box">
			    <van-swipe-item v-for="(item, index) in images[0]" :key="index">
				    <img :src="item.picUrl" />
			    </van-swipe-item>
		    </van-swipe>
        </div>

	    <!--推荐歌单-->
	    <div class="songSheet">
	    	<div class="title">推荐歌单 <span> <i class="iconfont icon-return-copy"></i>  </span></div>

	        <van-row >
		        <van-col span="8" class="box" v-for="(item, index) in list[0]" :key="index"
		  	    @click.native="getSongList(item)">
		  		    <img :src="item.coverImgUrl" />
		  		    <p>{{item.name}}</p>
		        </van-col>
		    </van-row>

	    </div>

	</div>
</template>

<script>
	//导入url
	const url = "/api/netease/songList/hot?cat=%E5%85%A8%E9%83%A8&pageSize=6&page=0"
	//导入组件
	import { Row, Col, Icon, Tabs, Tab, Swipe, SwipeItem  } from 'vant';
    //复用组件使用export导出 用import导入
	export default{
		//组件名称
		name: 'NewRecommned',
		//data必须是一个函数
		data() {
			return{
				//需要传递的参数
				list: [],
				images: [],
			};
		},
		//引入的vant组件
		components: {
			[Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
		},

		created() {
			this.axios.get(url).then(response => {
				this.list.push(response.data.data)
				console.log(this.list)
			}).catch (() => {
				console.log("err")
			}),

			this.axios.get('/api/netease/banner').then(res => {
					this.images.push(res.data.data)
					console.log(this.images)
				}).catch(() => {
					console.log("err")
				})
		},

		mounted() {
		},

		methods: {
            //歌单详情信息
            //路由跳转传参数 把id传过去\
            getSongList(item){
            	//query相当于ajax中的get传参，在浏览器地址栏中显示参数
            	//params则类似于post，在浏览器地址栏中不显示参数
            	this.$router.push({
            		path :'/songList',
//                  path: '/vuexTest',
            		query:{
            			id : item.id
            		}
            	})
            },

        }
	}
</script>

<style lang="less" scoped>
.van-col{
	// position: relative;
	height: 2.77rem;
	width: 2.77rem;
}
/*轮播*/
.boxImg{
	// margin: 0 5%;
	width: 100%;
	height: 4rem;
	background-color: #d43c33;
}

.banner-box{
	margin-left: 5%;
  width: 90%;
	height: 4rem;
	overflow: hidden;
}
	.banner-box img {
		width: 10rem;
		height: 4rem;
		float: left;
	}

.box{
	margin-left: 0.43rem;
	margin-bottom: 1.6rem;
	p{
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
	}
}

.songSheet{
    border-top:0.03rem solid #808080;
}

.songSheet .title{
    width: 90%;
    height: 1.33rem;
    font-size: 0.48rem;
    font-weight: bold;
    line-height: 2.5;
    margin-left: 0.43rem;
       span{
       	// margin-left: 0.13rem;
       	font-size: 0.61rem;
       	color: #888;
       }
}
img{
	width: 2.77rem;
	height: 2.77rem;
}

</style>
