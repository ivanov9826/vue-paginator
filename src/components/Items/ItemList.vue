<template>
  <ul>
    <Item
      v-for="result in currentPageItems"
      :title="result.title"
      :body="result.body"
      :userId="result.userId"
      :key="result.id"
    ></Item>
  </ul>
  <button @click="fetchItems">Fetch data</button>
</template>

<script>
import { URL } from "../../constants";
import Item from "./Item.vue";
import { default as axios } from "axios";

export default {
  name: "item-list",
  components: { Item },
  emits: ["setCount"],
  props: {
    page: {
      type: Number,
      required: true,
    },
    entriesPerPage: {
      type: Number,
      required: true,
    },
  },
  data: () => {
    return {
      fetchedData: [],
      entriesCount: 0,
    };
  },
  computed: {
    results() {
      return this.fetchedData;
    },
    currentPageItems() {
      const startIndex = this.page * this.entriesPerPage - this.entriesPerPage;
      const endIndex = startIndex + this.entriesPerPage;
      const pageEntries = this.fetchedData.slice(startIndex, endIndex);
      return pageEntries;
    },
  },
  methods: {
    async fetchItems() {
      const data = await axios.get(URL);

      this.fetchedData = data.data;
      this.setPagesCount();
    },
    setPagesCount() {
      this.entriesCount = Math.ceil(this.fetchedData.length / 10);
      this.$emit("setCount", this.entriesCount);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
}
</style>
