<template>
  <div class="mb-16">
    <h2 class="text-center mt-4 mb-16">Join us as a Service Provider</h2>
    <br />
    <br />
    <template>
      <v-banner class="ml-15 mr-16" two-line>
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-lock" color="white"> mdi-account-group </v-icon>
        </v-avatar>

        Three line text string example with two actions. One to two lines is
        preferable. Three lines should be considered the maximum string length
        <span class="font-weight-bold">Organization</span>

        <template v-slot:actions>
          <v-btn
            @click="setProviderType('org')"
            color="#18A0FB"
            class="mb-3 white--text"
          >
            Join Today
          </v-btn>
        </template>
      </v-banner>
    </template>

    <h2 class="text-center mt-16 mb-16">OR</h2>

    <template>
      <v-banner class="ml-15 mr-16" two-line>
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-lock" color="white"> mdi-account </v-icon>
        </v-avatar>

        Three line text string example with two actions. One to two lines is
        preferable. Three lines should be considered the maximum string length
        <span class="font-weight-bold">Individual</span>

        <template v-slot:actions>
          <v-btn
            @click="setProviderType('indv')"
            color="#18A0FB"
            class="mb-3 white--text"
          >
            Join Today
          </v-btn>
        </template>
      </v-banner>
    </template>
    <br />
    <br />
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: () => ({
    provider_type: null,
  }),
  metaInfo() {
    return {
      title: "Provider Registration",
    };
  },
  methods: {
    setProviderType(type) {
      this.provider_type = type;
      console.log(this.provider_type);
      this.$router.push("/process");
    },
  },
  mounted() {
    // axios.get(this.$baseURL+"/getAllProviders")
    // .then(res=>{
    //   console.log(res.data);
    // })
  },
};
</script>

<style scoped></style>
