<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="12" sm="5">
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

        <v-col cols="12" sm="5" style="">
          <v-text-field
            label="Last Name"
            outlined
            clearable
            color="purple darken-2"
            hint="This field is required!"
            counter
            maxlength="20"
            class="mt-8"
            v-model="l_name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10">
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
            type="email"
            v-model="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10">
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
    </v-col>
    <v-col style="float: right">
      <v-row>
        <v-col id="provider-loc-col" cols="12" sm="10" class="ml-15">
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
      <v-row>
        <v-col id="provider-loc-col" cols="12" sm="10" class="ml-15">
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // only adding provider
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
  mounted() {},
};
</script>
<style scoped>
@media only screen and (max-width: 420px) {
  #provider-loc-col {
    margin-left: 0px !important;
  }
  #org-loc-col {
    margin-left: 0px !important;
    min-width: 300px !important;
  }
}
</style>
