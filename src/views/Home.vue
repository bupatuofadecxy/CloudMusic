<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div>{{min}}</div>	
  <div>{{mini}}</div>
   <div>{{book}}</div>
  <button @click="changebook">修改</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'home',
  data() {
  	return{
  		title: 'aaa'
  	};
  },
  computed: {
  	min(){
  		return this.title + 'a'
  	},
  	mini() {
  		return '广东' +  this.$store.getters.area
  	},
  	
  	...mapState({
  		book: 'book' //'book' 映射到this.$store.state.book
  	})
  },
  methods: {
  	changebook(){
  		this.$store.commit('changess')
  	}
  }
}
</script>
