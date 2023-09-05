<template>
  <ul v-if="fetchedData">
    <Item
      v-for="result in currentPageItems"
      :title="result.title"
      :body="result.body"
      :userId="result.userId"
      :key="result.id"
    ></Item>
  </ul>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "item-list",
  components: { Item },
  computed: {
    fetchedData() {
      return this.$store.getters.getItems;
    },
    currentPageItems() {
      if (this.fetchedData) {
        this.$store.dispatch("setPageEntries");
        return this.$store.getters.getPageItems;
      }
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
