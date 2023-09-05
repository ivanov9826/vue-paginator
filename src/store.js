import { createStore } from "vuex";

import { URL } from "./constants";

const store = createStore({
  state() {
    return {
      fetchedItems: null,
    };
  },
  mutations: {
    setFetchedItems(state, payload) {
      state.fetchedItems = payload;
    },
  },
  actions: {
    async fetchItems(context) {
      const data = await axios.get(URL);
      context.commit("setFetchedItems", data.data);
    },
  },
  getters: {
    getItems(state) {
      return state.fetchedItems;
    },
  },
});
