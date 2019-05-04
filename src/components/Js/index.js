import Vue from "vue";
import MessageBox from "./MessageBox";

export var messageBox = (function(){
   var defaults = {
      title : "",
      address : "",
      cancel : "",
      comfir : "",
      handleCancel : null,
      handleComfir : null
   };
   var Mycomponent = Vue.extend(MessageBox);
   return function( options ){
      for(var key in options){
         defaults[key] = options[key];
      }
      var vm = new Mycomponent({
         el : document.createElement('div'),
         data : {
            title : defaults.title,
            address : defaults.address,
            cancel : defaults.cancel,
            comfir : defaults.comfir
         },
         methods : {
            handleCancel(){
               defaults.handleCancel && defaults.handleCancel.call(this);
               document.body.removeChild( vm.$el );
            },
            handleComfir(){
               defaults.handleComfir && defaults.handleComfir.call(this);
               document.body.removeChild( vm.$el );
            }
         }
      })
      document.body.appendChild( vm.$el );
   }
})()