<template>
   <div class="cinema_body">
      <ul>
         <li v-for="(item,index) in cinemalist" :key="item.id">
            <div>
               <span>{{item.nm}}</span>
               <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
            </div>
            <div class="address">
               <span>{{item.addr}}</span>
               <span>{{item.distance}}</span>
            </div>
            <div class="card">
               <div v-for="(item,key) in item.tag" v-if="item === 1" :key="key" :class=" key | classCard">{{key | formatCard}}</div>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name : 'cinemalist',
   data () {
      return {
         cinemalist : []
      }
   },
   mounted () {
      this.$axios.get('/api/cinemaList?cityId=10').then(res=>{
         var msg = res.data.msg;
         if (msg === 'ok') {
            var cinemas = res.data.data.cinemas;
            this.cinemalist = cinemas;
         }
      })
   },
   filters: {
      formatCard(key){
         var cards = [
            { key : 'allowRefund', value : "改签"},
            { key : 'endorse', value : "退"},
            { key : 'sell', value : "折扣卡"},
            { key : 'snack', value : "小吃"}
         ];
         for (let i = 0; i < cards.length; i++) {
            if (cards[i].key === key) {
               return cards[i].value;
            }
         }
         return "";
      },
      classCard(key){
         var cards = [
            { key : 'allowRefund', value : "bl"},
            { key : 'endorse', value : "bl"},
            { key : 'sell', value : "or"},
            { key : 'snack', value : "or"}
         ];
         for (let i = 0; i < cards.length; i++) {
            if (cards[i].key === key) {
               return cards[i].value;
            }
         }
         return "";
      }
   }
}
</script>
<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(1){display: inline-block; width: 200px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>

