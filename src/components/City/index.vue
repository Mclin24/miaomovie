<template>
   <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotCities" :key="item.id">{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="itemList in cityList" :key="itemList.list.id">
                    <h2>{{itemList.index}}</h2>
                    <ul>
                        <li v-for="item in itemList.list" :key="item.id">{{item.nm}}</li>
                    </ul>
                </div>	
            </div>
        </div>
        <div class="city_index">
            <ul v-for="(item,index) in cityList" :key="item.index">
                <li @click="handleToIndex(index)">{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
   name : 'city',
   data(){
       return {
           cityList : [],
           hotCities : []
       }
   },
   mounted(){
       this.$axios.get('/api/cityList').then((res)=>{
           var msg = res.data.msg;
           if( msg == "ok" ){
               var cities = res.data.data.cities;
               var { hotCitiesList , citiesList } = this.formatCitiesList(cities);
               this.cityList = citiesList;
               this.hotCities = hotCitiesList;
           }
       })
    },
    methods : {
        formatCitiesList(cities){
            var citiesList = [];
            var hotCitiesList = [];
            for(var i = 0; i < cities.length; i ++){
                if(cities[i].isHot === 1){
                    hotCitiesList.push(cities[i]);
                }
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                // console.log(firstLetter)
                if(toCom(firstLetter)){ // 新添加
                    citiesList.push({ index : firstLetter, list : [{ nm : cities[i].nm, id : cities[i].id}] });
                }else{
                    for(var j = 0; j < citiesList.length; j ++ ){
                        if(citiesList[j].index === firstLetter){
                            citiesList[j].list.push({ nm : cities[i].nm, id : cities[i].id })
                        }
                    }
                }
            }
            citiesList.sort((n1,n2)=>{
                if(n1.index > n2.index){
                    return 1;
                }else if(n1.index < n2.index){
                    return -1;
                }else{
                    return 0
                }
            })
            function toCom(firstLetter){
                for(var i = 0; i < citiesList.length; i++ ){
                    if( citiesList[i].index === firstLetter ){
                        return false;
                    }
                }
                return true;
            }
            return {
                hotCitiesList,
                citiesList
            }
        },
        handleToIndex(index){
            console.log(index);
            var h2 = this.$refs.city_sort.getElementsByTagName("h2");
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
        }
    }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>