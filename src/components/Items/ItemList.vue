<template>
  <ul v-if="fetchedData">
    <Item
      v-for="result in pageItems"
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
import { mapGetters } from "vuex";
import Item from "./Item.vue";

export default {
  name: "item-list",
  components: { Item },
  computed: {
    ...mapGetters({
      fetchedData: "getItems",
      pageItems: "getPageItems",
    }),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
}
</style>
