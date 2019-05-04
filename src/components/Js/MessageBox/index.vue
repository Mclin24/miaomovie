<template>
   <div class="messageBox">
      <h2>{{ title }}</h2>
      <p>{{ address }}</p>
      <div>
         <div @touchstart="handleCancel">{{ cancel }}</div>
         <div @touchstart="handleComfir">{{ comfir }}</div>
      </div>
   </div>
</template>

<script>
export default {
   name : "messageBox"
}
</script>

<style>
.messageBox{
   width: 200px;
   height: 120px;
   position: absolute;
   left: 50%;top: 50%;
   margin: -70px 0 0 -100px;
   border: 1px solid #cccccc;
   border-radius: 5px;
   box-shadow: 3px 3px 3px 3px #ccc;
   background: white;
}
.messageBox h2{
   text-align: center;
   line-height: 40px;
   font-size: 18px;
}
.messageBox p{
   text-align: center;
   line-height: 40px;
}
.messageBox > div{
   display: flex;
   width: 100%;
   position: absolute;
   bottom: 0;
   border-top: 1px solid #ccc;
}
.messageBox > div div{
   flex: 1;
   text-align: center;
   border-right: 1px solid #cccccc;
   line-height: 40px;
}
.messageBox > div div:last-child{
   border: none;
}

</style>
