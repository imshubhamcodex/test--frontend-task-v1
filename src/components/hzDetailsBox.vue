<template>
  <table>
    <tr>
      <td>
        <v-row>
          <v-col cols="12" sm="3" class="ml-8 mt-8">
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
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="3" style="margin-top: 56px">
            <v-text-field
              label="Last Name"
              outlined
              clearable
              color="purple darken-2"
              hint="This field is required!"
              counter
              maxlength="20"
              class="mt-2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" class="ml-8">
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
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" class="ml-8">
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
            ></v-text-field>
          </v-col>
        </v-row>
      </td>
      <td>
        <v-row>
          <v-col cols="12" sm="10" class="ml-8">
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
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="10" class="ml-8">
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
            ></v-text-field>
          </v-col>
        </v-row>
      </td>
    </tr>
  </table>
</template>

<script>
export default {};
</script>
<style></style>
