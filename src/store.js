import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//状态（模型）
  state: {
  	//当前歌单列表
       songList: [],
       
       //当前歌曲
       currentSong: {},
       
       //播放状态
       play: true,
       
       //当前歌曲索引
       currentIndex: ''
  },
  //vuex的计算属性，类似组价的computed
  getters:{
  	//一定要携带参数
  	
  },
  //类似于组件的methods
  mutations: {
  	
    //修改state的list
    getSongList(state, list) {
    	state.songList =  list;
    },
    
    //获取当前歌曲
    getCurrentSong(state, items) {
    	state.currentSong = items;
    }
    
  },
  actions: {

  }
})
