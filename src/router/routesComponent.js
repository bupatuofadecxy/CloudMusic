export default{
	Main:　r => require(['@/components/Main'], r),
	InterFace: r => require(['@/components/InterFace'], r),
	Singer: r => require(['@/components/Singer'], r),
	Particulars: r => require(['@/components/Particulars'], r),
	NewRecommend: r => require(['@/components/NewRecommend'], r),
	SongList: r => require(['@/components/SongList'], r),
	SongListDetails: r => require(['@/components/SongListDetails'], r),
	MusicPlay: r => require(['@/components/MusicPlay'], r),
	MiniPlay: r => require(['@/components/MiniPlay'], r),
	Search: r => require(['@/components/Search'], r),
	SongMessage: r => require(['@/components/SongMessage'], r),
	Lyric: r => require(['@/components/Lyric'], r),
  Top: r => require(['@/components/Top'], r),
	//views
	Home: r => require(['@/views/Home'], r),
	Music: r => require(['@/views/Music'], r)

}
