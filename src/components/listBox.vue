<template>
  <div class="text-center list-box">
    <p v-if="showPara" class="para-void">N/A</p>
    <ul
      id="ul-box"
      style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin: 0;
      "
    >
      <li
        style="display: inline"
        class="mt-5"
        v-for="provider in providers"
        :key="provider.id"
      >
        <PeopleTag :providerInfo="provider" />
      </li>
    </ul>
    <ul
      style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin: 0;
      "
    >
      <li
        style="display: inline"
        class="mt-5"
        v-for="service in services"
        :key="service.id"
      >
        <ServiceTag :serviceInfo="service" />
      </li>
    </ul>
  </div>
</template>

<script>
import PeopleTag from "./peopleTag";
import ServiceTag from "./serviceTag";
export default {
  props: ["providers", "services"],
  components: {
    PeopleTag,
    ServiceTag,
  },
  data() {
    return {
      showPara: true,
    };
  },
  mounted() {
    if (this.providers != undefined || this.services != undefined) {
      this.showPara = false;
    }
  },
};
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
