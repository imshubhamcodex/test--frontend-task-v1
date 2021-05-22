<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="3">
        <span class="black--text">Provider Name</span>
        <v-text-field
          label="First Name"
          outlined
          clearable
          color="purple darken-2"
          hint="This field is required!"
          counter
          maxlength="25"
          class="mt-2"
          v-model="f_name"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3" id="last-name-input" style="margin-top: 24px">
        <v-text-field
          label="Last Name"
          outlined
          clearable
          color="purple darken-2"
          hint="This field is required!"
          counter
          maxlength="25"
          class="mt-2"
          v-model="l_name"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="12" sm="6">
        <span class="black--text">Provider's Email</span>
        <v-text-field
          label="Email Address"
          outlined
          clearable
          color="purple darken-2"
          hint="This field is required!"
          counter
          maxlength="50"
          class="mt-2"
          v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="12" sm="6">
        <span class="black--text">Provider's Mobile Number</span>
        <v-text-field
          label="Mobile Number"
          outlined
          clearable
          color="purple darken-2"
          hint="This field is required!"
          counter
          maxlength="10"
          class="mt-2"
          type="number"
          v-model="mobile"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="12" sm="6">
        <span class="black--text">Provider's Gender</span>
        <v-select
          class="mt-2"
          clearable
          color="purple darken-2"
          :items="items"
          label="Gender"
          outlined
          counter
          maxlength="6"
          hint="This is requried field!"
          v-model="gender"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="12" sm="6">
        <v-btn
          class="mt-11"
          style="width: 100%; height: 40px"
          :loading="loading"
          :disabled="isdisable()"
          color="info"
          @click="addProvider()"
        >
          ADD
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      items: ["Male", "Female"],
      loader: null,
      loading: false,
      f_name: null,
      l_name: null,
      mobile: null,
      gender: null,
      email: null,
    };
  },
  methods: {
    isdisable() {
      if (this.loading) {
        return this.loading;
      }

      if (parseInt(this.mobile) >= 0 && this.mobile.length == 10) {
        if (this.f_name != null && this.l_name != null) {
          if (this.gender != null && this.email != null) {
            return false;
          }
        }
      }
      return true;
    },
    addProvider() {
      // only adding providers
      this.loader = "loading";
      const id =
        this.$store.state.userType +
        "-" +
        this.mobile.substring(0, 4) +
        "-" +
        this.email.substring(0, 4) +
        "-" +
        Math.random().toString(36).substring(2).substring(0, 4);
      let obj = {
        name: this.f_name + " " + this.l_name,
        providerId: id,
        first_name: this.f_name,
        last_name: this.l_name,
        email: this.email,
        mobile: this.mobile,
        gender: this.gender,
      };

      this.$store.commit("addProvider", obj);

      this.f_name = null;
      this.l_name = null;
      this.email = null;
      this.mobile = null;
      this.gender = null;
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    },
  },
  mounted() {
    console.log(this.$store.state.organization);
  },
};
</script>
<style>
.theme--light.v-messages {
  color: red;
  margin-left: -10px;
}
@media only screen and (max-width: 420px) {
  #last-name-input {
    margin-top: -5px !important;
  }
}
</style>
