<template>
  <div>
    <v-container>
      <span class="black--text text-h5 dark-v">Done <strong>:)</strong></span>
      <div id="div-cont" class="mt-16 mb-16">
        <v-btn class="mx-2 mt-16" fab dark color="green">
          <v-icon dark> mdi-check-outline </v-icon>
        </v-btn>

        <br />
        <br />
        <span class="black--text text-h5 dark-v"
          ><strong> Congratulation </strong> for be a member of this Insurance
          family as a service provider.</span
        >
        <br />
      </div>
    </v-container>

    <v-btn @click="home()" class="mx-2 fr mt-11" fab dark small color="indigo">
      <v-icon dark> mdi-arrow-right </v-icon>
    </v-btn>
    <span class="mt-13 mr-2 fr">Home</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  metaInfo() {
    return {
      title: "Congratulation",
    };
  },
  mounted() {
    this.scrollTop();
    if (this.$vuetify.theme.dark) {
			document.getElementsByClassName('dark-v')[0].classList = ' text-h5';
      document.getElementsByClassName('dark-v')[0].classList = ' text-h5';
		}
  },
};
</script>
<style scoped>
#div-cont {
  max-width: 900px;
  text-align: center;
  margin: auto auto;
  display: block;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
</style>
