<template>
  <v-card v-if="disp" class="mx-auto mt-5" max-width="344">
    <v-icon
      @click="disp = false"
      color="red"
      class="mt-1 mr-1"
      style="float: right; cursor: pointer"
      >mdi-close-box</v-icon
    >
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
              <v-text-field label="Actual amt." outlined dense></v-text-field>
            </v-col>
          </td>
        </tr>
        <tr>
          <td class="pb-3" style="min-width: 100px">
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
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
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

<script>
export default {
  data() {
    return {
      reveal: false,
      disp: true,
    };
  },
};
</script>
<style></style>
