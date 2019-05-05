export default {
   path : '/movie',
   component : ()=> import("@/views/Movie"),
   redirect : "/movie/playing",
   children : [
      {
         path : 'city',
         component : ()=>import('@/components/City')
      },
      {
         path : 'playing',
         component : ()=>import('@/components/Playing')
      },
      {
         path : 'commingsoon',
         component : ()=>import('@/components/CommingSoon')
      },
      {
         path : 'search',
         component : ()=>import('@/components/Search')
      },
      {
         path : "detail/1/:movieId",
         components: {
            default : ()=>import("@/components/Playing"),
            detail : ()=>import("@/views/Movie/detail.vue"),
         },
         props: {
            detail : true
         }
      },
      {
         path : "detail/2/:movieId",
         components: {
            default : ()=>import("@/components/CommingSoon"),
            detail : ()=>import("@/views/Movie/detail.vue"),
         },
         props: {
            detail : true
         }
      },
      {
         path : "detail/3/:movieId",
         components: {
            default : ()=>import("@/components/Search"),
            detail : ()=>import("@/views/Movie/detail.vue"),
         },
         props: {
            detail : true
         }
      }
   ]
}