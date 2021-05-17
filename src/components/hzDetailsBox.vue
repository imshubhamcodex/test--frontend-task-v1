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
            :disabled="viewRecord"
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
            :disabled="viewRecord"
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
            :disabled="viewRecord"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10">
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
            :disabled="viewRecord"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col style="float: right">
      <v-row>
        <v-col id="provider-loc-col" cols="12" sm="12" class="ml-15">
          <span class="black--text">Provider's Location</span>
          <v-text-field
            label="Location"
            outlined
            clearable
            color="purple darken-2"
            hint="This field is required!"
            counter
            maxlength="60"
            class="mt-2"
            :disabled="viewRecord"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          id="org-loc-col"
          cols="12"
          sm="12"
          style="min-width: 400px"
          class="ml-15"
        >
          <span class="black--text">Organization's Name</span>
          <v-text-field
            label="Hospital/clinic Name"
            outlined
            clearable
            color="purple darken-2"
            hint="This field is required!"
            counter
            maxlength="30"
            class="mt-2"
            :disabled="viewRecord"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["viewRecord"],
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
