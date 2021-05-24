<template>
  <v-footer class="pr-7 pl-7 mt-7 pb-15" grey padless>
    <v-card class="flex" flat tile style="background-color: transparent">
      <v-card-title>
        <p><strong class="subheading">Company Name</strong></p>
        <div style="width: 20px"></div>

        <v-spacer></v-spacer>

        <div>
          <h5 class="font-weight-bold ">Mobile app</h5>
          <h6 class="h6-mr">Features</h6>
          <h6 class="h6-mr">Live share</h6>
          <h6 class="h6-mr">Video record</h6>
        </div>
        <v-spacer></v-spacer>
        <div>
          <h5 class="font-weight-bold">Community</h5>
          <h6 class="h6-mr">Featured artists</h6>
          <h6 class="h6-mr">The Portal</h6>
          <h6 class="h6-mr">Live events</h6>
        </div>
        <v-spacer></v-spacer>
        <div>
          <h5 class="font-weight-bold ">Company</h5>
          <h6 class="h6-mr">About us</h6>
          <h6 class="h6-mr">Contact us</h6>
          <h6 class="h6-mr">History</h6>
        </div>
        <v-spacer></v-spacer>
        <div id="news">
          <h5 class="font-weight-bold ">News</h5>
          <h6 class="h6-mr">Latest</h6>
          <h6 class="h6-mr">Trendings</h6>
          <h6 class="h6-mr">Updates</h6>
        </div>
      </v-card-title>

      <v-divider />
      <br />

      <div>
        <span class="subheading"
          >© Company name, Inc. {{ new Date().getFullYear() }}. We love
          you!</span
        >
        <div style="float: right">
          <span class="mr-5">Follow us:</span>
          <v-btn v-for="icon in icons" :key="icon" class="mx-2" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
  mounted(){
    if(this.$vuetify.theme.dark){
       console.log("hi")
       document.getElementsByClassName("h6-mr").forEach(element => {
         element.style.color="white";
       });
    }
  }
};
</script>
<style scoped>
.h6-mr {
  margin-top: -10px;
}
h6 {
  cursor: pointer;
  font-weight: 300;
  color: black;
  transition: all ease 0.2s;
}
h6:hover {
  color: grey;
  transform: scale(1.05);
}
@media only screen and (max-width: 370px) {
  #news {
    padding-right: 70px !important;
  }
}
</style>
