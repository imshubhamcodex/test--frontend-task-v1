<template>
  <div>
    <v-card elevation="0">
      <v-container class="mt-5">
        <span class="black--text text-h5"
          >Providers <strong>Details</strong></span
        >
        <br />
        <br />
        <Record />
        <br />
        <Record />
        <br />
        <Record />
        <br />
        <Record />
      </v-container>
    </v-card>
    <v-btn
      @click="goToHome()"
      class="mx-2 fr mt-11 mr-5"
      fab
      dark
      small
      color="indigo"
    >
      <v-icon dark> mdi-arrow-right </v-icon>
    </v-btn>
    <span class="mt-13 mr-2 fr">Home</span>
  </div>
</template>

<script>
import Record from "./record";
export default {
  components: {
    Record,
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  metaInfo() {
    return {
      title: "Providers record",
    };
  },
};
</script>
<style scoped>
.fr {
  float: right;
}
</style>
