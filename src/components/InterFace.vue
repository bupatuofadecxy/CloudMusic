<template>
	<div class="interface">

		<!--头部导航条-->
		<div class="navigation">
			<router-link to="" class="mine">
				<i class="iconfont icon--caidan"></i>
			</router-link>
			<router-link to="/search" class="search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
		</div>

        <!--tab-->
        <van-tabbar class="tab" route fixed  v-model="active" active-color="#ffffff"  inactive-color="#d6dce6" >
            <van-tabbar-item replace to="/newRecommend"  >
                               推荐
            </van-tabbar-item>
            <van-tabbar-item replace   to="/top"  >
                               榜单
            </van-tabbar-item>
            <van-tabbar-item replace   to="/singer"   >
                                歌手
            </van-tabbar-item>
        </van-tabbar>


            <!--路由-->
            <div class="routerBox">
              <router-view></router-view>
            </div>

	</div>
</template>

<script>
	import { Swipe, SwipeItem, Row, Col, Icon, Tabs, Tab, Tabbar, TabbarItem} from 'vant';
	const url = "/api/netease/banner"

	export default {

		name: 'InterFace',

		data() {
			return {
         active: 0,
			};
		},

		components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Row.name]: Row,
			[Col.name]: Col,
			[Icon.name]: Icon,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem,
		},

		created() {

		},

		methods: {

		},

	}
</script>

<style lang="less" scoped>
	/*头部*/
	.navigation {
		width: 100%;
		height: 1.2rem;
		background-color: #d43c33;
	}

	.mine {
		position: absolute;
		left: 0;
		.iconfont {
			display: block;
			padding: 0.25rem;
			font-size: 0.67rem;
			color: #f1f1f1;
			/*display: block;
        padding: 11px;
        font-size: 22px;
        color: $color-theme-l;*/
		}
	}

	.search {
		position: absolute;
		right: 0;
		.iconfont {
			display: block;
			padding: 0.3rem 0.25rem;
			font-size: 0.61rem;
			color: #f1f1f1;
		}
	}

	.router-link-active {
		text-decoration: none;
	}

	/*tab*/
.tab {
	position: absolute;
	top:1.2rem;
	background-color: #d43c33;
 }

	.banner-box{
		width: 10rem;
		height: 4rem;
		overflow: hidden;
	}
	.banner-box img {
		width: 10rem;
		height: 4rem;
		float: left;
	}
	/*box*/
	.box{
		width: 100%;
		height: 1.33rem;
		border-bottom: 0.03PX solid darkgray;
	}
	/*歌单样式*/
	.songlist{
		width: 375PX;
	}
	.van-col{
	// position: relative;
	height: 104PX;
	width: 104px;
	margin-top: 15PX;
}
.van-box{
	margin-left: 16PX;
	margin-bottom: 60PX;
}
.rem-title{
	width: 20PX;
	height: 50PX;
}

.routerBox{
	margin-top: 1.33rem;
	// padding: 50px;
}
</style>
