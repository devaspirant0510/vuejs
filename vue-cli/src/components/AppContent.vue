<template>
  <div>
    <button v-on:click="sendEvent">send</button>
  </div>

</template>

<script>
export default {
  name: "AppContent",
  methods:{
    sendEvent:function () {
      this.$emit("renew");
    }
  }
}
</script>

<style scoped>

</style>