<template>
	<div id="main">
		<!--使用vant的narbar效果不太理想-->
		<div class="navigation">
		    <router-link to="" class="mine">
		        <i class="iconfont icon--caidan"></i>
		    </router-link>
		    <router-link to="" class="search">
		        <i class="iconfont icon-sousuo"></i>
		    </router-link>
		</div>
		
		<div class="multiterm">
		    <router-link to="" class="tabs">
			    <span>推荐</span>
		    </router-link>
		    <router-link to="" class="tabs">
			    <span>榜单</span>
		    </router-link>
		    <router-link to="" class="tabs">
			    <span>歌手</span>
		    </router-link>
		</div>
		
	</div>
</template>

<script>

	export default{
		name: 'Main',
		data() {
			return{
				
			};
		},
		components: {
	
			
		}
	}
</script>

<style lang="less" scoped>

.navigation{
	width: 100%;
	height: 45PX;
	background-color: #d43c33;
	}
.mine{
		position: absolute;
        left: 0;
        .iconfont{
        	display: block;
        	padding: 9PX;
        	font-size: 25PX;
        	color: #f1f1f1;
        	/*display: block;
        padding: 11px;
        font-size: 22px;
        color: $color-theme-l;*/
        }
	}
.search{
		position: absolute;
	    right: 0;
	    .iconfont{
	    	display: block;
            padding: 10PX;
            font-size:23PX;
            color: #f1f1f1;
 	    }
	}
.router-link-active {
  text-decoration: none;
}	
.multiterm{
	display: flex;
	width: 375PX;
	height: 45PX;
	background-color: #d43c33;
	font-size: 15PX;
    .tabs{
    	flex: 1;
    	/*等分剩余空间*/
    	text-align: center;
    	line-height: 45PX;
    	color:#000000;
      .span{
         /*内联块*/
        display: inline-block;
        padding-bottom: 2PX;
    }
   } 
}    
</style>