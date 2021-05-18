<template>
  <v-row>
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
      ></v-select>
      <v-btn
        class="mt-11"
        style="width: 100%; height: 40px"
        :loading="loading"
        :disabled="loading"
        color="info"
        @click="loader = 'loading'"
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
        <v-card class="mx-auto mt-5" max-width="344">
          <v-card-text>
            <div>Set price and discounts</div>
            <p class="display-1 text--primary">Service name</p>
            <table>
              <tr>
                <td class="pb-3">
                  <p>Price: ₹</p>
                </td>
                <td>
                  <v-col>
                    <v-text-field
                      label="Actual amt."
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </td>
              </tr>
              <tr>
                <td class="pb-3">
                  <p>Discount: ₹</p>
                </td>
                <td>
                  <v-col>
                    <v-text-field
                      label="Discounted amt."
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </td>
              </tr>
            </table>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
              Learn More
            </v-btn>
          </v-card-actions>

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
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    reveal: false,
    loader: null,
    loading: false,
  }),
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
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
