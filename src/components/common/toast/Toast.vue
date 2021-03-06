<template>
  <div id="toast">
    <div v-show="show">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  #toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    border-radius: 10px;
  }
</style>
