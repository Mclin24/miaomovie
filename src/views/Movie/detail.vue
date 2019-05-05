<template>
   <div id="detailContainer" class="slide-enter">
      <Header id="header" title="影片详情">
         <i class="iconfont icon-right" @touchstart="handleBack"></i>
      </Header>
		<Loading v-if="isLoading" />
		<div v-else id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="movieData.img | setWH('108.150')" alt="">
					</div>
					<div class="detail_list_info">
						<h2>{{movieData.nm}}</h2>
						<p>{{movieData.enm}}</p>
						<p>{{movieData.sc}}</p>
						<p>{{movieData.cat}}</p>
						<p>{{movieData.src}} / {{movieData.dur}}分钟</p>
						<p>{{movieData.pubDesc}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>{{movieData.dra}}</p>
			</div>
			<div class="detail_player swiper-container" ref="detail_player">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="item in movieData.photos" :key="item">
						<div> 
							<img :src="item | setWH('140.127')" alt="">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
 
<script>
import Header from "@/components/Header"
export default {
   name : 'detail',
	data () {
		return {
			movieData : {},
			isLoading : true	
		}
	},
   props: ["movieId"],
   components: {
      Header
   },
   mounted () {
      // console.log(this.movieId);
      this.$axios.get("/api/detailmovie?movieId="+this.movieId).then(res=>{
			var msg = res.data.msg;
			if (msg === "ok") {
				var movieDetailData = res.data.data.detailMovie;
				this.movieData = {
					img : movieDetailData.img,
					nm : movieDetailData.nm,
					enm : movieDetailData.enm,
					cat : movieDetailData.cat,
					sc : movieDetailData.sc,
					src : movieDetailData.src,
					dur : movieDetailData.dur,
					dra : movieDetailData.dra,
					fra : movieDetailData.fra,
					pubDesc : movieDetailData.pubDesc,
					photos : movieDetailData.photos
				}
				this.isLoading = false;
				this.$nextTick(()=>{
					new Swiper(this.$refs.detail_player, {
						slidesPerView : 'auto',
						freeMode : true,
						freeModeSticky: true
					});
				})
			}
		})
   },
   methods: {
      handleBack(){
         this.$router.back();
      }
   }
}
</script>

<style scoped>
#detailContainer{
   position: absolute;
   left: 0; top: 0;
   z-index: 100;
   width : 100%;
   min-height: 100%;
   background: white;
}
#detailContainer.slide-enter{ animation: 0.5s slideIn;}
@keyframes slideIn{
   0%{
      transform: translateX(100%)
   }
   100%{
      transform: translateX(0)
   }
}
#content.contentDetail{ display: block; margin-bottom:0;}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url(/images/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px;}
.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
</style>
