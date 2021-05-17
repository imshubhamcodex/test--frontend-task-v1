<template>
  <v-card elevation="0">
    <v-container>
      <span class="black--text text-h5"
        >Provider <strong>Name</strong> Date and time</span
      >
      <HzDetailsBox :viewRecord="true" class="mt-5" />
      <ul
        id="ul-box"
        style="
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 0;
          margin: 0;
        "
      >
        <li
          style="display: inline"
          class="mt-5"
          v-for="num in number"
          :key="num"
        >
          <ServiceRate :elementId="num" />
        </li>
      </ul>
    </v-container>
  </v-card>
</template>

<script>
import HzDetailsBox from "./hzDetailsBox";
import ServiceRate from "./serviceRate";
export default {
  components: {
    HzDetailsBox,
    ServiceRate,
  },
  data() {
    return {
      number: [-1, -2, -3, -4],
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 420px) {
  #ul-box {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>
