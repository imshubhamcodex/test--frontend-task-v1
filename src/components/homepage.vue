<template>
  <div class="hello">
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
   
  }),
  mounted() {
    axios.get("http://localhost:8081/getAllProviders")
    .then(res=>{
      console.log(res.data);
    })
  },
  

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
