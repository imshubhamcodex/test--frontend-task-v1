<template>
  <v-data-table :headers="headers" :items="ServicesData" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Added Services</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
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
                              v-model="price"
                              outlined
                              dense
                            ></v-text-field>
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
                              v-model="discount"
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
                        <p class="display-1 text--primary">
                          About Service name
                        </p>
                        <p>
                          late 16th century (as a noun denoting a place where
                          alms were distributed): from medieval Latin
                          eleemosynarius, from late Latin eleemosyna ‘alms’,
                          from Greek eleēmosunē ‘compassion’
                        </p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="reveal = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <!-- This for edit dialog  -->
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :disabled="isdisable()"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >You want to delete this item?</v-card-title
            >
            <v-card-actions>
              <!-- This for delete dialog  -->
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-5" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data> No Service added :( </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    mobileView: false,
    headers: [
      { text: "Service Name ", value: "name", sortable: false },
      { text: "Service ID", value: "serviceId", sortable: false },
      { text: "Regular Price (₹)", value: "price", sortable: true },
      { text: "Discounted Price (₹)", value: "discount", sortable: true },
      { text: "Actions", value: "actions", sortable: false },
    ],
    ServicesData: [],
    selectedItem: {},
    reveal: false,
    price: null,
    discount: null,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Title name";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.ServicesData = this.$store.state.services;
    },

    editItem(item) {
      this.selectedItem = item;
      this.price = item.price;
      this.discount = item.discount;
      this.dialog = true;
    },

    deleteItem(item) {
      console.log(item);
      this.selectedItem = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // delete selected item
      this.$store.commit("deleteService", this.selectedItem.serviceId);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    save() {
      // save edited item selected item

      this.$store.commit("editService", {
        serviceId: this.selectedItem.serviceId,
        name: this.selectedItem.name,
        price: this.price,
        discount: this.discount,
      });
      this.close();
    },
    isdisable() {
      if (parseInt(this.price) >= 0 && parseInt(this.discount) >= 0) {
        return false;
      }
      return true;
    },
  },
  mounted() {},
};
</script>
