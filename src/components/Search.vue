<template>
	<div class="search">
		<div class="navigation">
			
			<div class="back" >
			    <i class="iconfont icon-fanhui" @click="goRecommend()"></i>
		    </div>
		    
			    <input type="text" ref="searchval"  @keyup="searchHandler" v-model="searchMessage" placeholder="搜索歌手、歌曲" class="search-box"></input>
			</div>
			
			<div v-for="(item, index) in songList" :key="index" class="bottom-box">
				<div class="bottom" v-for="(items, index) in item.songs" :key="index" @click="goToPlay(items)">
					<div class="mes">
         	            <div class="name">
                            {{items.name}}
		                </div>
		                <div class="singerMes" v-for="(singer, index) in items.ar" :key="index">
						    {{singer.name}}
					    </div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	
//	const url = "/api/netease/search"
	
	export default {
		name: 'Search',
		
		data() {
			
			return {
				name: '组件的首页',
				count: 10,
				searchMessage: '',
				songList: [],
				singerList:[],
				searchVal: ''
			};
			
		},	
		
		
		
		created() {
			
		},
		 
		methods: {
			
            goRecommend() {
            	
            	this.$router.go(-1)
            	
            },
            
            searchHandler() {
            	
	            var searchMessage = this.searchMessage
	            if(searchMessage) {
	            	this.searchVal = this.songList.filter(function(songList) {
	            		console.log(songList)
	            		return Object.keys(songList).some(function(key) {
					    console.log(key)
			  	        return String(songList[key]).toLowerCase().indexOf(searchMessage) > -1
			})
	            	})
	            }
            	
            	this.axios.get('/api/netease/search?keyword=' + this.searchMessage + '&type=song&pageSize=20&page=0').then(response => {
				this.songList.push(response.data.data)
				console.log(this.songList)
			}).catch (() => {
				console.log("err")
			});
			
//			this.axios.get('/api/netease/search?keyword=' + this.searchMessage + '&type=singer&pageSize=20&page=0').then(response => {
//				this.singerList.push(response.data.data)
//				console.log(this.singerList)
//			}).catch (() => {
//				console.log("err")
//			})
//			
            },
            
            goToPlay(items){
            	
            	this.$router.push({
            		path:'/musicPlay',
            		query: {
            			id: items.id,
                 		name: items.name,
            		}
            	})
            }
            
		},
		//通过计算属性的方式调用store的state
		//使用辅助函数 mapState生成计算属性
	}
</script>

<style lang="less" scoped>
	.navigation {
		position: relative;
		width: 100%;
		height: 1.2rem;
		background-color: #d43c33;
		display: inline-flex;
		float: left;
	}
	
	.back {
		width: 1.3rem;
		height: 1.07rem;
		text-align: center;
		line-height: 1.8;
		.iconfont {
			display: block;
			font-size: 0.61rem;
			color: #FFFFFF;
		}
	}
	
	input{
		width: 90%;
		border: none;
		border-bottom: 0.03rem solid #F7F8F8;
		background-color: #d43c33;
		color: #F7F8F8;
		font-size: 0.4rem;
		margin: 0.13rem 0.25rem 0.13rem 0;
	}
	
	input::-webkit-input-placeholder {
        color: #d8d8d8;
        font-size: 0.4rem;
    }
    input::-moz-placeholder {
        color: #d8d8d8;
        font-size: 0.4rem;
    }
    input:-ms-input-placeholder {
        color: #d8d8d8;
        font-size: 0.4rem;
    }
    input::-webkit-input-placeholder {
        color: #d8d8d8;
        font-size: 0.4rem;
    }
    
    .bottom-box{
    	position: absolute;
    	width: 98%;
    	margin-top: 1.2rem;
    	margin-left: 2%;
    }
    
    .bottom{
    	width: 100%;
    	height: 1.6rem;
	    border-bottom: 0.01rem solid #dad5d5;
    }
    
    .name{
    	width: 75%;
		height: 0.93rem;
		font-size: 0.43rem;
		color: #4e4545;
		line-height: 2.5;
		overflow: hidden;
    }
    
    .singerMes{
    	display: inline;
    	width: 75%;
		height: 0.67rem;
		font-size: 0.25rem;
		color: #A9A9A9;
		line-height: 1.5;
		overflow: hidden;
    }
</style>