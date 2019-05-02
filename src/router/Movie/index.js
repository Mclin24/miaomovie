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
      }
   ]
}