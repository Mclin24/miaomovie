<template>
   <div>
      <Header title="喵喵个人"></Header>
      <div id="content">
         <Login></Login>
      </div>
      <TabBar></TabBar>
   </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/Footer";
import Login from "@/components/Login";

export default {
   name : "mine",
   components : {
      Header,
      TabBar,
      Login
   }
}
</script>

<style>

</style>
