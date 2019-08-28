import routesComponent from './routesComponent.js'
//路由配置
export default [
{
	path: '/main',
	name: 'Main',
	component: routesComponent.Main
 },
//	children: [
//	  {
//	       path: '/newRecommend',
//	      name: 'NewRecommend',
//	      component: routesComponent.NewRecommend
//	        },
//	      {
//	        path: '/testTow',
//	        name: 'TestTow',
//	        component: routesComponent.TestTow
//    },
//
//	   {
//	        path: '/test',
//	        name: 'Test',
//	        component: routesComponent.Test
//    },
//
//     //重定向
//     {
//     	path: '/',
//     	redirect : {name: 'NewRecommend'}
//     },
//	]
// },
//{
//	path: '/test',
//	name: 'Test',
//	component: routesComponent.Test
//},
  {
	path: '/',
	name: 'InterFace',
	component: routesComponent.InterFace ,

	children: [
	   {
	        path: '/newRecommend',
	        name: 'NewRecommend',
	        component: routesComponent.NewRecommend
        },
        {
           path: '/top',
           name: 'Top',
           component: routesComponent.Top
         },
        {
	        path: '/singer',
	        name: 'Singer',
	        component: routesComponent.Singer
         },
        // {
        //   path: '*',
        //   redirect: {name:'NewRecommend'}
        //  }
	]
  },
//{
//	path: '/singer',
//	name: 'Singer',
//	component: routesComponent.Singer
//},
  {
  	//路由路径携带路由参数id
	path: '/particulars',
	name: 'Particulars',
	component: routesComponent.Particulars
  },
//{
//	path: '/newRecommend',
//	name: 'NewRecommend',
//	component: routesComponent.NewRecommend
//},
  {
  	//路由路径携带路由参数id
	path: '/songList',
	name: 'SongList',
	component: routesComponent.SongList
	//:trackCount/:description
  },
  {
	path: '/songListDetails',
	name: 'SongListDetails',
	component: routesComponent.SongListDetails
  },
   {
	path: '/musicPlay',
	name: 'MusicPlay',
	component: routesComponent.MusicPlay
  },
  {
	path: '/miniPlay',
	name: 'MiniPlay',
	component: routesComponent.MiniPlay
  },
  {
	path: '/search',
	name: 'Search',
	component: routesComponent.Search
  },
  {
	path: '/songMessage',
	name: 'SongMessage',
	component: routesComponent.SongMessage
  },
  {
	path: '/lyric',
	name: 'Lyric',
	component: routesComponent.Lyric
  },
  {
	path: '/home',
	name: 'Home',
	component: routesComponent.Home
  },
   {
	path: '/music',
	name: 'Music',
	component: routesComponent.Music
  }
]
