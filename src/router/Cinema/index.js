export default {
   path : '/cinema',
   name : "Cinema",
   component : ()=> import("@/views/Cinema"),
   children : [
      {
         path : 'globalcity',
         component : ()=>import("@/components/GlobalCity")
      },
      {
         path : 'brand',
         component : ()=>import("@/components/Brand")
      },
      {
         path : 'special',
         component : ()=>import("@/components/Special")
      }
   ]
}