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
  emits: ["changePage"],
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    entriesPerPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onChangePage(num) {
      this.$emit("changePage", num);
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
