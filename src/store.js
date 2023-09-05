import { createStore } from "vuex";

import { default as axios } from "axios";

import { URL } from "./constants";

const store = createStore({
  state() {
    return {
      fetchedItems: null,
      currentPageEntries: null,
      pagesCount: 0,
      entriesPerPage: 10,
      currentPage: 1,
      currPageStartIndex: null,
      currPageEndIndex: null,
    };
  },
  mutations: {
    setFetchedItems(state, payload) {
      state.fetchedItems = payload;
    },
    setCurrentPageEntries(state, payload) {
      state.currentPageEntries = payload;
    },
    setPagesCount(state, payload) {
      state.pagesCount = payload;
    },
    setStartIndex(state, payload) {
      state.currPageStartIndex = payload;
    },
    setEndIndex(state, payload) {
      state.currPageEndIndex = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
  actions: {
    async fetchItems(context) {
      const data = await axios.get(URL);
      context.commit("setFetchedItems", data.data);
      context.dispatch("setPagesCount");
      context.dispatch("setIndexes");
    },
    setPagesCount(context) {
      const pagesCount = Math.ceil(
        context.state.fetchedItems.length / context.state.entriesPerPage
      );
      context.commit("setPagesCount", pagesCount);
    },
    setIndexes(context) {
      const perPage = context.state.entriesPerPage;
      const currPage = context.state.currentPage;
      const startIndex = currPage * perPage - perPage;
      const endIndex = startIndex + perPage;
      context.commit("setStartIndex", startIndex);
      context.commit("setEndIndex", endIndex);
    },
    setPageEntries(context) {
      const startIndex = context.state.currPageStartIndex;
      const endIndex = context.state.currPageEndIndex;

      const pageEntries = context.state.fetchedItems.slice(startIndex, endIndex);

      context.commit("setCurrentPageEntries", pageEntries);
    },

    changePage(context, payload) {
      const page = payload.page;
      context.commit("setCurrentPage", page);

      context.dispatch("setIndexes");
      context.dispatch("setPageEntries");
    },
  },
  getters: {
    getItems(state) {
      return state.fetchedItems;
    },
    getPageItems(state) {
      return state.currentPageEntries;
    },
    getEntriesPerPage(state) {
      return state.entriesPerPage;
    },
    getPagesCount(state) {
      return state.pagesCount;
    },
  },
});

export default store;
