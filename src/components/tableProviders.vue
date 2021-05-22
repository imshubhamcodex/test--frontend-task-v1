<template>
  <v-data-table
    :headers="headers"
    :id="providersData.providerId"
    :items="providersData"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Added Providers</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row v-if="!mobileView">
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
                  </v-col>
                  <v-col style="float: right">
                    <v-row>
                      <v-col
                        id="provider-loc-col"
                        cols="12"
                        sm="10"
                        class="ml-15"
                      >
                        <span class="black--text"
                          >Provider's Mobile Number</span
                        >
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
                      <v-col
                        id="provider-loc-col"
                        cols="12"
                        sm="10"
                        class="ml-15"
                      >
                        <span class="black--text">Provider's Gender</span>
                        <v-select
                          class="mt-2"
                          clearable
                          color="purple darken-2"
                          :items="genders"
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
                <v-form v-else>
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

                    <v-col
                      cols="12"
                      sm="3"
                      id="last-name-input"
                      style="margin-top: 24px"
                    >
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
                        :items="genders"
                        label="Gender"
                        outlined
                        counter
                        maxlength="6"
                        hint="This is requried field!"
                        v-model="gender"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
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
    <template v-slot:no-data> No Provider Added :( </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    mobileView: false,
    genders: ["Male", "Female"],
    headers: [
      { text: "Provider's Name", value: "name", sortable: false },
      { text: "Provider's ID", value: "providerId", sortable: false },
      { text: "Gender", value: "gender", sortable: false },
      { text: "Phone number", value: "mobile", sortable: false },
      { text: "Email", value: "email", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    providersData: [],
    selectedItem: {},
    f_name: null,
    l_name: null,
    mobile: null,
    gender: null,
    email: null,
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
      this.providersData = this.$store.state.providers;
    },

    editItem(item) {
      this.selectedItem = item;

      this.f_name = item.first_name;
      this.l_name = item.last_name;
      this.gender = item.gender;
      this.email = item.email;
      this.mobile = item.mobile;

      this.dialog = true;
    },

    deleteItem(item) {
      console.log(item);
      this.selectedItem = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.commit("deleteProvider", this.selectedItem.providerId);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    save() {
      const id =
        this.$store.state.userType +
        "-" +
        this.mobile.substring(0, 4) +
        "-" +
        this.email.substring(0, 4) +
        "-" +
        Math.random().toString(36).substring(2).substring(0, 4);

      let oldid = this.selectedItem.providerId;

      this.$store.commit("editProvider", {
        oldID: oldid,
        name: this.f_name + " " + this.l_name,
        providerId: id,
        first_name: this.f_name,
        last_name: this.l_name,
        email: this.email,
        mobile: this.mobile,
        gender: this.gender,
      });

      this.close();
    },

    isdisable() {
      if (parseInt(this.mobile) >= 0 && this.mobile.length == 10) {
        if (this.f_name != null && this.l_name != null) {
          if (this.gender != null && this.email != null) {
            return false;
          }
        }
      }
      return true;
    },
  },
  mounted() {
    if (window.innerWidth <= 420) {
      this.mobileView = true;
    }
  },
};
</script>
