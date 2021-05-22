<template>
  <v-row class="mb-15">
    <v-col cols="12" sm="4">
      <span class="black--text">Select a Service</span>
      <v-select
        class="mt-2"
        clearable
        color="purple darken-2"
        :items="items"
        label="Services"
        outlined
        hint="Choose a service at once!"
        v-model="selectedService"
      ></v-select>
      <v-btn
        id="btn-add"
        style="width: 100%; height: 40px"
        :loading="loading"
        :disabled="isdisable()"
        color="info"
        @click="addService()"
      >
        ADD
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>
    </v-col>
    <v-col>
      <template>
        <v-card
          id="card"
          class="mx-auto mt-5 ml-15"
          min-width="344"
          max-height="250px"
        >
          <v-card-text>
            <div>Set price and discounts</div>
            <p class="display-1 text--primary">Service name</p>
            <table style="border-collapse: separate; border-spacing: 0 15px">
              <tr>
                <td class="pb-3">
                  <p>Price: ₹</p>
                </td>
                <td>
                  <v-col>
                    <v-text-field
                      label="Actual amt."
                      counter
                      maxlength="10"
                      outlined
                      dense
                      type="number"
                      v-model="regular_price"
                    ></v-text-field>
                  </v-col>
                </td>
                <td class="pb-3">
                  <p>Discount:₹</p>
                </td>
                <td>
                  <v-col>
                    <v-text-field
                      label="Discounted amt."
                      counter
                      maxlength="10"
                      outlined
                      dense
                      type="number"
                      v-model="discount_price"
                    ></v-text-field>
                  </v-col>
                </td>
              </tr>
            </table>
            <v-card-actions class="mt-n6">
              <v-btn text color="teal accent-4" @click="reveal = true">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card-text>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">About Service name</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were
                  distributed): from medieval Latin eleemosynarius, from late
                  Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [],
    reveal: false,
    loader: null,
    loading: false,
    regular_price: null,
    discount_price: null,
    data: [],
    selectedService: null,
  }),
  methods: {
    addService() {
      this.loader = "loading";

      let id = null;

      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == this.selectedService) {
          id = this.data[i].id;
          break;
        }
      }

      let obj = {
        serviceId: id,
        name: this.selectedService,
        price: this.regular_price,
        discount: this.discount_price,
      };

      this.$store.commit("addService", obj);

      this.regular_price = null;
      this.discount_price = null;
      this.selectedService = null;
    },
    isdisable() {
      if (this.loading) {
        return this.loading;
      }

      if (
        parseInt(this.regular_price) >= 0 &&
        parseInt(this.discount_price) >= 0
      ) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    // get data from database and save it to database in definedServices[]

    this.data = this.$store.state.definedServices;
    for (let i = 0; i < this.data.length; i++) {
      this.items.push(this.data[i].name);
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    },
  },
};
</script>
<style>
.theme--light.v-messages {
  margin-left: -10px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
#btn-add {
  margin-top: 105px;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 420px) {
  #btn-add {
    margin-top: 0px !important;
  }
  #card {
    margin-left: 0px !important;
  }
}

@media only screen and (max-width: 370px) {
  #card {
    margin-left: -20px !important;
  }
}
</style>
