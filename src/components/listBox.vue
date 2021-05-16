<template>
  <div class="text-center list-box">
    <p class="para-void">N/A</p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.list-box {
  min-height: 400px;
  background-color: lightgrey;
  min-width: 300px;
  border-radius: 5px;
  position: relative;
}
.para-void {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
