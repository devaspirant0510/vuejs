<template>
  <div id="app">
    <app-header v-bind:propsData="message">

    </app-header>
    <app-content v-on:renew="changeStr">

    </app-content>

  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";

export default {
  data:function(){
    return {
      message:"hello vue js"
    }
  },
  components:{
    'app-header':AppHeader,
    'app-content':AppContent
  },
  methods:{
    changeStr:function(){
      this.message = "hahaha";
    }
  }

}
</script>

<style>
</style>
