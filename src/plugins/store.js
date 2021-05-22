import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    providers: [],
    services: [],
    organization: [],
    definedServices: [
      { name: "ECG", id: "ecg-2017-random" },
      { name: "X-ray", id: "xray-2015-text" },
      { name: "MRI scan", id: "mri-2000-kilo" },
    ],
    userType: null,
  },
  mutations: {
    setUserType(state, userType) {
      state.userType = userType;
    },
    updateOrganization(state, organization) {
      state.organization[0] = organization;
    },
    addProvider(state, provider) {
      state.providers.push(provider);
    },
    deleteProvider(state, id) {
      let index = null;

      for (let i = 0; i < state.providers.length; i++) {
        if (state.providers[i].providerId == id) {
          index = i;
          break;
        }
      }

      state.providers.splice(index, 1);
    },
    editProvider(state, payload) {
      let id = payload.oldID;
      let index = null;

      for (let i = 0; i < state.providers.length; i++) {
        if (state.providers[i].providerId == id) {
          index = i;
          break;
        }
      }

      state.providers[index].name = payload.name;
      state.providers[index].providerId = payload.providerId;
      state.providers[index].first_name = payload.first_name;
      state.providers[index].last_name = payload.last_name;
      state.providers[index].email = payload.email;
      state.providers[index].mobile = payload.mobile;
      state.providers[index].gender = payload.gender;
    },
    addService(state, service) {
      state.services.push(service);
    },
    editService(state, payload) {
      let index = null;

      for (let i = 0; i < state.services.length; i++) {
        if (state.services[i].serviceId == payload.serviceId) {
          index = i;
          break;
        }
      }

      state.services[index].serviceId = payload.serviceId;
      state.services[index].name = payload.name;
      state.services[index].price = payload.price;
      state.services[index].discount = payload.discount;
    },
    deleteService(state, id) {
      let index = null;

      for (let i = 0; i < state.services.length; i++) {
        if (state.services[i].serviceId == id) {
          index = i;
          break;
        }
      }

      state.services.splice(index, 1);
    },
  },
});

export default store;
