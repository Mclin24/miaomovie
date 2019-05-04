<template>
   <div class="wrapper" ref="wrapper">
      <slot></slot>
   </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
   name : 'Scroller',
   props: {
      handleScroll : {
         type : Function,
         default : function(){}
      },
      handleTouchEnd : {
         type : Function,
         default : function(){}
      }
   },
   mounted () {
      var scroll = new BScroll(this.$refs.wrapper,{
         tap : true,
         probeType : 1
      });
      this.scroll = scroll;
      scroll.on("scroll",(pos)=>{
         this.handleScroll(pos);
      });
      scroll.on("touchEnd",(pos)=>{
         this.handleTouchEnd(pos);
      })
   },
   methods: {
      scrollTo(y){
         this.scroll.scrollTo(0,y);
      }
   }
}
</script>

<style scoped>
.wrapper{height: 100%;}
</style>
