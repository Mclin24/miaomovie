const state = {
   cityName : window.localStorage.getItem("cityName") || "北京",
   cityId : window.localStorage.getItem("cityId") || "1"
};
const actions = {

};
const mutations = {
   setCityData(state,params){
      state.cityName = params.nm;
      state.cityId = params.id;
   }
};
export default {
   namespaced: true,
   state,
   actions,
   mutations
}