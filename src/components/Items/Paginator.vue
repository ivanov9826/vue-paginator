<template>
  <div>
    <ul>
      <li v-for="(pageNum, index) in totalPages" :key="index">
        <button @click="onChangePage(pageNum)">{{ pageNum }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "paginator",
  computed: {
    totalPages() {
      return this.$store.getters.getPagesCount;
    },
  },
  methods: {
    onChangePage(num) {
      this.$store.dispatch("changePage", { page: num });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
