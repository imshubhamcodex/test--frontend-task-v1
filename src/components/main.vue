<template>
  <v-stepper v-model="e1" class="mb-n10 pb-16">
    <v-stepper-header>
      <v-stepper-step color="green" :complete="e1 > 1" step="1">
        Get Started
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="green" :complete="e1 > 2" step="2">
        Add Providers
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="green" :complete="e1 > 3" step="3">
        Add Services
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="green" step="4"> Confirmation </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card elevation="0">
          <v-container>
            <span class="black--text text-h5"
              >Get started with your <strong>name and location</strong></span
            >
            <div
              id="step1-box"
              style="margin-left: 20%; margin-right: 20%"
              class="mt-15"
            >
              <v-row class="mt-n5">
                <v-col cols="12" sm="12">
                  <span class="black--text">Organization/Provider Name</span>
                  <v-text-field
                    label="Org. Name"
                    outlined
                    clearable
                    color="purple darken-2"
                    hint="This field is required!"
                    counter
                    maxlength="30"
                    class="mt-2"
                    v-model="org_name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-n5">
                <v-col cols="12" sm="12">
                  <span class="black--text"
                    >Organization/Provider Location</span
                  >
                  <v-text-field
                    label="Org. Location"
                    outlined
                    clearable
                    color="purple darken-2"
                    hint="This field is required!"
                    counter
                    maxlength="50"
                    class="mt-2"
                    v-model="org_loc"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-btn
              @click="goToEle2(true)"
              class="mx-2 mt-3 fr"
              fab
              dark
              small
              color="indigo"
            >
              <v-icon dark> mdi-arrow-right </v-icon>
            </v-btn>
            <span class="mt-5 mr-2 fr">Next</span>
          </v-container>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card elevation="0">
          <v-container>
            <span class="black--text text-h5"
              >Register your <strong>service provider</strong> here</span
            >
            <HzDetailsBox v-if="!mobileView" class="pt-5" />
            <DetailsForm v-else class="pt-5" />
            <TableProviders class="mt-15" />
          </v-container>
        </v-card>

        <v-btn
          @click="goToEle3()"
          class="mx-2 mt-10 fr"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark> mdi-arrow-right </v-icon>
        </v-btn>
        <span class="mt-12 mr-2 fr">Add services</span>

        <v-btn
          class="mx-2 fl mt-10"
          @click="goToEle1()"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
        <span class="mt-12 ml-2 mr-2 fl">Back</span>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card elevation="0">
          <v-container>
            <span class="black--text text-h5"
              >Select services offered by <strong>Provider’s Name</strong></span
            >

            <HzServiceBox class="mt-5" />

            <TableServices class="mt-15" />
          </v-container>
        </v-card>

        <v-btn
          class="mx-2 fl mt-10"
          @click="goToEle2(false)"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
        <span class="mt-12 ml-2 mr-2 fl">Back</span>

        <v-btn
          @click="goToEle4()"
          class="mx-2 fr mt-11"
          id="next-service-btn"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark> mdi-arrow-right </v-icon>
        </v-btn>
        <span id="btn-next-service" class="mt-13 mr-2 fr">Add price</span>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card elevation="0">
          <v-container>
            <span class="black--text text-h5"
              >Review <strong>Details</strong></span
            >
            <TableProviders class="mt-15" />
            <TableServices class="mt-16" />
          </v-container>
        </v-card>

        <v-btn
          class="mx-2 fl mt-10"
          @click="goToEle3()"
          fab
          dark
          small
          color="indigo"
        >
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
        <span class="mt-12 ml-2 mr-2 fl">Back</span>

        <v-btn
          id="btn-submit"
          @click="submit()"
          class="mx-2 fr mt-9"
          fab
          dark
          small
          color="green"
        >
          <v-icon dark> mdi-arrow-right </v-icon>
        </v-btn>
        <span id="label-submit" class="mt-12 mr-2 fr">Submit</span>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import DetailsForm from "./detailsForm";
import HzServiceBox from "./hzAddServiceBox";
import HzDetailsBox from "./hzDetailsBox";
import TableProviders from "./tableProviders";
import TableServices from "./tableServices";
export default {
  components: {
    HzServiceBox,
    HzDetailsBox,
    DetailsForm,
    TableProviders,
    TableServices,
  },
  data() {
    return {
      e1: 1,
      number: [1, 2, 3, 4, 5, 6],
      mobileView: false,
      org_name: null,
      org_loc: null,
    };
  },
  metaInfo() {
    return {
      title: "Registration Process",
    };
  },
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
    goToEle1() {
      this.e1 = 1;
      this.scrollTop();
    },
    goToEle2(save) {
      if (save) {
        let obj = {
          organization_name: this.org_name,
          organization_location: this.org_loc,
        };
        this.$store.commit("updateOrganization", obj);
      }

      this.e1 = 2;
      this.scrollTop();
    },
    goToEle3() {
      this.e1 = 3;
      this.scrollTop();
    },
    goToEle4() {
      this.e1 = 4;
      this.scrollTop();
    },
    addNewProv() {
      this.e1 = 1;
      this.scrollTop();
    },
    submit() {
      // database query;
      this.$router.push("/done");
    },
    updateService(e) {
      // console.log(e)

      let index = this.number.indexOf(e);
      this.number.splice(index, 1);
      console.log(this.number);
    },
  },
  mounted() {
    if (window.innerWidth <= 420) {
      this.mobileView = true;
    }
    console.log(this.$store.state.userType);
  },
};
</script>
<style scoped>
.div-list-box {
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translate(-2%, -50%);
}
.fr {
  float: right;
}
.fl {
  float: left;
}
#all-providers-div {
  margin-top: 100px;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 420px) {
  .div-list-box {
    display: none;
  }
  #ul-box {
    grid-template-columns: repeat(1, 1fr) !important;
  }
  #div-step4 {
    margin-top: 50px !important;
  }
  #step1-box {
    margin-left: 10% !important;
    margin-right: 10% !important;
  }
}

@media only screen and (max-width: 370px) {
  #btn-next-service {
    margin-top: 48px !important;
  }
  #next-service-btn {
    margin-top: 38px !important;
  }
  #btn-submit {
    margin-top: 40px !important;
  }
  #label-submit {
    margin-top: 50px !important;
  }
}
</style>
